package acmcsus.debugjudge.autojudge;

import acmcsus.debugjudge.proto.AutoJudge.*;
import acmcsus.debugjudge.proto.Competition.*;
import acmcsus.debugjudge.proto.WebSocket.*;
import org.eclipse.jetty.websocket.api.*;
import org.eclipse.jetty.websocket.api.annotations.*;
import org.slf4j.*;

import java.io.*;
import java.nio.*;
import java.util.*;
import java.util.function.*;

import static acmcsus.debugjudge.proto.Competition.Submission.ValueCase.VALUE_NOT_SET;
import static com.google.protobuf.TextFormat.shortDebugString;
import static java.util.Objects.requireNonNull;
import static java.util.concurrent.TimeUnit.HOURS;

@WebSocket(maxTextMessageSize = 64*1024)
public class AutoJudgeSocket {

  private static final Logger logger = LoggerFactory.getLogger(AutoJudgeSocket.class);

  private final Map<Submission.ValueCase, Function<Submission, ExecutionResult>> executorMap;

  @SuppressWarnings("unused")
  private Session session = null;

  AutoJudgeSocket(Map<Submission.ValueCase, Function<Submission, ExecutionResult>> executorMap) {
    this.executorMap = requireNonNull(executorMap);
  }

  @OnWebSocketConnect
  public void onConnect(Session session) throws IOException {
    this.session = session;
    logger.info("Successfully connected " + session.getRemoteAddress().toString());
    session.setIdleTimeout(HOURS.toMillis(12));

    sendMessage(session, C2SMessage.newBuilder()
        .setLoginMessage(C2SMessage.LoginMessage.newBuilder()
            .setId(901).setPass("pass")).build());
  }

  @OnWebSocketClose
  public void onClose(int statusCode, String reason) {
    logger.info("WebSocket closed! {} {}", statusCode, reason);
  }

  @OnWebSocketMessage
  public void onMessage(InputStream inputStream) {
    S2CMessage msg = null;
    try {
      msg = S2CMessage.parseFrom(inputStream);

      switch (msg.getValueCase()) {
        case S2AJMESSAGE: {
          S2AJMessage s2aj = msg.getS2AjMessage();

          switch (s2aj.getValueCase()) {
            case EXECUTESUBMISSION: {
              executeSubmission(s2aj.getExecuteSubmission());
            }
          }
          break;
        }
        case LOGINRESULTMESSAGE: {
          S2CMessage.LoginResultMessage loginResultMessage = msg.getLoginResultMessage();
          if (loginResultMessage.getValue() == S2CMessage.LoginResultMessage.LoginResult.FAILURE) {
            logger.error("Login attempt failed! Check credentials!");
            session.close();
            System.exit(1);
          }
          break;
        }
        case DEBUGMESSAGE: {
          logger.info("Server sent debug message: " +
              msg.getDebugMessage()
                  .getMessage()
                  .replace("\n", "\\n"));
          break;
        }
        case ALERTMESSAGE: {
          logger.warn("Server sent alert message: " +
              msg.getDebugMessage()
                  .getMessage()
                  .replace("\n", "\\n"));
          break;
        }
        default: {
          logger.debug("Server sent ignored message: " + shortDebugString(msg));
        }
      }
    }
    catch (Exception e) {
      if (msg != null) {
        logger.error("error processing message: " + shortDebugString(msg), e);
      }
      else {
        logger.error("error processing message ", e);
      }
    }
  }

  private void executeSubmission(S2AJMessage.ExecuteSubmissionMessage msg) throws IOException {
    Submission submission = msg.getSubmission();

    if (submission == null ||
        submission.getTeamId() == 0 ||
        submission.getValueCase() == VALUE_NOT_SET) {
      logger.warn("Cannot execute submission due to missing fields: " +
          (submission == null ? "null" : shortDebugString(submission)));
      return;
    }

    Function<Submission, ExecutionResult> executor =
        executorMap.get(submission.getValueCase());

    if (executor == null) {
      logger.error("No known executor for submission type: " + submission.getValueCase());
      return;
    }

    ExecutionResult result;

    try {
      result = executor.apply(submission);
    }
    catch (Exception e) {
      logger.error("Error running submission " + shortDebugString(submission), e);
      result = ExecutionResult.INTERNAL_ERROR_RESULT;
    }

    logger.info("Submission result: {} {}", result.judgement.name(), result.judgementMessage);

    sendMessage(this.session, AJ2SMessage.newBuilder()
        .setSubmissionJudgementMessage(AJ2SMessage.AutoJudgeResultMessage.newBuilder()
            .setTeamId(submission.getTeamId())
            .setProblemId(submission.getProblemId())
            .setSubmissionId(submission.getSubmissionTimeSeconds())
            .setRuling(result.judgement)
            .setRulingMessage(result.judgementMessage)).build());
  }

  private static void sendMessage(Session session, AJ2SMessage msg) throws IOException {
    sendMessage(session, C2SMessage.newBuilder().setAj2SMessage(msg).build());
  }

  private static void sendMessage(Session session, C2SMessage msg) throws IOException {
    for (int i = 1; i <= 5; i++) {
      try {
        session.getRemote().sendBytes(ByteBuffer.wrap(msg.toByteArray()));
        logger.debug("Sent Message: {}", shortDebugString(msg));
        Thread.sleep(100);
        return;
      }
      catch (IOException e) {
        logger.error("error trying to send message", e);
        if (i == 5) {
          throw e;
        }
      }
      catch (InterruptedException e) {
        logger.error("error while trying to sleep after failing to send message");
      }
    }
  }
}
