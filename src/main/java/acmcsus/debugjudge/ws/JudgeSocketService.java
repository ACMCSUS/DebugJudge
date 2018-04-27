package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.ctrl.CompetitionController;
import acmcsus.debugjudge.proto.Competition.Profile;
import acmcsus.debugjudge.proto.Competition.Submission;
import acmcsus.debugjudge.proto.Competition.SubmissionJudgement;
import acmcsus.debugjudge.proto.Judge;
import acmcsus.debugjudge.queue.JudgeQueueService;
import acmcsus.debugjudge.state.StateService;
import acmcsus.debugjudge.store.SubmissionStore;
import com.google.inject.Inject;
import com.google.inject.Singleton;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.util.Map;

import static acmcsus.debugjudge.proto.Competition.Profile.ProfileType.JUDGE;
import static java.lang.String.format;
import static spark.Spark.halt;

@Singleton
public class JudgeSocketService extends ProfileSocketService {

  private static Logger logger = LoggerFactory.getLogger(JudgeSocketService.class);

  private JudgeQueueService judgeQueueService;

  @Inject
  JudgeSocketService(BaseSocketService baseSocketService, StateService stateService,
                     JudgeQueueService judgeQueueService, SubmissionStore submissionStore,
                     CompetitionController competitionController) {
    super(baseSocketService, stateService, submissionStore, competitionController, JUDGE);
    this.judgeQueueService = judgeQueueService;
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
              submission = submissionStore.readFromPath(submissionStore.pathForIds(tid, pid, sid));
            }
            catch (IOException e) {
              logger.error(format("Submission %d/%d/%d not found for judge's ruling",
                  tid, pid, sid), e);
              throw halt(400);
            }

            stateService.submissionRuling(submission, ctx.profile.getId(), ruling, message);
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
