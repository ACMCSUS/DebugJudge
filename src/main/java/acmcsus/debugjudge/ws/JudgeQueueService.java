package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.proto.*;
import com.google.inject.*;
import org.eclipse.jetty.websocket.api.*;

import java.io.*;

@Singleton
public class JudgeQueueService extends ProfileToSubmissionMapper {

  @Override
  public void assigned(Session session, Competition.Submission submission) throws IOException {
//    if (submission != null) {
      baseSocketService.sendMessage(session, Judge.S2JMessage.newBuilder()
          .setAssignedSubmissionMessage(
              Judge.S2JMessage.AssignedSubmissionMessage.newBuilder()
                  .setSubmission(submission)).build());
//    }
  }

}
