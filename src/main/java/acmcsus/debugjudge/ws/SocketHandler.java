package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.ctrl.SecurityApi;
import acmcsus.debugjudge.model.Event;
import acmcsus.debugjudge.model.Judge;
import acmcsus.debugjudge.model.Profile;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.eclipse.jetty.websocket.api.Session;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketClose;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketConnect;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketMessage;
import org.eclipse.jetty.websocket.api.annotations.WebSocket;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import spark.Request;
import spark.Response;

import java.io.IOException;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.TimeUnit;

@WebSocket
public class SocketHandler {
    
    private final Map<String, ISocketEventHandler> handlers;
    
    private SocketHandler(){
        this.handlers = new HashMap<>();
        
        handlers.put("jdg", JudgeQueueHandler.getInstance());
        handlers.put("echo", System.out::println);
    }
    private static final SocketHandler theInstance = new SocketHandler();
    public static SocketHandler getInstance() { return theInstance; }
    
    private static Logger logger = LoggerFactory.getLogger(SocketHandler.class);
    
    private static Map<Profile, Set<Session>> profileSessionMap = new ConcurrentHashMap<>();
    private static Map<Session, Profile> sessionProfileMap = new ConcurrentHashMap<>();
    private static Map<String, Profile> nonceProfileMap = new ConcurrentHashMap<>();
    
    public static String nonceRoute(Request req, Response res) {
        SecurityApi.loggedInFilter(req, res);
        
        String nonce = UUID.randomUUID().toString();
        nonceProfileMap.put(nonce, SecurityApi.getProfile(req));
        return nonce;
    }
    
    @OnWebSocketConnect
    public void onConnect(Session user) throws Exception {
        user.setIdleTimeout(TimeUnit.HOURS.toMillis(12));
        logger.info("WebSocket opened");
    }

    @OnWebSocketClose
    public void onClose(Session user, int statusCode, String reason) {
        logger.info("WebSocket closed");
        
        Profile profile = sessionProfileMap.remove(user);
        if (profile != null) {
            if (profile instanceof Judge) {
                JudgeQueueHandler.getInstance().disconnected((Judge) profile);
            }
            
            profileSessionMap.remove(profile);
        }
    }

    @OnWebSocketMessage
    public void onMessage(Session user, String message) {
        ObjectMapper mapper = new ObjectMapper();
        IncomingWebSocketMessage msg;
        
        try {
            msg = mapper.readValue(message, IncomingWebSocketMessage.class);
        } catch (IOException e) {
            e.printStackTrace();
            return;
        }
        
        msg.profile = sessionProfileMap.get(user);
        msg.session = user;
        
        logger.info("Received Message: " + message);
        if ("login".equals(msg.who)) {
            
            try {
                String nonce = msg.data.asText("");
                
                if (nonce == null || nonce.isEmpty()) {
                    logger.warn("Empty Login Request");
                    user.getRemote().sendString(WebSocketMessage.who("dbg").data("Empty Login Request").toString());
                }
                
                Profile profile = nonceProfileMap.remove(nonce);
                
                if (profile != null) {
                    if (!profileSessionMap.containsKey(profile))
                        profileSessionMap.put(profile, new HashSet<>());
                    
                    profileSessionMap.get(profile).add(user);
                    sessionProfileMap.put(user, profile);
                    debug(profile, "Login Successful!");
                } else {
                    user.getRemote().sendString(WebSocketMessage.who("dbg").data("Bad Nonce.").toString());
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        } else {
            ISocketEventHandler who = handlers.get(msg.who);
            
            if (who == null) {
                System.out.println("I don't understand: " + message);
                return;
            }
            
            if ((msg.profile != null && who.allowUse(msg.profile.getType()))
                    || (msg.profile == null && who.allowUse(null))) {
                who.handle(msg);
            } else {
                if (msg.profile == null) {
                    System.err.println("Someone tried using a WebSocket from " +
                            msg.session.getRemoteAddress().getAddress() +
                            " without being logged in: " + msg);
                } else {
                    if (msg.profile.getType() != Profile.ProfileType.JUDGE) {
                        logger.warn("User " + msg.profile.getName() + " tried using the "+msg.who+" WS Handler!");
                    }
                }
            }
        }
    }
    public static void notify(Profile profile, Event event) {
        try {
            Set<Session> sessions = profileSessionMap.get(profile);
            
            if (sessions != null) {
                for (Session session : sessions) {
                    session.getRemote().sendString(WebSocketMessage.who("api").what("rld-submissions").toString());
                }
            }
        } catch (Exception e) {
            logger.warn("Error while notifying "+profile.getName()+": ", e);
        }
    }
    public static void debug(Profile profile, String message) {
        try {
            Set<Session> sessions = profileSessionMap.get(profile);
            
            if (sessions != null) {
                for (Session session : sessions) {
                    session.getRemote().sendString(WebSocketMessage.who("dbg").data(message).toString());
                }
            }
        } catch (Exception e) {
            logger.warn("Error while debugging "+profile.getName()+": ", e);
        }
    }
    
    public static void alert(Session socketSession, String message) {
        try {
            socketSession.getRemote().sendString(WebSocketMessage.who("alert").data(message).toString());
        } catch (Exception ignored) {}
    }
}