package acmcsus.debugjudge.ctrl;

import acmcsus.debugjudge.ProcessBody;
import acmcsus.debugjudge.model.Team;
import acmcsus.debugjudge.ws.TeamSocketHandler;
import spark.Request;
import spark.Response;

import java.util.List;

/**
 * Created by merrillm on 2/28/17.
 */
public class TestingController {
    
    public static String helloWorld(Request req, Response res) {
        return "Hello World!";
    }
    
    public static String echo(Request req, Response res) {
        return ProcessBody.asString(req);
    }
    
    public static String wsBroadcast(Request req, Response res) {
        List<Team> teams = Team.find.all();
        
        for (Team team : teams) {
            TeamSocketHandler.debugTeam(team, "Testing!");
        }
        
        return "";
    }
    
}
