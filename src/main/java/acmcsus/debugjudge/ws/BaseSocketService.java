package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.ctrl.*;
import acmcsus.debugjudge.proto.Competition.*;
import acmcsus.debugjudge.proto.Judge.*;
import acmcsus.debugjudge.proto.Team.*;
import acmcsus.debugjudge.proto.WebSocket.*;
import acmcsus.debugjudge.proto.WebSocket.S2CMessage.*;
import com.google.inject.*;
import io.reactivex.disposables.*;
import io.reactivex.subjects.*;
import org.eclipse.jetty.websocket.api.Session;
import org.eclipse.jetty.websocket.api.annotations.*;
import org.slf4j.*;
import spark.*;

import java.io.*;
import java.nio.*;
import java.nio.file.*;
import java.util.*;
import java.util.concurrent.*;

import static acmcsus.debugjudge.ctrl.MessageStores.PROFILE_STORE;
import static acmcsus.debugjudge.ctrl.MessageStores.getLoginSecret;
import static acmcsus.debugjudge.proto.Competition.Profile.ProfileType.JUDGE;
import static acmcsus.debugjudge.proto.Competition.Profile.ProfileType.TEAM;
import static com.google.protobuf.TextFormat.shortDebugString;
import static java.lang.String.format;

@WebSocket
@Singleton
public class BaseSocketService {

  private static Logger logger = LoggerFactory.getLogger(BaseSocketService.class);

  private Map<Integer, Set<Session>> profileSessionMap = new ConcurrentHashMap<>();
  private Map<Session, Profile> sessionProfileMap = new ConcurrentHashMap<>();
  private Map<String, Profile> nonceProfileMap = new ConcurrentHashMap<>();
  private Map<Session, Set<Disposable>> sessionObserversMap = new ConcurrentHashMap<>();

  public final PublishSubject<WebSocketContext> connectSubject = PublishSubject.create();
  public final PublishSubject<WebSocketContext> disconnectSubject = PublishSubject.create();
  public final PublishSubject<WebSocketContext> messageSubject = PublishSubject.create();

  @Inject
  BaseSocketService() {

  }

  public String nonceRoute(Request req, Response res) {
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
  public void onClose(Session session, int statusCode, String reason) {
    logger.info("WebSocket closed");

    WebSocketContext ctx = new WebSocketContext();
    ctx.session = session;
    ctx.profile = sessionProfileMap.remove(session);
    disconnectSubject.onNext(ctx);

    if (ctx.profile != null) {
      profileSessionMap.get(ctx.profile.getId()).remove(session);
    }

    Set<Disposable> disposables = sessionObserversMap.remove(ctx.session);
    if (disposables != null) {
      disposables.forEach(Disposable::dispose);
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
        default: {
          messageSubject.onNext(ctx);
        }
      }
    }
    catch (IOException e) {
      logger.error(format("Error after %s sent socket request %s",
          shortDebugString(ctx.profile), shortDebugString(ctx.req)), e);
    }
  }

  public void sendMessage(Session session, S2TMessage msg) throws IOException {
    sendMessage(session, S2CMessage.newBuilder().setS2TMessage(msg).build());
  }

  public void sendMessage(Session session, S2JMessage msg) throws IOException {
    sendMessage(session, S2CMessage.newBuilder().setS2JMessage(msg).build());
  }

  public void sendMessage(Session session, S2CMessage msg) throws IOException {
    logger.info("Sent Message: {}", shortDebugString(msg));
    session.getRemote().sendBytes(ByteBuffer.wrap(msg.toByteArray()));
  }

  public void sendMessage(Profile profile, S2TMessage msg) {
    sendMessage(profile.getId(), S2CMessage.newBuilder().setS2TMessage(msg).build());
  }

  public void sendMessage(Integer profileId, S2TMessage msg) {
    sendMessage(profileId, S2CMessage.newBuilder().setS2TMessage(msg).build());
  }

  public void sendMessage(Profile profile, S2JMessage msg) {
    sendMessage(profile.getId(), S2CMessage.newBuilder().setS2JMessage(msg).build());
  }

