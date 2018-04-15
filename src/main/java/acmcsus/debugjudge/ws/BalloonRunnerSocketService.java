package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.proto.*;
import acmcsus.debugjudge.proto.Competition.*;
import com.google.inject.*;
import org.slf4j.*;

import java.io.*;

@Singleton
public class BalloonRunnerSocketService extends ProfileSocketService {

  private static Logger logger = LoggerFactory.getLogger(BalloonRunnerSocketService.class);

  @Inject
  BalloonRunnerSocketService(BaseSocketService baseSocketService) {
    super(baseSocketService, Profile.ProfileType.BALLOON_RUNNER);
  }

  @Override
  protected void onConnect(WebSocketContext ctx) throws IOException {
    onOfficialConnect(ctx);
    onScoreboardReceiverConnect(ctx);
  }

  @Override
  protected void onDisconnect(WebSocketContext ctx) {

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
