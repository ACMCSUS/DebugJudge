package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.proto.*;
import acmcsus.debugjudge.proto.AutoJudge.*;
import acmcsus.debugjudge.proto.AutoJudge.S2AJMessage.*;
import acmcsus.debugjudge.proto.Competition.*;
import acmcsus.debugjudge.proto.Competition.Submission.*;
import acmcsus.debugjudge.proto.WebSocket.*;
import org.eclipse.jetty.websocket.api.*;
import org.slf4j.*;

import java.io.*;

import static acmcsus.debugjudge.ws.SocketHandler.sendMessage;

public class AutoJudgeSocketHandler {

  private static Logger logger = LoggerFactory.getLogger(AutoJudgeSocketHandler.class);

  static void handleAJ2SMessage(WebSocketContext ctx) {
    AutoJudge.AJ2SMessage a2SMessage = ctx.req.getAj2SMessage();

    switch (a2SMessage.getValueCase()) {
      default: {
        logger.error("WS: Backend does not recognize AJ2SMessage: {}", a2SMessage.getValueCase());
      }
    }
  }

  static void subscribeNewAutoJudge(Session session) throws IOException {
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
  }
}
