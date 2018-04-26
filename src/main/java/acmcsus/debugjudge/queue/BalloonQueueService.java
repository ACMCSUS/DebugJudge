package acmcsus.debugjudge.queue;

import acmcsus.debugjudge.proto.Competition;
import acmcsus.debugjudge.proto.BalloonRunner;
import acmcsus.debugjudge.proto.WebSocket;
import com.google.inject.Inject;
import com.google.inject.Singleton;
import org.eclipse.jetty.websocket.api.Session;

import java.io.IOException;

import static acmcsus.debugjudge.ws.SocketSendMessageUtil.sendMessage;

@Singleton
public class BalloonQueueService extends SocketSessionToSubmissionMapper {

  @Inject
  public BalloonQueueService() {
  }

  @Override
  protected void welcome(Session session, String reason) {
    try {
      sendMessage(session, WebSocket.S2CMessage.newBuilder()
          .setS2BMessage(BalloonRunner.S2BMessage.newBuilder()
              .setRunningStatus(BalloonRunner.S2BMessage.BalloonRunningStatusMessage.newBuilder()
                  .setRunning(true))).build());
    }
    catch (IOException e) {
      e.printStackTrace();
    }
  }

  @Override
  protected void goodbye(Session session, String reason) {
    try {
      sendMessage(session, WebSocket.S2CMessage.newBuilder()
          .setS2BMessage(BalloonRunner.S2BMessage.newBuilder()
              .setRunningStatus(BalloonRunner.S2BMessage.BalloonRunningStatusMessage.newBuilder()
                  .setRunning(false))).build());
    }
    catch (IOException e) {
      e.printStackTrace();
    }
  }


  // TODO:
  @Override
  public void assigned(Session session, Competition.Submission submission) throws IOException {
    if (submission != null) {
      sendMessage(session, WebSocket.S2CMessage.newBuilder()
          .setS2BMessage(BalloonRunner.S2BMessage.newBuilder()
              .setAssignedDeliveryMessage(
                  BalloonRunner.S2BMessage.AssignedDeliveryMessage.newBuilder()
                    .setTeamId(submission.getTeamId())
                      .setProblemId(submission.getProblemId()))).build());
    }
    else {
      sendMessage(session, WebSocket.S2CMessage.newBuilder()
          .setS2BMessage(BalloonRunner.S2BMessage.newBuilder()
              .setAssignedDeliveryMessage(
                  BalloonRunner.S2BMessage.AssignedDeliveryMessage.newBuilder()))
          .build());
    }
  }

}
