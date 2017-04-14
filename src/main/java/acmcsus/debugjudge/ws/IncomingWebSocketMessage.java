package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.model.Profile;
import org.eclipse.jetty.websocket.api.Session;

public class IncomingWebSocketMessage extends WebSocketMessage {
    
    public Profile profile;
    public Session session;
    
}
