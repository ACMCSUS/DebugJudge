package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.model.*;
import acmcsus.debugjudge.proto.*;
import acmcsus.debugjudge.proto.WebSocket.C2SMessage.T2SMessage.*;
import acmcsus.debugjudge.proto.WebSocket.S2CMessage.S2TMessage.*;
import org.slf4j.*;

import java.io.*;
import java.sql.*;
import java.time.*;

import static acmcsus.debugjudge.model.Submission.processNewSubmission;
import static spark.Spark.halt;

public class TeamSocketHandler {

  private static Logger logger = LoggerFactory.getLogger(TeamSocketHandler.class);

  static void handleT2SMessage(WebSocketContext ctx) {
    WebSocket.C2SMessage.T2SMessage t2s = ctx.req.getT2SMessage();

    switch (t2s.getValueCase()) {
      case SUBMISSIONCREATEMESSAGE: {
        try {
          SubmissionCreateMessage msg = t2s.getSubmissionCreateMessage();
          Submission submission = processNewSubmission(ctx.profile.id, msg.getSubmission().getProblemId(), Date.from(Instant.now()), msg.getSubmission().getDebuggingSubmission().getCode());

          ctx.res = WebSocket.S2CMessage.newBuilder()
            .setS2TMessage(WebSocket.S2CMessage.S2TMessage.newBuilder()
              .setReloadSubmissionsMessage(ReloadSubmissionsMessage.newBuilder())).build();

          SocketHandler.sendMessage(submission.teamId, ctx.res);
//          ctx.res = WebSocket.S2CMessage.newBuilder()
//            .setS2TMessage(WebSocket.S2CMessage.S2TMessage.newBuilder()
//              .setSubmissionCreatedMessage(SubmissionCreatedMessage.newBuilder()
//                .setSubmission(Competition.Submission.newBuilder()
//                  .setProblemId(submission.problemId)
//                  .setDebuggingSubmission(DebuggingSubmission.newBuilder()
//                    .setCode(submission.code))))).build();
        }
        catch (IOException e) {
          logger.warn("Error while creating submission", e);
          throw halt(500);
        }
        break;
      }
    }
  }

}
