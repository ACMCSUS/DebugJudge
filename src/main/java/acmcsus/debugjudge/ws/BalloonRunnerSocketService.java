package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.proto.*;
import acmcsus.debugjudge.proto.Competition.*;
import acmcsus.debugjudge.queue.BalloonQueueService;
import acmcsus.debugjudge.state.StateService;
import acmcsus.debugjudge.store.SubmissionStore;
import com.google.inject.*;
import org.slf4j.*;

import java.io.*;

@Singleton
public class BalloonRunnerSocketService extends ProfileSocketService {

  private static Logger logger = LoggerFactory.getLogger(BalloonRunnerSocketService.class);

  private final BalloonQueueService balloonQueueService;

  @Inject
  BalloonRunnerSocketService(BaseSocketService baseSocketService, StateService stateService,
                             SubmissionStore submissionStore,
                             BalloonQueueService balloonQueueService) {
    super(baseSocketService, stateService, submissionStore, Profile.ProfileType.BALLOON_RUNNER);
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
  protected void onMessage(WebSocketContext ctx) {
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
        logger.info("Delivered for {} {}\n", tid, pid);
        
        break;
      }
      default: {
        logger.error("WS: Backend does not recognize AJ2SMessage: {}", b2SMessage.getValueCase());
      }
    }
  }
}
