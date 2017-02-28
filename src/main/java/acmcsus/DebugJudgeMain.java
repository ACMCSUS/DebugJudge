package acmcsus;

import acmcsus.ctrl.TestingController;

import static spark.Spark.get;

public class DebugJudgeMain {
    
    public static void main(String[] args) {
        get("/hello", TestingController::helloWorld);
    }
    
}
