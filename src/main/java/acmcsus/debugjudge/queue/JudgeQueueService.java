package acmcsus.debugjudge.queue;

import acmcsus.debugjudge.proto.Competition;
import acmcsus.debugjudge.proto.Judge;
import acmcsus.debugjudge.proto.WebSocket;
import com.google.inject.Inject;
import com.google.inject.Singleton;
import org.eclipse.jetty.websocket.api.Session;

import java.io.IOException;

import static acmcsus.debugjudge.ws.SocketSendMessageUtil.sendMessage;

@Singleton
public class JudgeQueueService extends SocketSessionToSubmissionMapper {

  @Inject
  public JudgeQueueService() {
  }

  @Override
  public void assigned(Session session, Competition.Submission submission) throws IOException {
    if (submission != null) {
      sendMessage(session, WebSocket.S2CMessage.newBuilder()
          .setS2JMessage(Judge.S2JMessage.newBuilder()
              .setAssignedSubmissionMessage(
                  Judge.S2JMessage.AssignedSubmissionMessage.newBuilder()
                      .setSubmission(submission))).build());
    }
    else {
      sendMessage(session, WebSocket.S2CMessage.newBuilder()
          .setS2JMessage(Judge.S2JMessage.newBuilder()
              .setAssignedSubmissionMessage(
                  Judge.S2JMessage.AssignedSubmissionMessage.newBuilder()))
          .build());
    }
  }

}
