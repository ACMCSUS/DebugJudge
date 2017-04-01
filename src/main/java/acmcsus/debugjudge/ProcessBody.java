package acmcsus.debugjudge;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import spark.Request;

import java.io.IOException;

public class ProcessBody {
    
    public static String asString(Request req) {
        return req.body();
    }
    
    public static JsonNode asJson(Request req) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        return mapper.readTree(req.body());
    }
    
    public static <T> T asPojo(Request req, Class<T> clazz) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        return mapper.readerFor(clazz).readValue(req.body());
    }
    
}
