package acmcsus.debugjudge;

import acmcsus.debugjudge.ctrl.TestingController;

import static spark.Spark.*;

public class DebugJudgeMain {
    
    public static void main(String[] args) {
        port(4567);
        
        get("/hello", TestingController::helloWorld);
    }
    
}
