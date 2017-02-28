package acmcsus.ctrl;

import spark.Request;
import spark.Response;

/**
 * Created by merrillm on 2/28/17.
 */
public class TestingController {
    
    public static String helloWorld(Request req, Response res) {
        return "Hello World!";
    }
    
}
