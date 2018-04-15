package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.proto.*;
import org.slf4j.*;

public class AutoJudgeSocketHandler {

  private static Logger logger = LoggerFactory.getLogger(AutoJudgeSocketHandler.class);

  static void handleAJ2SMessage(WebSocketContext ctx) {
    AutoJudge.AJ2SMessage a2SMessage = ctx.req.getAj2SMessage();

    switch (a2SMessage.getValueCase()) {
      default: {
        logger.error("WS: Backend does not recognize AJ2SMessage: {}", a2SMessage.getValueCase());
      }
    }
  }
}
