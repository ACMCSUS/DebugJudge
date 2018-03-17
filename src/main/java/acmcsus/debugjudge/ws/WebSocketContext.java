package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.model.Profile;
import acmcsus.debugjudge.proto.*;
import org.eclipse.jetty.websocket.api.Session;

public class WebSocketContext {

    public Profile profile;
    public Session session;

    public WebSocket.C2SMessage req;
    public WebSocket.S2CMessage res;

}
