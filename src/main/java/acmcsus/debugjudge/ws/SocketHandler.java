package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.ctrl.SecurityApi;
import acmcsus.debugjudge.model.Event;
import acmcsus.debugjudge.model.Judge;
import acmcsus.debugjudge.model.Profile;
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

import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.TimeUnit;

@WebSocket
public class SocketHandler {
    
    private SocketHandler(){}
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
        logger.info("Received Message: " + message);
        
        if (message.startsWith("login:")) {
            ObjectMapper mapper = new ObjectMapper();
            
            try {
                String nonce = message.substring(6);
                
                if (nonce.isEmpty()) {
                    logger.warn("Empty Login Request");
                    user.getRemote().sendString("{\"who\":\"dbg\",\"data\":\"Empty Login Request\"}");
                }
                
                Profile profile = nonceProfileMap.remove(nonce);
                
                if (profile != null) {
                    if (!profileSessionMap.containsKey(profile))
                        profileSessionMap.put(profile, new HashSet<>());
                    
                    profileSessionMap.get(profile).add(user);
                    sessionProfileMap.put(user, profile);
                    user.getRemote().sendString("{" +
                            "\"who\":\"dbg\"," +
                            "\"data\":\"Login Successful\"" +
                            "}");
                    System.out.println("Sent dbg.");
                } else {
                    user.getRemote().sendString("{" +
                            "\"who\":\"dbg\"," +
                            "\"data\":\"Bad Nonce\"" +
                            "}");
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        } else {
            Profile profile = sessionProfileMap.get(user);
            
            if (profile == null) {
                System.err.println("Someone tried using a WebSocket from " +
                        user.getRemoteAddress().getAddress() +
                        " without being logged in!");
                return;
            }
            
            if (message.startsWith("jdg:")) {
                
                if (profile.getType() != Profile.ProfileType.JUDGE) {
                    System.err.println("Non-judge user " + profile.getName() + " tried using the judger!");
                    return;
                }
        
                if (message.equals("jdg:start")) {
                    JudgeQueueHandler.getInstance().connected((Judge) profile, user);
                } else if (message.equals("jdg:stop")) {
                    JudgeQueueHandler.getInstance().disconnected((Judge) profile);
                }
            }
        }
    }
    public static void notify(Profile profile, Event event) {
        try {
            Set<Session> sessions = profileSessionMap.get(profile);
            
            for (Session session : sessions) {
                session.getRemote().sendString("{\"who\":\"api\",\"what\":\"rld-submissions\"}");
            }
        } catch (Exception e) {
            logger.warn("Error while notifying "+profile.getName()+": ", e);
        }
    }
    public static void debug(Profile profile, String message) {
        try {
            Set<Session> sessions = profileSessionMap.get(profile);
    
            for (Session session : sessions) {
                session.getRemote().sendString("{\"who\":\"dbg\",\"data\":\"" + message.replaceAll("\"", "\\\"")+ "\"}");
            }
        } catch (Exception e) {
            logger.warn("Error while debugging "+profile.getName()+": ", e);
        }
    }

}