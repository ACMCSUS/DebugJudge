package acmcsus.debugjudge;

import acmcsus.debugjudge.ctrl.SecurityApi;
import acmcsus.debugjudge.ws.SocketHandler;
import spark.Request;
import spark.Response;
import spark.staticfiles.StaticFilesConfiguration;

import static acmcsus.debugjudge.ctrl.ApiController.routeAPI;
import static spark.Spark.*;

public class DebugJudgeMain {
    
    public static void main(String[] args) {
        port(4567);
        webSocket("/ws/connect", SocketHandler.getInstance());
        get("/ws/nonce", SocketHandler::nonceRoute);
        
        routeAPI();
        
        before("/register", SecurityApi::judgeFilter);
        get("/register", DebugJudgeMain::registerRoute);
        post("/register", SecurityApi::register);
        
        get("/login", DebugJudgeMain::loginRoute);
        post("/login", SecurityApi::login);
        get("/logout", SecurityApi::logout);
        
        angularRoutes("/", "/index.html", "/team", "/judge", "/scoreboard");
    
        StaticFilesConfiguration staticHandler = new StaticFilesConfiguration();
        staticHandler.configure("/ngapp");
        before((req, res) -> staticHandler.consume(req.raw(), res.raw()));
        
        init();
    }
    
    private static void angularRoutes(String... routes) {
        for (String routeString : routes) {
            before(routeString, DebugJudgeMain::htmlFilter);
            get(routeString, DebugJudgeMain::htmlRoute);
        }
    }
    
    private static void htmlFilter(Request req, Response res) {
        if (!SecurityApi.isLoggedIn(req))
            res.redirect("/login");
    }
    private static Object htmlRoute(Request req, Response res) {
        try {
            return DebugJudgeMain.class.getResourceAsStream("/ngapp/index.html");
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }
    private static Object loginRoute(Request req, Response res) {
        try {
            if (SecurityApi.isLoggedIn(req)) {
                res.redirect("/");
                return "";
            }
            return DebugJudgeMain.class.getResourceAsStream("/login.html");
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }
    private static Object registerRoute(Request req, Response res) {
        try {
            if (SecurityApi.getJudge(req) == null){
                res.redirect("/");
                return "";
            }
            return DebugJudgeMain.class.getResourceAsStream("/register.html");
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }
    
}
