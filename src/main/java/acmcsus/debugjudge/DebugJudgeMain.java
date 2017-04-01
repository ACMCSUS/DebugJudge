package acmcsus.debugjudge;

import acmcsus.debugjudge.ws.TeamSocketHandler;

import static acmcsus.debugjudge.ctrl.ApiController.routeAPI;
import static spark.Spark.*;

public class DebugJudgeMain {
    
    public static void main(String[] args) {
        port(4567);
        staticFileLocation("/ngapp");
        webSocket("/ws/team", TeamSocketHandler.getInstance());
        
        routeAPI();
        get("/ws/teamNonce", TeamSocketHandler::nonceRoute);
        
        angularRoutes("/team", "/judge");
        
        init();
    }
    
    public static void angularRoutes(String... routes) {
        for (String route : routes) {
            get(route, (res, req) -> {
                try {
                    return DebugJudgeMain.class.getResourceAsStream("/ngapp/index.html");
                } catch (Exception e) {
                    e.printStackTrace();
                    throw e;
                }
            });
        }
    }
    
}
