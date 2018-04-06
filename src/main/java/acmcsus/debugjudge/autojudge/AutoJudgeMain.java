package acmcsus.debugjudge.autojudge;

import acmcsus.debugjudge.proto.Algorithmic.*;
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
import static java.util.concurrent.TimeUnit.HOURS;
import static java.util.concurrent.TimeUnit.SECONDS;

public class AutoJudgeMain {

  private static final Logger logger = LoggerFactory.getLogger(AutoJudgeMain.class);

  public static void main(String[] args) throws Exception {
    // TODO: configuration
    URI uri = URI.create("ws://localhost:4567/ws/connect");

    ProgrammingLanguage.List.Builder langs = ProgrammingLanguage.List.newBuilder();
    TextFormat.merge(new FileReader("data/languages.textproto"), langs);

    Map<Submission.ValueCase, Function<Submission, ExecutionResult>> executors = new HashMap<>();
    executors.put(ALGORITHMIC_SUBMISSION, new AlgorithmicExecutor(langs.build()));

    AutoJudgeSocket socket = new AutoJudgeSocket(executors);
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
