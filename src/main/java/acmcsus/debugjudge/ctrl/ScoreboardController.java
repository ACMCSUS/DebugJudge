package acmcsus.debugjudge.ctrl;

import static spark.Spark.halt;

import acmcsus.debugjudge.Views;
import acmcsus.debugjudge.model.Competition;
import acmcsus.debugjudge.model.Problem;
import acmcsus.debugjudge.model.Profile;
import acmcsus.debugjudge.model.Submission;
import acmcsus.debugjudge.model.Team;
import acmcsus.debugjudge.proto.Competition.CompetitionState;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import spark.Request;
import spark.Response;

/**
 * Created by merrillm on 4/2/17.
 */
public class ScoreboardController {

  private static class TeamBarebones {

    public String name;
    public Long id;
    public Score score;
    public int place;

    TeamBarebones(Team team, Score score) {
      this.name = team.teamName;
      this.id = team.id;
      this.score = score;
    }
  }

  private static class Score implements Comparable<Score> {

    public int correct = 0;
//        public int penalty = 0;

    @Override
    public int compareTo(Score o) {
      if (o == null) { return 1; }
//            if (correct != o.correct)
      return -Integer.compare(correct, o.correct);
//            return Integer.compare(penalty, o.penalty);
    }
  }

  public static String getScoreboard(Request req, Response res) {
    Competition competition = SecurityApi.getCompetition(req);
    Profile profile = SecurityApi.getProfile(req);

    if (competition == null) {
      throw halt(400);
    }

//        if (lastScoreboardCacheTime.containsKey(competition.id)) {
//            if (System.currentTimeMillis() - lastScoreboardCacheTime.get(competition.id) > 500) {
//                return lastScoreboard.get(competition.id);
//            }
//        }

    Map<String, Object> scoreboardMap = new HashMap<>();
    ObjectWriter writer = new ObjectMapper().writerWithView(Views.PublicView.class);

    try {

      List<Problem> problems;

      if (ApiController.competitionState != CompetitionState.WAITING ||
        profile.getType() == Profile.ProfileType.JUDGE) {
        problems = Problem.find.query()
          .where()
          .eq("competition_id", competition.id)
          .findList();
      }
      else {
        problems = new ArrayList<>();
      }

      problems.sort(Comparator.comparing(p -> p.orderIndex));
      scoreboardMap.put("problems", problems);

      List<Team> teams = Team.find.query()
        .where()
        .eq("competition_id", competition.id)
        .findList();

      Map<Long, Score> teamScores = new HashMap<>();
      Map<Long, Map<Long, Long>> teamProblemSubmissionCount = new HashMap<>();
      Map<Long, Map<Long, Boolean>> teamProblemAcceptance = new HashMap<>();

      for (Team team : teams) {
        teamProblemSubmissionCount.put(team.id, new HashMap<>());
        teamScores.put(team.id, new Score());
      }

      List<Submission> submissions = Submission.find.query()
        .fetch("team", "*")
        .where()
        .in("team_id", teams.stream().map(t -> t.id).toArray())
        .findList();

      for (Submission submission : submissions) {

//                if (submission.team == null || submission.team.competition == null
//                        || submission.team.competition.id != competition.id)
//                    continue;

        Score score = teamScores.get(submission.team.id);

        Map<Long, Long> problemCounts = teamProblemSubmissionCount.get(submission.team.id);
        problemCounts
          .put(submission.problem.id, problemCounts.getOrDefault(submission.problem.id, 0L) + 1);

        if (submission.accepted != null && submission.accepted) {
          if (!teamProblemAcceptance.containsKey(submission.team.id)) {
            teamProblemAcceptance.put(submission.team.id, new HashMap<>());
          }

          Map<Long, Boolean> problemAcceptances = teamProblemAcceptance.get(submission.team.id);
          Boolean prev = problemAcceptances.put(submission.problem.id, true);

          if (prev == null || !prev) {
            score.correct += 1;
          }
        }
      }

      List<TeamBarebones> teamBarebones = teams.stream()
        .map(team -> new TeamBarebones(team, teamScores.get(team.id)))
        .collect(Collectors.toList());
      teamBarebones.sort(Comparator.comparing(t -> t.score));

      int place = 1;
      if (!teamBarebones.isEmpty()) {
        teamBarebones.get(0).place = 1;
        for (int i = 1; i < teamBarebones.size(); i += 1) {
          TeamBarebones prev = teamBarebones.get(i - 1);
          TeamBarebones cur = teamBarebones.get(i);

          if (cur.score.compareTo(prev.score) != 0) {
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
