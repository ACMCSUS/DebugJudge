package acmcsus.debugjudge.ws;

import static acmcsus.debugjudge.ws.JudgeSocketHandler.handleJ2SMessage;
import static acmcsus.debugjudge.ws.TeamSocketHandler.handleT2SMessage;
import static com.google.protobuf.TextFormat.shortDebugString;

import acmcsus.debugjudge.ctrl.SecurityApi;
import acmcsus.debugjudge.model.Profile;
import acmcsus.debugjudge.proto.WebSocket.C2SMessage;
import acmcsus.debugjudge.proto.WebSocket.S2CMessage;
import acmcsus.debugjudge.proto.WebSocket.S2CMessage.AlertMessage;
import acmcsus.debugjudge.proto.WebSocket.S2CMessage.DebugMessage;
import acmcsus.debugjudge.proto.WebSocket.S2CMessage.LoginResultMessage;
import acmcsus.debugjudge.proto.WebSocket.S2CMessage.S2JMessage;
import acmcsus.debugjudge.proto.WebSocket.S2CMessage.S2TMessage;
import java.io.IOException;
import java.io.InputStream;
import java.nio.ByteBuffer;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.TimeUnit;
import org.eclipse.jetty.websocket.api.Session;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketClose;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketConnect;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketMessage;
import org.eclipse.jetty.websocket.api.annotations.WebSocket;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import spark.Request;
import spark.Response;

@WebSocket
public class SocketHandler {

  /* Singleton */
  private SocketHandler() {
  }

  private static final SocketHandler theInstance = new SocketHandler();

  public static SocketHandler getInstance() {
    return theInstance;
  }

  private static Logger logger = LoggerFactory.getLogger(SocketHandler.class);

  private static Map<Long, Set<Session>> profileSessionMap = new ConcurrentHashMap<>();
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
      if (profile.isJudge) {
        JudgeQueueHandler.getInstance().disconnected(profile);
      }

