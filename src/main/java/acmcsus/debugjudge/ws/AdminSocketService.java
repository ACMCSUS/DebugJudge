package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.ctrl.*;
import acmcsus.debugjudge.proto.*;
import acmcsus.debugjudge.proto.Competition.*;
import com.google.inject.*;
import org.slf4j.*;

import java.io.*;

@Singleton
public class AdminSocketService extends ProfileSocketService {

  private static Logger logger = LoggerFactory.getLogger(AdminSocketService.class);

  private CompetitionController competitionController;

  @Inject
  AdminSocketService(BaseSocketService baseSocketService,
                     CompetitionController competitionController) {
    super(baseSocketService, Profile.ProfileType.ADMIN);
    this.competitionController = competitionController;
  }

  @Override
  protected void onConnect(WebSocketContext ctx) throws IOException {
    // Todo: logging, status, etc
    onOfficialConnect(ctx);
    onScoreboardReceiverConnect(ctx);
  }

  @Override
  protected void onDisconnect(WebSocketContext ctx) {

  }

  @Override
  protected void onMessage(WebSocketContext ctx) {
    Admin.A2SMessage a2SMessage = ctx.req.getA2SMessage();

    switch (a2SMessage.getValueCase()) {
      case CHANGECOMPETITIONSTATEMESSAGE: {
        competitionController.changeCompetitionState(
            a2SMessage.getChangeCompetitionStateMessage().getState());
        break;
      }
      default: {
        logger.error("WS: Backend does not recognize A2SMessage: {}", a2SMessage.getValueCase());
      }
    }
  }
}
