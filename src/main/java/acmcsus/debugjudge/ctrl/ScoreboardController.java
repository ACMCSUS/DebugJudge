package acmcsus.debugjudge.ctrl;

import acmcsus.debugjudge.Views;
import acmcsus.debugjudge.model.Competition;
import acmcsus.debugjudge.model.Problem;
import acmcsus.debugjudge.model.Submission;
import acmcsus.debugjudge.model.Team;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import spark.Request;
import spark.Response;

import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static spark.Spark.halt;

/**
 * Created by merrillm on 4/2/17.
 */
public class ScoreboardController {
    
//    private static Map<Long, String> lastScoreboard = null;
//    private static Map<Long, Long> lastScoreboardCacheTime;
    
    
    private static class TeamBarebones {
        public String name;
        public Long id;
        TeamBarebones(Team team) {
            this.name = team.teamName;
            this.id = team.id;
        }
    }
    
    public static String getScoreboard(Request req, Response res) {
        Competition competition = SecurityApi.getCompetition(req);
        
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
            List<Problem> problems = Problem.find.query()
                    .where()
                    .eq("competition_id", competition.id)
                    .findList();
            
            problems.sort(Comparator.comparing(p -> p.orderIndex));
            scoreboardMap.put("problems", problems);
            
            List<Team> teams = Team.find.query()
                    .where()
                    .eq("competition_id", competition.id)
                    .findList();
    
            scoreboardMap.put("teams", teams.stream().map(TeamBarebones::new).toArray());
            
            Map<Long, Map<Long, Long>> teamProblemSubmissionCount = new HashMap<>();
            Map<Long, Map<Long, Boolean>> teamProblemAcceptance = new HashMap<>();
    
            List<Submission> submissions = Submission.find.query()
                    .fetch("team", "*")
                    .where()
                        .in("team_id", teams.stream().map(t -> t.id).toArray())
                    .findList();
            
            for (Submission submission : submissions) {
                
//                if (submission.team == null || submission.team.competition == null
//                        || submission.team.competition.id != competition.id)
//                    continue;
                
                if (!teamProblemSubmissionCount.containsKey(submission.team.id))
                    teamProblemSubmissionCount.put(submission.team.id, new HashMap<>());
                
                Map<Long, Long> problemCounts = teamProblemSubmissionCount.get(submission.team.id);
                problemCounts.put(submission.problem.id, problemCounts.getOrDefault(submission.problem.id, 0L) + 1);
                
                if (submission.accepted != null && submission.accepted) {
                    if (!teamProblemAcceptance.containsKey(submission.team.id))
                        teamProblemAcceptance.put(submission.team.id, new HashMap<>());
                    
                    Map<Long, Boolean> problemAcceptances = teamProblemAcceptance.get(submission.team.id);
                    problemAcceptances.put(submission.problem.id, true);
                }
            }
            
            scoreboardMap.put("teamSubmissionCounts", teamProblemSubmissionCount);
            scoreboardMap.put("teamAcceptances", teamProblemAcceptance);
            
            return writer.writeValueAsString(scoreboardMap);
        } catch (Exception e) {
            e.printStackTrace();
            return "{}";
        }
    }
}
