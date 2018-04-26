package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.proto.*;
import com.google.protobuf.*;
import org.eclipse.jetty.websocket.api.*;
import org.slf4j.*;

import java.io.*;
import java.nio.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;

import static com.google.protobuf.TextFormat.shortDebugString;

public class SocketSendMessageUtil {

  private static Logger logger = LoggerFactory.getLogger(SocketSendMessageUtil.class);

  private static WriteCallback twoCallbackWrapper(Runnable success, Consumer<Throwable> fail, Message msg) {
    return new WriteCallback() {
      @Override
      public void writeFailed(Throwable x) {
        if (fail != null) {
          fail.accept(x);
        }
        else {
          logger.error("Uncaught error sending message " + shortDebugString(msg), x);
        }
      }

      @Override
      public void writeSuccess() {
        success.run();
      }
    };
  }

  private static WriteCallback duplexCallbackWrapper(Consumer<Throwable> callback) {
    return new WriteCallback() {
      @Override
      public void writeFailed(Throwable x) {
        callback.accept(x);
      }

      @Override
      public void writeSuccess() {
        callback.accept(null);
      }
    };
  }

  private static WriteCallback successCallbackWrapper(Runnable callback, Message msg) {
    return new WriteCallback() {
      @Override
      public void writeFailed(Throwable x) {
        logger.error("Uncaught error sending message " + shortDebugString(msg), x);
      }

      @Override
      public void writeSuccess() {
        callback.run();
      }
    };
  }



  public static void sendMessage(Session session, WebSocket.S2CMessage msg,
                                 Runnable successCallback, Consumer<Throwable> failureCallback) {
    session.getRemote().sendBytes(ByteBuffer.wrap(msg.toByteArray()),
        twoCallbackWrapper(successCallback, failureCallback, msg));
  }

  /**
   *
   * @param session
   * @param msg
   * @param duplexCallback Called with exception if exists, null if success. Cannot be null.
   */
  public static void sendMessage(Session session, WebSocket.S2CMessage msg,
                                 Consumer<Throwable> duplexCallback) {
    Objects.requireNonNull(duplexCallback);
    session.getRemote().sendBytes(ByteBuffer.wrap(msg.toByteArray()),
        duplexCallbackWrapper(duplexCallback));
  }

  /**
   *
   * @param session
   * @param msg
   * @param callback only called on success
   */
  public static void sendMessage(Session session, WebSocket.S2CMessage msg,
                                 Runnable callback) {
    session.getRemote().sendBytes(ByteBuffer.wrap(msg.toByteArray()),
        successCallbackWrapper(callback, msg));
  }

  public static void sendMessage(Session session, WebSocket.S2CMessage msg) throws IOException {
    session.getRemote().sendBytes(ByteBuffer.wrap(msg.toByteArray()));
  }

  public static Future<Void> sendMessageByFuture(Session session,
                                                 WebSocket.S2CMessage msg) {
    return session.getRemote().sendBytesByFuture(ByteBuffer.wrap(msg.toByteArray()));
  }

}
