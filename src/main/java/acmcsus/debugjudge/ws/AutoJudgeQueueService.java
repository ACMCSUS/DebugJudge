package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.model.*;
import acmcsus.debugjudge.proto.*;
import com.google.inject.*;
import org.eclipse.jetty.websocket.api.*;

import java.io.*;

import static acmcsus.debugjudge.ctrl.MessageStores.SUBMISSION_STORE;
import static acmcsus.debugjudge.proto.Competition.Submission.ValueCase.ALGORITHMIC_SUBMISSION;
import static acmcsus.debugjudge.proto.Competition.SubmissionJudgement.JUDGEMENT_UNKNOWN;

@Singleton
public class AutoJudgeQueueService extends ProfileToSubmissionMapper {

  @Inject
  public AutoJudgeQueueService() {
    StateService.instance.addSubmissionNeedingExecutionListener(this::submitted);

    SUBMISSION_STORE.streamAll()
        .filter(sub ->
            sub.getValueCase() == ALGORITHMIC_SUBMISSION &&
                sub.getJudgement() == JUDGEMENT_UNKNOWN &&
                sub.getAlgorithmicSubmission().getPreliminaryJudgement() == JUDGEMENT_UNKNOWN)
        .forEach(this::submitted);
  }

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
