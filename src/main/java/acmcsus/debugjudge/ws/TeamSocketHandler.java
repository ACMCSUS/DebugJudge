package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.ctrl.SecurityApi;
import acmcsus.debugjudge.model.Event;
import acmcsus.debugjudge.model.Team;
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
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.TimeUnit;

@WebSocket
public class TeamSocketHandler {
    
    private TeamSocketHandler(){}
    private static final TeamSocketHandler theInstance = new TeamSocketHandler();
    public static TeamSocketHandler getInstance() { return theInstance; }
    
    private static Logger logger = LoggerFactory.getLogger(TeamSocketHandler.class);
    
    private static Map<Team, Set<Session>> teamSessionMap = new ConcurrentHashMap<>();
    private static Map<Session, Team> sessionTeamMap = new ConcurrentHashMap<>();
    private static Map<String, Team> nonceTeamMap = new ConcurrentHashMap<>();
    
    public static String nonceRoute(Request req, Response res) {
        SecurityApi.teamFilter(req, res);
        
        String nonce = UUID.randomUUID().toString();
        nonceTeamMap.put(nonce, SecurityApi.getTeam(req));
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
        
        Team team = sessionTeamMap.remove(user);
        if (team != null) {
            teamSessionMap.remove(team);
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
                    user.getRemote().sendString("\"dbg:Empty Login Request\"");
                }
                
                Team team = nonceTeamMap.remove(nonce);
                
                if (team != null) {
                    if (!teamSessionMap.containsKey(team))
                        teamSessionMap.put(team, new HashSet<>());
                    
                    teamSessionMap.get(team).add(user);
                    sessionTeamMap.put(user, team);
                    user.getRemote().sendString("\"dbg:Login Successful\"");
                    System.out.println("Sent dbg.");
                } else {
                    user.getRemote().sendString("\"dbg:Bad Nonce\"");
                }
            } catch (Exception ignored) { /* Oh well lol */ }
        }
    }
    
    public static void notifyTeam(Team team, Event event) {
        try {
            Set<Session> sessions = teamSessionMap.get(team);
            
            for (Session session : sessions) {
                logger.info("Telling team to reload.");
//                session.getRemote().sendString(event.toString());
                session.getRemote().sendString("\"rld:submissions\"");
            }
        } catch (IOException e) {
            logger.warn("Error while notifying team "+team.teamName+": ", e);
        }
    }
    public static void debugTeam(Team team, String message) {
        try {
            Set<Session> sessions = teamSessionMap.get(team);
    
            for (Session session : sessions) {
                logger.info("Telling team to reload.");
                session.getRemote().sendString("\"dbg:" + message + "\"");
            }
        } catch (IOException e) {
            logger.warn("Error while notifying team "+team.teamName+": ", e);
        }
    }

}