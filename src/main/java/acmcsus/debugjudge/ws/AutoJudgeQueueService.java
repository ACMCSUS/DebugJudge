package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.proto.*;
import com.google.inject.*;
import org.eclipse.jetty.websocket.api.*;

import java.io.*;

@Singleton
public class AutoJudgeQueueService extends ProfileToSubmissionMapper {

  @Override
  public void assigned(Session session, Competition.Submission submission) throws IOException {
    if (submission != null) {
      baseSocketService.sendMessage(session, WebSocket.S2CMessage.newBuilder()
          .setS2AjMessage(AutoJudge.S2AJMessage.newBuilder()
              .setExecuteSubmission(
                  AutoJudge.S2AJMessage.ExecuteSubmissionMessage.newBuilder()
                      .setSubmission(submission))).build());
    }
  }

}
