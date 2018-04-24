package acmcsus.debugjudge.state;

import acmcsus.debugjudge.ctrl.CompetitionController;
import acmcsus.debugjudge.proto.Competition.CompetitionState;
import acmcsus.debugjudge.proto.Competition.Problem;
import acmcsus.debugjudge.proto.Competition.Submission;
import acmcsus.debugjudge.proto.Competition.SubmissionJudgement;
import acmcsus.debugjudge.store.ProblemStore;
import acmcsus.debugjudge.store.SubmissionStore;
import com.google.inject.Inject;
import com.google.inject.Singleton;
import io.reactivex.Observable;
import io.reactivex.subjects.BehaviorSubject;
import io.reactivex.subjects.PublishSubject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.nio.file.FileAlreadyExistsException;
import java.util.List;
import java.util.stream.Collectors;

import static io.reactivex.Observable.combineLatest;
import static io.reactivex.Observable.wrap;
import static java.util.Collections.emptyList;
import static spark.Spark.halt;

@Singleton
public class StateService {

  private static final Logger logger = LoggerFactory.getLogger(StateService.class);

  private final PublishSubject<Submission> submissionCreateSubject;
  public final Observable<Submission> submissionCreates;

  private  final PublishSubject<Submission> submissionUpdateSubject;
  public final Observable<Submission> submissionUpdates;

  private final BehaviorSubject<List<Problem>> secretProblemListSubject;
  public final Observable<List<Problem>> secretProblemList;

  private final Observable<List<Problem>> publicProblemListSubject;
  public final Observable<List<Problem>> publicProblemList;

  private final CompetitionController competitionController;
  private final SubmissionStore submissionStore;
  private final ProblemStore problemStore;

  @Inject
  private StateService(CompetitionController competitionController,
                       SubmissionStore submissionStore, ProblemStore problemStore) {
    this.competitionController = competitionController;
    this.submissionStore = submissionStore;
    this.problemStore = problemStore;

    secretProblemListSubject = BehaviorSubject.createDefault(problemStore.readAll());
    publicProblemListSubject = combineLatest(
        secretProblemListSubject, competitionController.competitionState,
        this::filterPublicProblemList);

    secretProblemList = wrap(secretProblemListSubject);
    publicProblemList = wrap(publicProblemListSubject);

    submissionCreateSubject = PublishSubject.create();
    submissionUpdateSubject = PublishSubject.create();
    submissionCreates = wrap(submissionCreateSubject);
    submissionUpdates = wrap(submissionUpdateSubject);
  }

  public void submissionUpdated(Submission submission) {
    try {
      submissionStore.save(submission);
      submissionUpdateSubject.onNext(submission);
    }
    catch (IOException e) {
      logger.error("could not save submission", e);
    }
  }

  private List<Problem> filterPublicProblemList(List<Problem> secretProblemList, CompetitionState competitionState) {
    if (competitionState == CompetitionState.WAITING) {
      return emptyList();
    }
    else {
      return secretProblemList.stream()
          .map(problemStore::clearProtectedFields)
          .collect(Collectors.toList());
    }
  }

  public void submissionCreate(int teamId, int problemId, Submission submission) {
    Submission.Builder builder = Submission.newBuilder();
    builder.setTeamId(teamId);
    builder.setProblemId(problemId);
    builder.setSubmissionTimeSeconds(competitionController.getElapsedSeconds());

    switch (submission.getValueCase()) {
      case DEBUGGING_SUBMISSION:
        builder.setDebuggingSubmission(submission.getDebuggingSubmission());
        builder.getDebuggingSubmissionBuilder();
        break;
      case ALGORITHMIC_SUBMISSION:
        builder.setAlgorithmicSubmission(submission.getAlgorithmicSubmission());
        builder.getAlgorithmicSubmissionBuilder()
            .clearCompileResult()
            .clearCaseResults()
            .clearPreliminaryJudgement()
            .clearPreliminaryJudgementMessage();
        break;
      default:
        logger.error("Unknown problem type: " + submission.getValueCase());
    }

    try {
      submission = submissionStore.create(builder.build());
    }
    catch (FileAlreadyExistsException faee) {
      logger.warn("Team {} tried submitting twice for {} in the same second!", teamId, problemId);
      throw halt(429); // Tried submitting twice in one second for this problem
    }
    catch (IOException e) {
      logger.error("could not save new submission", e);
      throw halt(500);
    }

    submissionCreateSubject.onNext(submission);
    submissionUpdateSubject.onNext(submission);
  }

  public void submissionRuling(Submission submission, int judgeId, SubmissionJudgement judgement,
                               String message) {
    try {
      {
        Submission.Builder builder = Submission.newBuilder(submission);
        builder.setJudgeId(judgeId);
        builder.setJudgement(judgement);
        builder.setJudgementMessage(message);

        submission = submissionStore.save(builder.build());
      }
      submissionUpdateSubject.onNext(submission);
    }
    catch (IOException e) {
      logger.error("could not save submission", e);
    }
  }

  public List<Problem> getSecretProblems() {
    return secretProblemListSubject.getValue();
  }

  public List<Problem> getPublicProblems() {
    return filterPublicProblemList(
        getPublicProblems(),
        competitionController.getCompetitionState());
  }
}
