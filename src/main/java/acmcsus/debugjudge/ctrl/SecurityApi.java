package acmcsus.debugjudge.ctrl;

import acmcsus.debugjudge.model.Competition;
import acmcsus.debugjudge.model.Judge;
import acmcsus.debugjudge.model.Team;
import spark.Request;
import spark.Response;

import static spark.Spark.halt;

public class SecurityApi {
    private SecurityApi(){ /* Static */ }
    
    public static void loggedInFilter(Request req, Response res) {
        if (getTeam(req) == null && getJudge(req) == null) {
            throw halt(401, "You must be logged in to use this API route!");
        }
    }
    public static void teamFilter(Request req, Response res) {
        if (getTeam(req) == null) {
            throw halt(401, "You must be logged in as a team to use this API route!");
        }
    }
    public static void judgeFilter(Request req, Response res) {
        if (getJudge(req) == null) {
            throw halt(401, "You must be logged in as a judge to use this API route!");
        }
    }
    
    public static Team getTeam(Request req) {
        String teamId = req.session().attribute("team");
//        if (teamId == null || teamId.isEmpty()) return null;
        
        try {
//            return Team.find.byId(Long.valueOf(teamId));
            return Team.find.byId(1L);
        } catch (Exception e) {
            return null;
        }
    }
    public static Judge getJudge(Request req) {
        String judgeId = req.session().attribute("judge");
        if (judgeId == null || judgeId.isEmpty()) return null;
        
        try {
            return Judge.find.byId(Long.valueOf(judgeId));
        } catch (Exception e) {
            return null;
        }
    }
    public static Competition getCompetition(Request req) {
        Team team = getTeam(req);
        if (team != null) return team.competition;
        
        Judge judge = getJudge(req);
        if (judge != null) return judge.competition;
        
        return null;
    }
    
}
