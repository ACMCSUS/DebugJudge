package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.model.*;
import acmcsus.debugjudge.proto.Competition.*;
import acmcsus.debugjudge.proto.*;
import com.google.inject.*;
import org.slf4j.*;
import org.slf4j.Logger;

import java.io.*;
import java.util.*;

import static acmcsus.debugjudge.ctrl.MessageStores.SUBMISSION_STORE;
import static java.lang.String.format;
import static spark.Spark.halt;

@Singleton
public class JudgeSocketService extends ProfileSocketService {

  private static Logger logger = LoggerFactory.getLogger(JudgeSocketService.class);

  public JudgeQueueService judgeQueueService;

  @Inject
  JudgeSocketService(BaseSocketService baseSocketService, JudgeQueueService judgeQueueService) {
    super(baseSocketService, Profile.ProfileType.JUDGE);
    this.judgeQueueService = judgeQueueService;
    StateService.instance.addSubmissionNeedingJudgingListener(judgeQueueService::submitted);
  }

  @Override
  protected void onConnect(WebSocketContext ctx) throws IOException {
    onOfficialConnect(ctx);
    onScoreboardReceiverConnect(ctx);
  }

  @Override
  protected void onDisconnect(WebSocketContext ctx) {
    judgeQueueService.disconnected(ctx.session);
  }

  @Override
  protected void onMessage(WebSocketContext ctx) {
    Judge.J2SMessage j2SMessage = ctx.req.getJ2SMessage();

    switch (j2SMessage.getValueCase()) {
      case STARTJUDGINGMESSAGE: {
        judgeQueueService.started(ctx.profile, ctx.session);
        break;
      }
      case STOPJUDGINGMESSAGE: {
        judgeQueueService.stopped(ctx.session);
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
            judgeQueueService.defer(ctx.session);
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

        judgeQueueService.setProfilePreferences(ctx.session, map);
        break;
      }
      default: {
        logger.error("WS: Backend does not recognize J2SMessage: {}", j2SMessage.getValueCase());
      }
    }
  }
}
