package acmcsus.debugjudge.state;

import acmcsus.debugjudge.proto.Algorithmic;
import acmcsus.debugjudge.proto.Algorithmic.ProgrammingLanguage;
import acmcsus.debugjudge.proto.Competition.Submission;
import acmcsus.debugjudge.proto.Competition.Submission.AlgorithmicSubmission;
import acmcsus.debugjudge.queue.AutoJudgeQueueService;
import acmcsus.debugjudge.queue.BalloonQueueService;
import acmcsus.debugjudge.queue.JudgeQueueService;
import acmcsus.debugjudge.store.BalloonDeliveryStore;
import acmcsus.debugjudge.store.LanguageStore;
import com.google.inject.Inject;
import com.google.inject.Singleton;
import io.reactivex.Observable;
import io.reactivex.subjects.BehaviorSubject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.util.List;

import static acmcsus.debugjudge.proto.Algorithmic.BalloonDeliveries.BalloonDeliveryStatus.DELIVERED;
import static acmcsus.debugjudge.proto.Algorithmic.BalloonDeliveries.BalloonDeliveryStatus.NOT_DELIVERED;
import static acmcsus.debugjudge.proto.Algorithmic.BalloonDeliveries.BalloonDeliveryStatus.REQUESTED;
import static acmcsus.debugjudge.proto.Competition.Submission.ValueCase.ALGORITHMIC_SUBMISSION;
import static acmcsus.debugjudge.proto.Competition.SubmissionJudgement.JUDGEMENT_SUCCESS;
import static acmcsus.debugjudge.proto.Competition.SubmissionJudgement.JUDGEMENT_UNKNOWN;
import static io.reactivex.Observable.wrap;

@Singleton
public class AlgorithmicStateService {

  private static final Logger logger = LoggerFactory.getLogger(AlgorithmicStateService.class);

  private final BehaviorSubject<List<ProgrammingLanguage>> languageListSubject;
  public final Observable<List<ProgrammingLanguage>> languageList;

  private final StateService stateService;
  private final AutoJudgeQueueService autoJudgeQueueService;
  private final JudgeQueueService judgeQueueService;
  private final BalloonQueueService balloonQueueService;

  @Inject
  private AlgorithmicStateService(
      StateService stateService, AutoJudgeQueueService autoJudgeQueueService,
      JudgeQueueService judgeQueueService, LanguageStore languageStore,
      BalloonQueueService balloonQueueService) throws IOException {

    this.stateService = stateService;

    this.autoJudgeQueueService = autoJudgeQueueService;
    this.judgeQueueService = judgeQueueService;
    this.balloonQueueService = balloonQueueService;

    languageListSubject = BehaviorSubject.createDefault(languageStore.readLanguages());
    languageList = wrap(languageListSubject);

    stateService.submissionUpdates
        .filter(AlgorithmicStateService::isAlgorithmicSubmission)
        .subscribe(this::submissionUpdated);
  }

  private static boolean isAlgorithmicSubmission(Submission submission) {
    return submission.getValueCase() == ALGORITHMIC_SUBMISSION;
  }

  private void submissionUpdated(Submission submission) {
    AlgorithmicSubmission algorithmicSubmission = submission.getAlgorithmicSubmission();

    if (algorithmicSubmission.getPreliminaryJudgement() == JUDGEMENT_UNKNOWN) {
      autoJudgeQueueService.addSubmission(submission);
    }
    else {
      autoJudgeQueueService.removeSubmission(submission);

      if (submission.getJudgement() == JUDGEMENT_UNKNOWN) {
        judgeQueueService.addSubmission(submission);
      }
      else {
        judgeQueueService.removeSubmission(submission);

        if (submission.getJudgement() == JUDGEMENT_SUCCESS) {

          Algorithmic.BalloonDeliveries deliveries = null;

          try {
            deliveries = BalloonDeliveryStore.getDeliveries(submission.getTeamId());
          }
          catch (IOException e) {
            logger.error("error reading deliveries", e);
          }

          if (deliveries.getDeliveriesMap().getOrDefault(submission.getProblemId(), NOT_DELIVERED) != DELIVERED) {
            try {
              BalloonDeliveryStore.setDeliveryStatus(
                  submission.getTeamId(),
                  submission.getProblemId(),
                  REQUESTED);
            }
            catch (IOException e) {
              logger.error("error writing deliveries", e);
            }

            Submission sub = Submission.newBuilder()
                .setTeamId(submission.getTeamId())
                .setProblemId(submission.getProblemId())
                .build();

            balloonQueueService.removeSubmission(sub);
            balloonQueueService.addSubmission(sub);
          }
        }
      }
    }
  }

//  public void submissionExecuted(Submission submission) {
//
//  }

}
