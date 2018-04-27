package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.ctrl.CompetitionController;
import acmcsus.debugjudge.proto.BalloonRunner;
import acmcsus.debugjudge.proto.Competition;
import acmcsus.debugjudge.proto.Competition.Profile;
import acmcsus.debugjudge.queue.BalloonQueueService;
import acmcsus.debugjudge.state.StateService;
import acmcsus.debugjudge.store.BalloonDeliveryStore;
import acmcsus.debugjudge.store.SubmissionStore;
import com.google.inject.Inject;
import com.google.inject.Singleton;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;

import static acmcsus.debugjudge.proto.Algorithmic.BalloonDeliveries.BalloonDeliveryStatus.DELIVERED;
import static acmcsus.debugjudge.proto.Competition.Profile.ProfileType.BALLOON_RUNNER;

@Singleton
public class BalloonRunnerSocketService extends ProfileSocketService {

  private static Logger logger = LoggerFactory.getLogger(BalloonRunnerSocketService.class);

  private final BalloonQueueService balloonQueueService;

  @Inject
  BalloonRunnerSocketService(BaseSocketService baseSocketService, StateService stateService,
                             SubmissionStore submissionStore,
                             BalloonQueueService balloonQueueService,
                             CompetitionController competitionController) {
    super(baseSocketService, stateService, submissionStore, competitionController, BALLOON_RUNNER);
    this.balloonQueueService = balloonQueueService;
  }

  @Override
  protected void onConnect(WebSocketContext ctx) throws IOException {
    onOfficialConnect(ctx);
    onScoreboardReceiverConnect(ctx);

  }

  @Override
  protected void onDisconnect(WebSocketContext ctx) {
    balloonQueueService.disconnected(ctx.session);
  }

  @Override
  protected void onMessage(WebSocketContext ctx) throws IOException {
    BalloonRunner.B2SMessage b2SMessage = ctx.req.getB2SMessage();

    switch (b2SMessage.getValueCase()) {
      case STARTRUNNINGMESSAGE: {
        balloonQueueService.started(ctx.profile, ctx.session);
        break;
      }
      case STOPRUNNINGMESSAGE: {
        balloonQueueService.stopped(ctx.session);
        break;
      }
      case BALLOONDELIVEREDMESSAGE: {
        Integer tid = b2SMessage.getBalloonDeliveredMessage().getTeamId();
        Integer pid = b2SMessage.getBalloonDeliveredMessage().getProblemId();

        try {
          BalloonDeliveryStore.setDeliveryStatus(tid, pid, DELIVERED);
        }
        catch (IOException e) {
          logger.error("error writing deliveries", e);
        }

        balloonQueueService.removeSubmission(Competition.Submission.newBuilder()
            .setTeamId(tid)
            .setProblemId(pid)
            .build());

        break;
      }
      default: {
        logger.error("WS: Backend does not recognize B2SMessage: {}", b2SMessage.getValueCase());
      }
    }
  }
}
