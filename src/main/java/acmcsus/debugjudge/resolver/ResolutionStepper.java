package acmcsus.debugjudge.resolver;

import acmcsus.debugjudge.proto.Competition.Resolution;
import acmcsus.debugjudge.proto.Competition.Scoreboard;
import acmcsus.debugjudge.proto.Competition.Submission;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

import static acmcsus.debugjudge.proto.Competition.SubmissionJudgement.JUDGEMENT_SUCCESS;
import static java.util.Collections.sort;
import static java.util.Comparator.comparing;

public class ResolutionStepper implements Iterator<Resolution> {

  private static class Team {

    int teamId;
    String name;
    HashSet<Integer> solvedProblems;
    HashMap<Integer, List<Submission>> unresolvedSubmissionsByProblem;
    int solveCount;
    int penalty;

    public Team(int teamId, String name, Map<Integer, Boolean> solves, int penalty) {
      this.teamId = teamId;
      this.name = name;
      this.solvedProblems = solves.keySet().stream()
          .filter(solves::get).distinct()
          .collect(Collectors.toCollection(HashSet::new));
      this.unresolvedSubmissionsByProblem = new HashMap<>();
      this.solveCount = solvedProblems.size();
      this.penalty = penalty;
    }

  }

  private final Map<Integer, Team> teamsById;
  private final List<Team> teams;
  private final List<Submission> subs;
  private Resolution next = null;

  public ResolutionStepper(Scoreboard scoreboard, List<Submission> subs) {
    this.teamsById = new HashMap<>();
    this.teams = new ArrayList<>();
    this.subs = subs;

    scoreboard.getRowList()
        .stream()
        .map(row -> new Team(
            row.getTeamId(),
            row.getProfileName(),
            row.getProblemCompletionsMap(),
            row.getPenalty()))
        .forEach(team -> {
          teams.add(team);
          teamsById.put(team.teamId, team);
        });

    for (Submission sub : subs) {
      Team team = teamsById.get(sub.getTeamId());

      if (team != null && !team.solvedProblems.contains(sub.getProblemId())) {
        team.unresolvedSubmissionsByProblem
            .computeIfAbsent(sub.getProblemId(), ArrayList::new)
            .add(sub);
      }
    }
  }

  private void settleChanges() {
    teams.sort((a, b) -> {
      if (a.solveCount != b.solveCount) {
        return -Integer.compare(a.solveCount, b.solveCount);
      }
      return Integer.compare(a.penalty, b.penalty);
    });

    subs.removeIf(
        sub -> {
          Team team = teamsById.get(sub.getTeamId());
          return team.solvedProblems.contains(sub.getProblemId());
        });

    teams.forEach(team ->
        team.unresolvedSubmissionsByProblem.keySet()
            .removeIf(team.solvedProblems::contains));
  }

  /**
   * Populate this.next with the next Resolution to apply, if it exists.
   */
  private void getNext() {
    settleChanges();
    ListIterator<Team> teamIterator = teams.listIterator(teams.size());

    while (teamIterator.hasPrevious()) {
      Team team = teamIterator.previous();
      List<Integer> unsolvedProbs = new ArrayList<>(team.unresolvedSubmissionsByProblem.keySet());
      sort(unsolvedProbs);

      for (Integer problemId : unsolvedProbs) {
        boolean solved = false;
        int penalty = 0;

        List<Submission> submissionsForProblem = team.unresolvedSubmissionsByProblem.get(problemId);
        submissionsForProblem.sort(comparing(Submission::getSubmissionTimeSeconds));

        for (Submission sub : submissionsForProblem) {
          penalty += 20;

          if (sub.getJudgement() == JUDGEMENT_SUCCESS) {
            solved = true;
            penalty += sub.getSubmissionTimeSeconds()/60 - 20;
            break;
          }
        }

        this.next = Resolution.newBuilder()
            .setTeamId(team.teamId)
            .setProblemId(problemId)
            .setSolved(solved)
            .setPenalty(solved ? penalty : 0)
            .build();

        if (solved) {
          team.solvedProblems.add(problemId);
        }
      }
    }
  }

  public Resolution next() {
    if (this.hasNext()) {
      Resolution ret = this.next;
      this.next = null;
      return ret;
    }
    throw new NoSuchElementException();
  }

  public boolean hasNext() {
    if (this.next == null) {
      this.getNext();
    }
    return this.next != null;
  }

}
