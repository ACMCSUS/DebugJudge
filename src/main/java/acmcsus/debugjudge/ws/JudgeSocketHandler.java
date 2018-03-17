package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.model.*;
import acmcsus.debugjudge.proto.WebSocket.*;
import org.slf4j.*;

import java.sql.Date;
import java.time.*;
import java.util.*;

import static acmcsus.debugjudge.ws.SocketHandler.sendMessage;

public class JudgeSocketHandler {

  private static Logger logger = LoggerFactory.getLogger(JudgeSocketHandler.class);

  static void handleJ2SMessage(WebSocketContext ctx) {
    C2SMessage.J2SMessage j2SMessage = ctx.req.getJ2SMessage();

    JudgeQueueHandler judgeQueueHandler = JudgeQueueHandler.getInstance();

    switch (j2SMessage.getValueCase()) {
      case STARTJUDGINGMESSAGE: {
        judgeQueueHandler.connected((Judge) ctx.profile, ctx.session);
        break;
      }
      case STOPJUDGINGMESSAGE: {
        judgeQueueHandler.disconnected((Judge) ctx.profile);
        break;
      }
      case SUBMISSIONJUDGEMENTMESSAGE: {
        Long submissionId = j2SMessage.getSubmissionJudgementMessage().getSubmissionId();
        SubmissionJudgement ruling = j2SMessage.getSubmissionJudgementMessage().getRuling();
        boolean accepted = false;

        switch (ruling) {
          case DEFERRED: {
            judgeQueueHandler.defer((Judge) ctx.profile);
            break;
          }
          case SUCCESS:
            accepted = true;
          case FAILURE: {
            Submission submission = Submission.find.byId(submissionId);

            if (submission != null) {
              submission.ruling((Judge) ctx.profile, Date.from(Instant.now()), accepted);
              submission.update();
            }

            judgeQueueHandler.judged(submission);
            sendMessage(submission.team, S2CMessage.S2TMessage.newBuilder()
              .setSubmissionResultMessage(
                S2CMessage.S2TMessage.SubmissionJudgedMessage.newBuilder()
                  .setResult(ruling)).build());
            break;
          }
          default: {
            logger.warn("Unrecognized submission judgement: " + ruling);
          }
        }
        break;
      }
      case JUDGINGPREFERENCESMESSAGE: {
        Map<Long, Boolean> map = ctx.req.getJ2SMessage()
          .getJudgingPreferencesMessage()
          .getPreferencesMap();

        judgeQueueHandler.setJudgePreferences((Judge) ctx.profile, ctx.session, map);
        break;
      }
      default: {
        logger.error("WS: Backend does not recognize J2SMessage: {}", j2SMessage.getValueCase());
      }
    }
  }

}
