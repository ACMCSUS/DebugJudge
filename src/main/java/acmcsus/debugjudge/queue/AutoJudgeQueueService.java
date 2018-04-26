package acmcsus.debugjudge.queue;

import acmcsus.debugjudge.proto.AutoJudge;
import acmcsus.debugjudge.proto.Competition;
import acmcsus.debugjudge.proto.WebSocket;
import acmcsus.debugjudge.store.SubmissionStore;
import com.google.inject.Inject;
import com.google.inject.Singleton;
import org.eclipse.jetty.websocket.api.Session;

import java.io.IOException;

import static acmcsus.debugjudge.proto.Competition.Submission.ValueCase.ALGORITHMIC_SUBMISSION;
import static acmcsus.debugjudge.proto.Competition.SubmissionJudgement.JUDGEMENT_UNKNOWN;
import static acmcsus.debugjudge.ws.SocketSendMessageUtil.sendMessage;

@Singleton
public class AutoJudgeQueueService extends SocketSessionToSubmissionMapper {

  @Inject
  public AutoJudgeQueueService(SubmissionStore submissionStore) {
    submissionStore.streamAll()
        .filter(sub ->
            sub.getValueCase() == ALGORITHMIC_SUBMISSION &&
                sub.getJudgement() == JUDGEMENT_UNKNOWN &&
                sub.getAlgorithmicSubmission().getPreliminaryJudgement() == JUDGEMENT_UNKNOWN)
        .forEach(this::addSubmission);
  }

  @Override
  public void assigned(Session session, Competition.Submission submission) throws IOException {
    if (submission != null) {
      sendMessage(session, WebSocket.S2CMessage.newBuilder()
          .setS2AjMessage(AutoJudge.S2AJMessage.newBuilder()
              .setExecuteSubmission(
                  AutoJudge.S2AJMessage.ExecuteSubmissionMessage.newBuilder()
                      .setSubmission(submission))).build());
    }
  }

}
