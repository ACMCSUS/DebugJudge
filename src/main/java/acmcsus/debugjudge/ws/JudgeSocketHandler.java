package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.model.*;
import acmcsus.debugjudge.proto.Competition.*;
import acmcsus.debugjudge.proto.*;
import org.eclipse.jetty.websocket.api.*;
import org.slf4j.*;

import java.io.*;
import java.util.*;

import static acmcsus.debugjudge.ctrl.MessageStores.SUBMISSION_STORE;
import static java.lang.String.format;
import static spark.Spark.halt;

public class JudgeSocketHandler {

  private static Logger logger = LoggerFactory.getLogger(JudgeSocketHandler.class);
  private static ProfileToSubmissionMapper judgeQueueHandler = new ProfileToSubmissionMapper();

  static void handleJ2SMessage(WebSocketContext ctx) {
    Judge.J2SMessage j2SMessage = ctx.req.getJ2SMessage();

    switch (j2SMessage.getValueCase()) {
      case STARTJUDGINGMESSAGE: {
        judgeQueueHandler.started(ctx.profile, ctx.session);
        break;
      }
      case STOPJUDGINGMESSAGE: {
        judgeQueueHandler.stopped(ctx.profile);
        break;
      }
      case SUBMISSIONJUDGEMENTMESSAGE: {
        Integer tid = j2SMessage.getSubmissionJudgementMessage().getTeamId();
        Integer pid = j2SMessage.getSubmissionJudgementMessage().getProblemId();
        Long sid = j2SMessage.getSubmissionJudgementMessage().getSubmissionId();

        SubmissionJudgement ruling = j2SMessage.getSubmissionJudgementMessage().getRuling();
        String message = j2SMessage.getSubmissionJudgementMessage().getRulingMessage();

        switch (ruling) {
          case JUDGEMENT_UNKNOWN: {
            judgeQueueHandler.defer(ctx.profile);
            break;
          }
          case JUDGEMENT_SUCCESS:
          case JUDGEMENT_FAILURE: {
            Submission submission;

            try {
              submission = SUBMISSION_STORE.readFromPath(SUBMISSION_STORE.pathForIds(tid, pid, sid));
            }
            catch (IOException e) {
              logger.error(format("Submission %d/%d/%d not found for judge's ruling",
                  tid, pid, sid), e);
              throw halt(400);
            }

            // TODO: Judgement Messages (like "TLE" or "Excessive Output")
            StateService.instance.submissionRuling(
                submission, ctx.profile.getId(), ruling, message);
            break;
          }
          default: {
            logger.warn("Unrecognized submission judgement: " + ruling);
          }
        }
        break;
      }
      case JUDGINGPREFERENCESMESSAGE: {
        Map<Integer, Boolean> map = ctx.req.getJ2SMessage()
          .getJudgingPreferencesMessage()
          .getPreferencesMap();

        judgeQueueHandler.setProfilePreferences(ctx.profile, ctx.session, map);
        break;
      }
      default: {
        logger.error("WS: Backend does not recognize J2SMessage: {}", j2SMessage.getValueCase());
      }
    }
  }

  static void lostJudge(Session session, Profile profile) {
    judgeQueueHandler.disconnected(profile, session);
  }
}