      profileSessionMap.remove(profile.id);
    }
  }

  @OnWebSocketMessage
  public void onMessage(Session user, InputStream inputStream) {
    WebSocketContext ctx = new WebSocketContext();

    try {
      ctx.profile = sessionProfileMap.get(user);
      ctx.session = user;
      ctx.req = C2SMessage.parseFrom(inputStream);

      logger.info("Received Message: " + shortDebugString(ctx.req));

      switch (ctx.req.getValueCase()) {
        case LOGINMESSAGE: {
          loginMessage(ctx);
          break;
        }
        case T2SMESSAGE: {
          if (ctx.profile != null && ctx.profile.isTeam) {
            handleT2SMessage(ctx);
          }
          else {
            logger.warn("WS: Attempt to use T2SMessage while not registered! " +
              shortDebugString(ctx.req));
            return;
          }
          break;
        }
        case J2SMESSAGE: {
          if (ctx.profile != null && ctx.profile.isJudge) {
            handleJ2SMessage(ctx);
          }
          else {
            logger.warn("WS: Attempt to use J2SMessage while not registered! " +
              shortDebugString(ctx.req));
            return;
          }
          break;
        }
        default: {
          logger.error("WS: Backend does not recognize message: " + ctx.req.getValueCase());
          return;
        }
      }

      logger.info("WS Handled!\n  In: {}\n  Out: {}",
        shortDebugString(ctx.req),
        shortDebugString(ctx.res));
    } catch (IOException e) {
      e.printStackTrace();
      return;
    }
  }

  public static void sendMessage(Session session, S2TMessage msg) throws IOException {
    sendMessage(session, S2CMessage.newBuilder().setS2TMessage(msg).build());
  }

  public static void sendMessage(Session session, S2JMessage msg) throws IOException {
    sendMessage(session, S2CMessage.newBuilder().setS2JMessage(msg).build());
  }

  public static void sendMessage(Session session, S2CMessage msg) throws IOException {
    logger.info("Sent Message: {}", shortDebugString(msg));
    session.getRemote().sendBytes(ByteBuffer.wrap(msg.toByteArray()));
  }

  public static void sendMessage(Profile profile, S2TMessage msg) {
    sendMessage(profile.id, S2CMessage.newBuilder().setS2TMessage(msg).build());
  }

  public static void sendMessage(Long profileId, S2TMessage msg) {
    sendMessage(profileId, S2CMessage.newBuilder().setS2TMessage(msg).build());
  }

  public static void sendMessage(Profile profile, S2JMessage msg) {
    sendMessage(profile.id, S2CMessage.newBuilder().setS2JMessage(msg).build());
  }

  public static void sendMessage(Long profileId, S2JMessage msg) {
    sendMessage(profileId, S2CMessage.newBuilder().setS2JMessage(msg).build());
  }

  public static void sendMessage(Profile profile, S2CMessage msg) {
    sendMessage(profile.id, msg);
  }

  public static void sendMessage(Long profileId, S2CMessage msg) {
    for (Session session : profileSessionMap.get(profileId)) {
      try {
        sendMessage(session, msg);
      } catch (IOException e) {
        logger.error("WS: Error while sending: " + shortDebugString(msg), e);
      }
    }
  }

  public static void broadcastMessage(S2CMessage msg) {
    for (Map.Entry<Session, Profile> entry : sessionProfileMap.entrySet()) {
      try {
        if (entry.getValue().isTeam) {
          sendMessage(entry.getKey(), msg);
        }
      } catch (Exception ignored) {}
    }
  }

  public static void loginMessage(WebSocketContext ctx) {
    try {
      String nonce = ctx.req.getLoginMessage().getNonce();

      if (nonce == null || nonce.isEmpty()) {
        ctx.res = S2CMessage.newBuilder()
          .setLoginResultMessage(
            LoginResultMessage.newBuilder()
              .setValue(LoginResultMessage.LoginResult.FAILURE))
          .build();
        debug(ctx.session, "No Nonce.");
      }

      if (ctx.profile == null) {
        ctx.profile = nonceProfileMap.remove(nonce);
      }

      if (ctx.profile != null) {
        if (!profileSessionMap.containsKey(ctx.profile.id)) {
          profileSessionMap.put(ctx.profile.id, new HashSet<>());
        }

        profileSessionMap.get(ctx.profile.id).add(ctx.session);
        sessionProfileMap.put(ctx.session, ctx.profile);

        ctx.res = S2CMessage.newBuilder()
          .setLoginResultMessage(
            LoginResultMessage.newBuilder()
              .setValue(LoginResultMessage.LoginResult.SUCCESS))
          .build();

        sendMessage(ctx.session, ctx.res);
        debug(ctx.session, "Login Successful!");
      }
      else {
        debug(ctx.session, "Bad Nonce.");
      }
    } catch (Exception e) {
      logger.error("Error while handling WS login", e);
    }
  }

  public static void debug(Profile profile, String message) {
    try {
      Set<Session> sessions = profileSessionMap.get(profile.id);
      if (sessions != null) {
        for (Session session : sessions) {
          debug(session, message);
        }
      }
    } catch (Exception e) {
      logger.warn("Error while debugging " + profile.name + ": ", e);
    }
  }

  public static void debug(Session session, String message) {
    try {
      sendMessage(session, S2CMessage.newBuilder()
        .setDebugMessage(DebugMessage.newBuilder().setMessage(message)).build());
    } catch (Exception ignored) {
    }
  }

  public static void alert(Session session, String message) {
    try {
      sendMessage(session, S2CMessage.newBuilder()
        .setAlertMessage(AlertMessage.newBuilder().setMessage(message)).build());
    } catch (Exception ignored) {
    }
  }

  public static void alert(Profile profile, String message) {
    Set<Session> sessions = profileSessionMap.get(profile.id);

    if (sessions != null) {
      for (Session session : sessions) {
        alert(session, message);
      }
    }
  }
}
