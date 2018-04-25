package acmcsus.debugjudge.autojudge;

import acmcsus.debugjudge.proto.*;
import acmcsus.debugjudge.proto.Algorithmic.*;
import acmcsus.debugjudge.proto.AutoJudge.AJ2SMessage.*;
import acmcsus.debugjudge.proto.Competition.*;
import com.google.protobuf.*;
import org.eclipse.jetty.websocket.api.*;
import org.eclipse.jetty.websocket.client.*;
import org.slf4j.*;

import java.io.*;
import java.net.*;
import java.util.*;
import java.util.function.*;

import static acmcsus.debugjudge.proto.Competition.Submission.ValueCase.ALGORITHMIC_SUBMISSION;
import static java.lang.Integer.parseInt;
import static java.util.Objects.isNull;
import static java.util.Objects.requireNonNull;
import static java.util.concurrent.TimeUnit.SECONDS;

public class AutoJudgeMain {

  private static final Logger logger = LoggerFactory.getLogger(AutoJudgeMain.class);

  public static void main(String[] args) throws Exception {
    // TODO: configuration in a file would be nice
    String host = System.getenv("HUB_HOST");

    if (isNull(host) || host.isEmpty()) {
      logger.error("missing required env var 'HUB_HOST'");
      System.exit(1);
    }

    URI uri = URI.create("ws://" + host + "/ws/connect");

    Integer id;
    String pass;

    try {
      id = parseInt(System.getenv("AJ_ID"));
      pass = requireNonNull(System.getenv("AJ_PASS"));
    } catch (RuntimeException re) {
      logger.error("missing required env vars 'AJ_ID' and 'AJ_PASS'");
      throw re;
    }

    AutoJudgeSocket socket = new AutoJudgeSocket(id, pass);
    WebSocketClient client = new WebSocketClient();

    while (true) {
      try {
        client.start();
        Session connection = client.connect(socket, uri).get(10, SECONDS);

        while (connection.isOpen()) {
        }
      }
      catch (Exception e) {
        logger.error("exception occurred during WebSocket connection", e);
      }
      finally {
        try {
          client.stop();
          Thread.sleep(5 * 1000L);
        }
        catch (Exception e) {
          logger.error("exception occurred stopping WebSocket connection", e);
        }
      }
    }
  }

}
