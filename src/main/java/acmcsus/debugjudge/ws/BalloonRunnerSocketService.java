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
    AutoJudge.AJ2SMessage a2SMessage = ctx.req.getAj2SMessage();

    switch (a2SMessage.getValueCase()) {
      default: {
        logger.error("WS: Backend does not recognize AJ2SMessage: {}", a2SMessage.getValueCase());
      }
    }
  }
}
