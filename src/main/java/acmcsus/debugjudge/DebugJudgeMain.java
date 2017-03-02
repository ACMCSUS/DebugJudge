package acmcsus.debugjudge;

import acmcsus.debugjudge.ctrl.ApiController;
import acmcsus.debugjudge.ctrl.TestingController;
import spark.Spark;

import static spark.Spark.*;

public class DebugJudgeMain {
    
    public static void main(String[] args) {
        port(4567);
    
        staticFileLocation("/ngapp");
        get("/hello", TestingController::helloWorld);
    }
    
}
