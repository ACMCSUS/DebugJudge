package acmcsus.debugjudge.ctrl;

import static acmcsus.debugjudge.ctrl.CompetitionController.getCompetitionState;
import static acmcsus.debugjudge.ctrl.FileStore.getTeams;

import acmcsus.debugjudge.Views;
import acmcsus.debugjudge.model.Problem;
import acmcsus.debugjudge.model.Profile;
import acmcsus.debugjudge.model.Submission;
import acmcsus.debugjudge.proto.Competition.CompetitionState;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import spark.Request;
import spark.Response;

public class ScoreboardController {

  private static class TeamBarebones {

    public String name;
    public Long id;
    public Score score;
    public int place;

    TeamBarebones(Profile prof, Score score) {
      this.name = prof.name;
      this.id = prof.id;
      this.score = score;
    }
  }

  private static class Score {
    public int correct = 0;
    public int penalty = 0;
  }

  public static String getScoreboard(Request req, Response res) {
    Profile profile = SecurityApi.getProfile(req);

    Map<String, Object> scoreboardMap = new HashMap<>();
    ObjectWriter writer = new ObjectMapper().writerWithView(Views.PublicView.class);

    try {

      List<Problem> problems;

      if (getCompetitionState() != CompetitionState.WAITING || profile.isJudge) {
        problems = FileStore.getProblems();
      }
      else {
        problems = new ArrayList<>();
      }

      problems.sort(Comparator.comparing(p -> p.orderIndex));
      scoreboardMap.put("problems", problems);

      Collection<Profile> teams = getTeams();

      Map<Long, Score> teamScores = new HashMap<>();
      Map<Long, Map<Long, Long>> teamProblemSubmissionCount = new HashMap<>();
      Map<Long, Map<Long, Boolean>> teamProblemAcceptance = new HashMap<>();

      for (Profile team : teams) {
        teamProblemSubmissionCount.put(team.id, new HashMap<>());
        teamScores.put(team.id, new Score());
      }

      List<Submission> submissions = new ArrayList<>();
      getTeams().forEach(t -> submissions.addAll(t.submissions));

      for (Submission submission : submissions) {

        if (submission.teamId == null) { continue; }

        Score score = teamScores.get(submission.teamId);

        Map<Long, Long> problemCounts = teamProblemSubmissionCount.get(submission.teamId);
        problemCounts
          .put(submission.problemId, problemCounts.getOrDefault(submission.problemId, 0L) + 1);

        if (submission.accepted != null && submission.accepted) {
          if (!teamProblemAcceptance.containsKey(submission.teamId)) {
            teamProblemAcceptance.put(submission.teamId, new HashMap<>());
          }

          Map<Long, Boolean> problemAcceptances = teamProblemAcceptance.get(submission.teamId);
          Boolean prev = problemAcceptances.put(submission.problemId, true);

          if (prev == null || !prev) {
            score.correct += 1;
          }
        }
      }

      List<TeamBarebones> teamBarebones = teams.stream()
        .map(team -> new TeamBarebones(team, teamScores.get(team.id)))
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

      scoreboardMap.put("teams", teamBarebones);
      scoreboardMap.put("teamSubmissionCounts", teamProblemSubmissionCount);
      scoreboardMap.put("teamAcceptances", teamProblemAcceptance);

      return writer.writeValueAsString(scoreboardMap);
    } catch (Exception e) {
      e.printStackTrace();
      return "{}";
    }
  }
}