  public void sendMessage(Integer profileId, S2JMessage msg) {
    sendMessage(profileId, S2CMessage.newBuilder().setS2JMessage(msg).build());
  }

  public void sendMessage(Profile profile, S2CMessage msg) {
    sendMessage(profile.getId(), msg);
  }

  public void sendMessage(Integer profileId, S2CMessage msg) {
    for (Session session : profileSessionMap.get(profileId)) {
      try {
        sendMessage(session, msg);
      }
      catch (IOException e) {
        logger.error("WS: Error while sending: " + shortDebugString(msg), e);
      }
    }
  }

  public void broadcastMessage(S2CMessage msg) {
    for (Map.Entry<Session, Profile> entry : sessionProfileMap.entrySet()) {
      try {
        if (msg.getValueCase() == ValueCase.S2TMESSAGE) {
          if (entry.getValue().getProfileType() == TEAM) {
            sendMessage(entry.getKey(), msg);
          }
        }
        else if (msg.getValueCase() == ValueCase.S2JMESSAGE) {
          if (entry.getValue().getProfileType() == JUDGE) {
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

  public void loginMessage(WebSocketContext ctx) {
    try {
      String nonce = ctx.req.getLoginMessage().getNonce();

      if (nonce == null || nonce.isEmpty()) {
        C2SMessage.LoginMessage msg = ctx.req.getLoginMessage();
        if (!getLoginSecret(msg.getId()).equals(msg.getPass())) {
          ctx.res = S2CMessage.newBuilder()
              .setLoginResultMessage(
                  LoginResultMessage.newBuilder()
                      .setValue(LoginResultMessage.LoginResult.FAILURE))
              .build();
        }
        ctx.profile = PROFILE_STORE.readFromPath(PROFILE_STORE.getPathForId(msg.getId()));
      }
      else if (ctx.profile == null) {
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
                    .setProfile(ctx.profile)
                    .setValue(LoginResultMessage.LoginResult.SUCCESS))
            .build();

        debug(ctx.session, "Login Successful!");

        connectSubject.onNext(ctx);
      }
      else {
        ctx.res = S2CMessage.newBuilder()
            .setLoginResultMessage(
                LoginResultMessage.newBuilder()
                    .setValue(LoginResultMessage.LoginResult.FAILURE))
            .build();
      }
    }
    catch (Exception e) {
      if (e instanceof NoSuchFileException) {
        logger.warn("Bad login attempt: " + shortDebugString(ctx.req.getLoginMessage()));
        logger.warn("Bad login attempt came from " + ctx.session.getRemoteAddress());
      }
      else {
        logger.error("Error while handling WS login", e);
      }
      ctx.res = S2CMessage.newBuilder()
          .setLoginResultMessage(
              LoginResultMessage.newBuilder()
                  .setValue(LoginResultMessage.LoginResult.FAILURE))
          .build();
    }

    try {
      sendMessage(ctx.session, ctx.res);
    }
    catch (IOException e) {
      logger.error("error responding to websocket login attempt", e);
    }
  }

  public void debug(Profile profile, String message) {
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

  public void debug(Session session, String message) {
    try {
      sendMessage(session, S2CMessage.newBuilder()
          .setDebugMessage(DebugMessage.newBuilder().setMessage(message)).build());
    }
    catch (Exception ignored) {
    }
  }

  public void alert(Session session, String message) {
    try {
      sendMessage(session, S2CMessage.newBuilder()
          .setAlertMessage(AlertMessage.newBuilder().setMessage(message)).build());
    }
    catch (Exception ignored) {
    }
  }

  public void alert(Profile profile, String message) {
    Set<Session> sessions = profileSessionMap.get(profile.getId());

    if (sessions != null) {
      for (Session session : sessions) {
        alert(session, message);
      }
    }
  }

  void addObserver(Session session, Disposable disposable) {
    sessionObserversMap.computeIfAbsent(session, (f) -> new HashSet<>())
        .add(disposable);
  }

}
