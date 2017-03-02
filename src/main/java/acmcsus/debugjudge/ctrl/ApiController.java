package acmcsus.debugjudge.ctrl;

import acmcsus.debugjudge.model.Competition;
import com.fasterxml.jackson.core.JsonProcessingException;
import spark.Request;
import spark.Response;

/**
 * Created by merrillm on 2/28/17.
 */
public class ApiController {
    
    public static String getSubmissions(Request req, Response res) throws JsonProcessingException {
        Competition c = new Competition();
        c.name = "Testing!";
        c.key = "test";
        c.save();
        
//        ObjectMapper mapper = new ObjectMapper();
//        return mapper.writeValueAsString(Submission.find.all());
        return Competition.find.all().size() +"";
    }
}
