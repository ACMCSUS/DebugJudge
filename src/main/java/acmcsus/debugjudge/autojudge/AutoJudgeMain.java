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
import static java.util.Objects.requireNonNull;
import static java.util.concurrent.TimeUnit.SECONDS;

public class AutoJudgeMain {

  private static final Logger logger = LoggerFactory.getLogger(AutoJudgeMain.class);

  public static void main(String[] args) throws Exception {
    // TODO: configuration
    URI uri = URI.create("ws://localhost:4567/ws/connect");

    Integer id;
    String pass;

    try {
      id = parseInt(System.getenv("2pc_aj_id"));
      pass = requireNonNull(System.getenv("2pc_aj_pass"));
    } catch (RuntimeException re) {
      logger.error("Could not parse credentials from env!");
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
