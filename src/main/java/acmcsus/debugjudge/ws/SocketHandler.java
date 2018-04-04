package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.ctrl.*;
import acmcsus.debugjudge.proto.Competition.*;
import acmcsus.debugjudge.proto.WebSocket.*;
import acmcsus.debugjudge.proto.WebSocket.S2CMessage.*;
import io.reactivex.disposables.*;
import org.eclipse.jetty.websocket.api.Session;
import org.eclipse.jetty.websocket.api.annotations.*;
import org.slf4j.*;
import spark.*;

import java.io.*;
import java.nio.*;
import java.util.*;
import java.util.concurrent.*;

import static acmcsus.debugjudge.ws.JudgeSocketHandler.handleJ2SMessage;
import static acmcsus.debugjudge.ws.TeamSocketHandler.handleT2SMessage;
import static com.google.protobuf.TextFormat.shortDebugString;
import static java.lang.String.format;

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

  private static Map<Integer, Set<Session>> profileSessionMap = new ConcurrentHashMap<>();
  private static Map<Session, Profile> sessionProfileMap = new ConcurrentHashMap<>();
  private static Map<String, Profile> nonceProfileMap = new ConcurrentHashMap<>();
  private static Map<Session, Set<Disposable>> sessionObserversMap = new ConcurrentHashMap<>();

  public static String nonceRoute(Request req, Response res) {
    SecurityApi.loggedInFilter(req, res);

    String nonce = UUID.randomUUID().toString();
    nonceProfileMap.put(nonce, SecurityApi.getProfile(req));
    return nonce;
  }


  @OnWebSocketConnect
  public void onConnect(Session user) {
    user.setIdleTimeout(TimeUnit.HOURS.toMillis(12));
    logger.info("WebSocket opened");
  }

  @OnWebSocketClose
  public void onClose(Session user, int statusCode, String reason) {
    logger.info("WebSocket closed");

    Profile profile = sessionProfileMap.remove(user);
    if (profile != null) {
      if (profile.getProfileType() == Profile.ProfileType.JUDGE) {
        JudgeQueueHandler.getInstance().disconnected(profile, user);
      }

      profileSessionMap.get(profile.getId()).remove(user);
    }

    sessionObserversMap.get(user).forEach(Disposable::dispose);
    sessionObserversMap.remove(user);
  }

  @OnWebSocketMessage
  public void onMessage(Session user, InputStream inputStream) {
    WebSocketContext ctx = new WebSocketContext();

    try {
      ctx.profile = sessionProfileMap.get(user);
      ctx.session = user;
      ctx.req = C2SMessage.parseFrom(inputStream);

      logger.debug("Received Message: " + shortDebugString(ctx.req));

      switch (ctx.req.getValueCase()) {
        case LOGINMESSAGE: {
          loginMessage(ctx);
          break;
        }
        case T2SMESSAGE: {
          if (ctx.profile != null && ctx.profile.getProfileType() == Profile.ProfileType.TEAM) {
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
          if (ctx.profile != null &&
            (ctx.profile.getProfileType() == Profile.ProfileType.JUDGE ||
              ctx.profile.getProfileType() == Profile.ProfileType.ADMIN)) {
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
    }
    catch (IOException e) {
      logger.error(format("Error after %s sent socket request %s",
          shortDebugString(ctx.profile), shortDebugString(ctx.req)), e);
    }
  }

  public static void sendMessage(Session session, S2TMessage msg) throws IOException {
    sendMessage(session, S2CMessage.newBuilder().setS2TMessage(msg).build());
  }

  public static void sendMessage(Session session, S2JMessage msg) throws IOException {
    sendMessage(session, S2CMessage.newBuilder().setS2JMessage(msg).build());
  }

  public static void sendMessage(Session session, S2CMessage msg) throws IOException {
    logger.debug("Sent Message: {}", shortDebugString(msg));
    session.getRemote().sendBytes(ByteBuffer.wrap(msg.toByteArray()));
  }

  public static void sendMessage(Profile profile, S2TMessage msg) {
    sendMessage(profile.getId(), S2CMessage.newBuilder().setS2TMessage(msg).build());
  }

  public static void sendMessage(Integer profileId, S2TMessage msg) {
    sendMessage(profileId, S2CMessage.newBuilder().setS2TMessage(msg).build());
  }

  public static void sendMessage(Profile profile, S2JMessage msg) {
    sendMessage(profile.getId(), S2CMessage.newBuilder().setS2JMessage(msg).build());
  }

  public static void sendMessage(Integer profileId, S2JMessage msg) {
    sendMessage(profileId, S2CMessage.newBuilder().setS2JMessage(msg).build());
  }

  public static void sendMessage(Profile profile, S2CMessage msg) {
    sendMessage(profile.getId(), msg);
  }

  public static void sendMessage(Integer profileId, S2CMessage msg) {
    for (Session session : profileSessionMap.get(profileId)) {
      try {
        sendMessage(session, msg);
      }
      catch (IOException e) {
        logger.error("WS: Error while sending: " + shortDebugString(msg), e);
      }
    }
  }

  public static void broadcastMessage(S2CMessage msg) {
    for (Map.Entry<Session, Profile> entry : sessionProfileMap.entrySet()) {
      try {
        if (msg.getValueCase() == ValueCase.S2TMESSAGE) {
          if (entry.getValue().getProfileType() == Profile.ProfileType.TEAM) {
            sendMessage(entry.getKey(), msg);
          }
        }
        else if (msg.getValueCase() == ValueCase.S2JMESSAGE) {
          if (entry.getValue().getProfileType() == Profile.ProfileType.JUDGE) {
            sendMessage(entry.getKey(), msg);
          }
        }
        else {
          sendMessage(entry.getKey(), msg);
        }
      }
      catch (Exception ignored) {
      }
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
        if (!profileSessionMap.containsKey(ctx.profile.getId())) {
          profileSessionMap.put(ctx.profile.getId(), new HashSet<>());
        }

        profileSessionMap.get(ctx.profile.getId()).add(ctx.session);
        sessionProfileMap.put(ctx.session, ctx.profile);

        ctx.res = S2CMessage.newBuilder()
          .setLoginResultMessage(
            LoginResultMessage.newBuilder()
              .setValue(LoginResultMessage.LoginResult.SUCCESS))
          .build();

        sendMessage(ctx.session, ctx.res);
        debug(ctx.session, "Login Successful!");

        switch (ctx.profile.getProfileType()) {
          case TEAM: {
            TeamSocketHandler.subscribeNewTeam(ctx.session, ctx.profile);
            break;
          }
          case JUDGE: {
            JudgeSocketHandler.subscribeNewJudge(ctx.session, ctx.profile);
            break;
          }
        }
      }
      else {
        debug(ctx.session, "Bad Nonce.");
      }
    }
    catch (Exception e) {
      logger.error("Error while handling WS login", e);
    }
  }

  public static void debug(Profile profile, String message) {
    try {
      Set<Session> sessions = profileSessionMap.get(profile.getId());
      if (sessions != null) {
        for (Session session : sessions) {
          debug(session, message);
        }
      }
    }
    catch (Exception e) {
      logger.warn("Error while debugging " + profile.getName() + ": ", e);
    }
  }

  public static void debug(Session session, String message) {
    try {
      sendMessage(session, S2CMessage.newBuilder()
        .setDebugMessage(DebugMessage.newBuilder().setMessage(message)).build());
    }
    catch (Exception ignored) {
    }
  }

  public static void alert(Session session, String message) {
    try {
      sendMessage(session, S2CMessage.newBuilder()
        .setAlertMessage(AlertMessage.newBuilder().setMessage(message)).build());
    }
    catch (Exception ignored) {
    }
  }

  public static void alert(Profile profile, String message) {
    Set<Session> sessions = profileSessionMap.get(profile.getId());

    if (sessions != null) {
      for (Session session : sessions) {
        alert(session, message);
      }
    }
  }

  static void addObserver(Session session, Disposable disposable) {
    sessionObserversMap.computeIfAbsent(session, (f) -> new HashSet<>())
      .add(disposable);
  }
}
