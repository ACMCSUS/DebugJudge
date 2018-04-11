package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.model.*;
import acmcsus.debugjudge.proto.*;
import acmcsus.debugjudge.proto.AutoJudge.*;
import acmcsus.debugjudge.proto.AutoJudge.AJ2SMessage.*;
import acmcsus.debugjudge.proto.AutoJudge.S2AJMessage.*;
import acmcsus.debugjudge.proto.Competition.*;
import acmcsus.debugjudge.proto.Competition.Submission.*;
import acmcsus.debugjudge.proto.WebSocket.*;
import org.eclipse.jetty.websocket.api.*;
import org.slf4j.*;

import java.io.*;

import static acmcsus.debugjudge.ctrl.MessageStores.SUBMISSION_STORE;
import static acmcsus.debugjudge.ws.SocketHandler.sendMessage;
import static com.google.protobuf.TextFormat.shortDebugString;

public class AutoJudgeSocketHandler {

  private static Logger logger = LoggerFactory.getLogger(AutoJudgeSocketHandler.class);

  private static ProfileToSubmissionMapper queueHandler = new ProfileToSubmissionMapper();

  static {
    StateService.instance.addSubmissionNeedingExecutionListener(queueHandler::submitted);
  }

  static void handleAJ2SMessage(WebSocketContext ctx) {
    AutoJudge.AJ2SMessage a2SMessage = ctx.req.getAj2SMessage();

    switch (a2SMessage.getValueCase()) {
      case SUBMISSIONJUDGEMENTMESSAGE: {
        AutoJudgeResultMessage result = a2SMessage.getSubmissionJudgementMessage();
        try {
          Submission.Builder submission = Submission.newBuilder(SUBMISSION_STORE.readFromPath(
              SUBMISSION_STORE.pathForIds(
                  result.getTeamId(), result.getProblemId(), result.getSubmissionId())));

//          submission.getAlgorithmicSubmissionBuilder().
        }
        catch (IOException e) {
          logger.error("could not process executed submission " + shortDebugString(result));
        }
      }
      default: {
        logger.error("WS: Backend does not recognize AJ2SMessage: {}", a2SMessage.getValueCase());
      }
    }
  }

  static void subscribeNewAutoJudge(Session session, Profile profile) throws IOException {
    sendMessage(session, S2CMessage.newBuilder()
        .setS2AjMessage(S2AJMessage.newBuilder()
            .setExecuteSubmission(ExecuteSubmissionMessage.newBuilder()
                .setSubmission(Submission.newBuilder()
                    .setTeamId(1)
                    .setProblemId(1)
                    .setAlgorithmicSubmission(AlgorithmicSubmission.newBuilder()
                        .setLanguage("python3")
                        .setFileName("test.py")
                        .setSourceCode("print('hello world')")
                    )))).build());
    queueHandler.connected(profile, session);
  }

  static void lostAutoJudge(Session session, Profile profile) {
    queueHandler.disconnected(profile, session);
  }
}
