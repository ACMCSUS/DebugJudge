package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.model.*;
import acmcsus.debugjudge.proto.*;
import com.google.inject.*;
import org.eclipse.jetty.websocket.api.*;

import java.io.*;

import static acmcsus.debugjudge.ws.SocketSendMessageUtil.sendMessage;

@Singleton
public class JudgeQueueService extends SocketSessionToSubmissionMapper {

  @Inject
  public JudgeQueueService() {
    StateService.instance.addSubmissionNeedingJudgingListener(this::submitted);
    StateService.instance.addSubmissionRulingListener((sub) -> {
      if (sub.getJudgement() != Competition.SubmissionJudgement.JUDGEMENT_UNKNOWN) {
        this.judged(sub);
      }
    });
  }

  @Override
  public void assigned(Session session, Competition.Submission submission) throws IOException {
//    if (submission != null) {
    sendMessage(session, WebSocket.S2CMessage.newBuilder()
        .setS2JMessage(Judge.S2JMessage.newBuilder()
            .setAssignedSubmissionMessage(
                Judge.S2JMessage.AssignedSubmissionMessage.newBuilder()
                    .setSubmission(submission))).build());
//    }
  }

}
