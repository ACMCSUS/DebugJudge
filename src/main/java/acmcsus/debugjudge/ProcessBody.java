package acmcsus.debugjudge;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.net.URLDecoder;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.ServletException;
import spark.Request;

public class ProcessBody {

  public static String asString(Request req) {
    return req.body();
  }

  public static JsonNode asJson(Request req) throws IOException {
    ObjectMapper mapper = new ObjectMapper();
    return mapper.readTree(req.body());
  }

  public static <T> T asPojoFromJson(Request req, Class<T> clazz) throws IOException {
    ObjectMapper mapper = new ObjectMapper();
    return mapper.readerFor(clazz).readValue(req.body());
  }

  public static Map<String, String> asMap(String urlEncoded, String encoding)
    throws IOException, ServletException {
    Map<String, String> map = new HashMap<>();
    String[] entries = urlEncoded.trim().split("&");

    for (String entry : entries) {
      String[] split = entry.trim().split("=");
      String key = split[0];
      String value = split.length == 1 ? null : URLDecoder.decode(split[1], encoding);

      map.put(key, value);
    }

    return map;
  }

}
