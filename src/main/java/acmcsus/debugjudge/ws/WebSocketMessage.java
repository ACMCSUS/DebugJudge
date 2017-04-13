package acmcsus.debugjudge.ws;

import com.fasterxml.jackson.databind.node.JsonNodeFactory;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class WebSocketMessage {
    
    public String who = null;
    public String what = null;
    public String data = null;
    
    public static WebSocketMessage who(String who) {
        WebSocketMessage msg = new WebSocketMessage();
        msg.who = who;
        return msg;
    }
    public WebSocketMessage what(String what) {
        this.what = what;
        return this;
    }
    public WebSocketMessage data(String data) {
        this.data = data;
        return this;
    }
    
    public String toString() {
        ObjectNode json = new ObjectNode(JsonNodeFactory.instance);
        json.put("who", who);
        json.put("what", what);
        json.put("data", data);
        return json.toString();
    }
}