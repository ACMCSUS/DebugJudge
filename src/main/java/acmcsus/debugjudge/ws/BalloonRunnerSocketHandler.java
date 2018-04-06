package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.proto.*;
import acmcsus.debugjudge.proto.Competition.*;
import org.eclipse.jetty.websocket.api.*;
import org.slf4j.*;

import java.io.*;

public class BalloonRunnerSocketHandler {

  private static Logger logger = LoggerFactory.getLogger(BalloonRunnerSocketHandler.class);

  static void handleB2SMessage(WebSocketContext ctx) {
    AutoJudge.AJ2SMessage a2SMessage = ctx.req.getAj2SMessage();

    switch (a2SMessage.getValueCase()) {
      default: {
        logger.error("WS: Backend does not recognize AJ2SMessage: {}", a2SMessage.getValueCase());
      }
    }
  }
}
