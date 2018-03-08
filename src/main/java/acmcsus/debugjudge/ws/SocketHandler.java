package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.ctrl.*;
import acmcsus.debugjudge.model.*;
import acmcsus.debugjudge.proto.WebSocket.*;
import acmcsus.debugjudge.proto.WebSocket.S2CMessage.*;
import acmcsus.debugjudge.proto.WebSocket.S2CMessage.CompetitionStateChangeMessage.CompetitionState;
import org.eclipse.jetty.websocket.api.Session;
import org.eclipse.jetty.websocket.api.annotations.*;
import org.slf4j.*;
import spark.*;

import java.io.*;
import java.nio.*;
import java.util.*;
import java.util.concurrent.*;

import static com.google.protobuf.TextFormat.shortDebugString;

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
        // TODO
//        JudgeQueueHandler.getInstance().disconnected((Judge) profile);
      }

      profileSessionMap.remove(profile);
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

      try {
        switch (ctx.req.getValueCase()) {
          case LOGINMESSAGE: {
            loginMessage(ctx);
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

        sendMessage(ctx.session, ctx.res);
      }
      catch (HaltException ignored) {
      }
    }
    catch (IOException e) {
      e.printStackTrace();
      return;
    }
//    else{
//      ISocketEventHandler who = handlers.get(msg.who);
//
//      if (who == null) {
//        System.out.println("I don't understand: " + message);
//        return;
//      }
//
//      if ((msg.profile != null && who.allowUse(msg.profile.getType()))
//        || (msg.profile == null && who.allowUse(null))) {
//        who.handle(msg);
//      }
//      else {
//        if (msg.profile == null) {
//          System.err.println("Someone tried using a WebSocket from " +
//            msg.session.getRemoteAddress().getAddress() +
//            " without being logged in: " + msg);
//        }
//        else {
//          if (msg.profile.getType() != Profile.ProfileType.JUDGE) {
//            logger.warn("User " + msg.profile.getName() + " tried using the " + msg.who + " WS Handler!");
//          }
//        }
//      }
//    }
  }

  public static void sendMessage(Session session, S2CMessage msg) throws IOException {
    session.getRemote().sendBytes(ByteBuffer.wrap(msg.toByteArray()));
  }

  public static void broadcastMessage(S2CMessage msg) {
    for (Map.Entry<Session, Profile> entry : sessionProfileMap.entrySet()) {
      try {
        if (entry.getValue().getType() == Profile.ProfileType.TEAM) {
          sendMessage(entry.getKey(), msg);
        }
      }
      catch (Exception ignored) {}
    }
  }

  public static void broadcastStateChange() {
    CompetitionState state = ApiController.competitionState;
    S2CMessage msg = S2CMessage.newBuilder()
      .setCompetitionStateChangeMessage(
        CompetitionStateChangeMessage.newBuilder()
          .setState(state)).build();

    broadcastMessage(msg);
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
        if (!profileSessionMap.containsKey(ctx.profile)) {
          profileSessionMap.put(ctx.profile, new HashSet<>());
        }

        profileSessionMap.get(ctx.profile).add(ctx.session);
        sessionProfileMap.put(ctx.session, ctx.profile);

        ctx.res = S2CMessage.newBuilder()
          .setLoginResultMessage(
            LoginResultMessage.newBuilder()
              .setValue(LoginResultMessage.LoginResult.SUCCESS))
          .build();
        debug(ctx.session, "Login Successful!");
      }
      else {
        debug(ctx.session, "Bad Nonce.");
      }
    }
    catch (Exception e) {
      logger.error("Error while handling WS login", e);
    }
  }

  public static void notify(Profile profile, Event event) {
//    try {
//      Set<Session> sessions = profileSessionMap.get(profile);
//
//      if (sessions != null) {
//        for (Session session : sessions) {
//          session.getRemote().sendString(WebSocketMessage.who("api").what("rld-submissions").toString());
//        }
//      }
//    }
//    catch (Exception e) {
//      logger.warn("Error while notifying " + profile.getName() + ": ", e);
//    }
  }

  public static void teamReloadProblems() {
    // for (Map.Entry<Session, Profile> entry : sessionProfileMap.entrySet()) {
    //   try {
    //     if (entry.getValue().getType() == Profile.ProfileType.TEAM) {
    //       S2CMessage msg = S2CMessage.newBuilder()
    //         .

    //       send(entry.getKey(), );
    //       entry.getKey().getRemote().sendString(
    //         WebSocketMessage
    //           .who("api")
    //           .what("rld-problems").toString()
    //       );
    //     }
    //   }
    //   catch (Exception ignored) {
    //   }
    // }
  }

  public static void teamReloadStatus() {
//    for (Map.Entry<Session, Profile> entry : sessionProfileMap.entrySet()) {
//      try {
//        if (entry.getValue().getType() == Profile.ProfileType.TEAM) {
//          entry.getKey().getRemote().sendString(
//            WebSocketMessage
//              .who("api")
//              .what("rld-status").toString()
//          );
//        }
//      }
//      catch (Exception ignored) {
//      }
//    }
  }

  public static void debug(Profile profile, String message) {
    try {
      Set<Session> sessions = profileSessionMap.get(profile);

      if (sessions != null) {
        for (Session session : sessions) {
          debug(session, message);
//          session.getRemote().sendString(S2CMessage.newBuilder()
//            .setDebugMessage(
//              DebugMessage.newBuilder().setMessage(message))
//            .build().toString());
        }
      }
    }
    catch (Exception e) {
      logger.warn("Error while debugging " + profile.getName() + ": ", e);
    }
  }

  public static void debug(Session session, String message) {
    try {
      logger.debug(message);
      session.getRemote().sendBytes(ByteBuffer.wrap(
        S2CMessage.newBuilder()
          .setDebugMessage(
            DebugMessage.newBuilder().setMessage(message))
          .build().toByteArray()));
    }
    catch (Exception ignored) {
    }
  }

  public static void alert(Session session, String message) {
    try {
      logger.debug("alert:" + message);
      session.getRemote().sendBytes(ByteBuffer.wrap(
        S2CMessage.newBuilder()
          .setAlertMessage(
            AlertMessage.newBuilder().setMessage(message))
          .build().toByteArray()));
    }
    catch (Exception ignored) {
    }
  }

  public static void alert(Profile profile, String message) {
    Set<Session> sessions = profileSessionMap.get(profile);

    if (sessions != null) {
      for (Session session : sessions) {
        alert(session, message);
      }
    }
  }
}
