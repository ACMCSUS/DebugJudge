package acmcsus.debugjudge.ctrl;

import acmcsus.debugjudge.proto.*;
import acmcsus.debugjudge.proto.Competition.*;
import acmcsus.debugjudge.ws.*;
import io.reactivex.Observable;

import java.time.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.stream.*;

import static acmcsus.debugjudge.ctrl.MessageStores.PROFILE_STORE;
import static acmcsus.debugjudge.ctrl.MessageStores.SUBMISSION_STORE;
import static java.util.stream.Collectors.toCollection;
import static java.util.stream.Collectors.toList;

public class ScoreboardBroadcaster {

  private static class TeamBarebones {

    public String name;
    public Long id;
    public Score score;
    public int place;

    TeamBarebones(Competition.Profile prof, Score score) {
      this.name = prof.getName();
      this.id = prof.getId();
      this.score = score;
    }
  }

  private static class Score {
    public int correct = 0;
    public int penalty = 0;
  }

  private static Scoreboard lastScoreboard = null;

  public static Scoreboard getLastScoreboard() {
    return lastScoreboard;
  }

  public static void pushScoreboard() {
    try {
      Collection<Competition.Profile> teams = PROFILE_STORE.streamAll()
          .filter(p -> p.getProfileType() == Profile.ProfileType.TEAM)
          .collect(toList());

      Map<Long, Score> teamScores = new HashMap<>();
      Map<Long, Map<Long, Integer>> teamProblemSubmissionCount = new HashMap<>();
      Map<Long, Map<Long, Boolean>> teamProblemAcceptance = new HashMap<>();

      for (Profile team : teams) {
        teamProblemSubmissionCount.put(team.getId(), new HashMap<>());
        teamScores.put(team.getId(), new Score());
      }

      List<Submission> submissions = SUBMISSION_STORE.readAll();

      for (Submission submission : submissions) {

        if (submission.getTeamId() == 0) {
          continue;
        }

        Score score = teamScores.get(submission.getTeamId());

        Map<Long, Integer> problemCounts = teamProblemSubmissionCount.get(submission.getTeamId());
        problemCounts.put(
            submission.getProblemId(),
            problemCounts.getOrDefault(submission.getProblemId(), 0) + 1);

        if (submission.getJudgement() == SubmissionJudgement.JUDGEMENT_SUCCESS) {
          if (!teamProblemAcceptance.containsKey(submission.getTeamId())) {
            teamProblemAcceptance.put(submission.getTeamId(), new HashMap<>());
          }

          Map<Long, Boolean> problemAcceptances = teamProblemAcceptance.get(submission.getTeamId());
          Boolean prev = problemAcceptances.put(submission.getProblemId(), true);

          if (prev == null || !prev) {
            score.correct += 1;
          }
        }
      }

      List<TeamBarebones> teamBarebones = teams.stream()
          .map(team -> new TeamBarebones(team, teamScores.get(team.getId())))
          .collect(Collectors.toList());

      Comparator<Score> scoreComparator = Comparator
          .<Score, Integer>comparing(score -> score.correct).reversed()
          .thenComparing(score -> score.penalty);

      teamBarebones.sort((a, b) -> scoreComparator.compare(a.score, b.score));

      int place = 1;
      if (!teamBarebones.isEmpty()) {
        teamBarebones.get(0).place = 1;
        for (int i = 1; i < teamBarebones.size(); i += 1) {
          TeamBarebones prev = teamBarebones.get(i - 1);
          TeamBarebones cur = teamBarebones.get(i);

          if (scoreComparator.compare(cur.score, prev.score) != 0) {
            place = i + 1;
          }

          cur.place = place;
        }
      }

      Competition.Scoreboard.Builder scoreboardBuilder = Competition.Scoreboard.newBuilder();
      for (TeamBarebones team : teamBarebones) {
        scoreboardBuilder.addRow(Scoreboard.ScoreboardRow.newBuilder()
            .setProfileName(team.name)
            .setPlace(team.place)
            .setScore(team.score.correct)
            .setPenalty(team.score.penalty)
            .putAllProblemCompletions(teamProblemAcceptance.getOrDefault(team.id, new HashMap<>()))
            .putAllProblemAttempts(teamProblemSubmissionCount.get(team.id))
        );
      }
      scoreboardBuilder.setUpdateTimeMillis(Instant.now().toEpochMilli());

      SocketHandler.broadcastMessage(WebSocket.S2CMessage.newBuilder()
          .setScoreboardUpdateMessage(WebSocket.S2CMessage.ScoreboardUpdateMessage.newBuilder()
              .setScoreboard(scoreboardBuilder))
          .build());

      lastScoreboard = scoreboardBuilder.build();
    }
    catch (Exception e) {
      e.printStackTrace();
    }
  }
}
