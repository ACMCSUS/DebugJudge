package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.ctrl.*;
import acmcsus.debugjudge.proto.*;
import acmcsus.debugjudge.proto.Competition.*;
import org.eclipse.jetty.websocket.api.*;
import org.slf4j.*;

import java.io.*;

public class AdminSocketHandler {

  private static Logger logger = LoggerFactory.getLogger(AdminSocketHandler.class);

  static void handleA2SMessage(WebSocketContext ctx) {
    Admin.A2SMessage a2SMessage = ctx.req.getA2SMessage();

    switch (a2SMessage.getValueCase()) {
      case CHANGECOMPETITIONSTATEMESSAGE: {
        CompetitionController.changeCompetitionState(
          a2SMessage.getChangeCompetitionStateMessage().getState());
        break;
      }
      default: {
        logger.error("WS: Backend does not recognize A2SMessage: {}", a2SMessage.getValueCase());
      }
    }
  }

  public static void subscribeNewAdmin(Session session, Profile profile) throws IOException {
    // Todo: logging, status, etc
  }
}
