package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.ctrl.*;
import acmcsus.debugjudge.proto.*;
import acmcsus.debugjudge.proto.Competition.*;
import acmcsus.debugjudge.state.StateService;
import acmcsus.debugjudge.store.SubmissionStore;
import com.google.inject.*;
import org.slf4j.*;

import java.io.*;

import static acmcsus.debugjudge.proto.Competition.Profile.ProfileType.ADMIN;

@Singleton
public class AdminSocketService extends ProfileSocketService {

  private static Logger logger = LoggerFactory.getLogger(AdminSocketService.class);

  @Inject
  AdminSocketService(BaseSocketService baseSocketService,
                     StateService stateService, SubmissionStore submissionStore,
                     CompetitionController competitionController) {
    super(baseSocketService, stateService, submissionStore, competitionController, ADMIN);
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
      case SETSCHEDULINGMESSAGE: {
        competitionController.updateSchedule(
            a2SMessage.getSetSchedulingMessage().getEventList());
        break;
      }
      default: {
        logger.error("WS: Backend does not recognize A2SMessage: {}", a2SMessage.getValueCase());
      }
    }
  }
}
