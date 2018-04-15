package acmcsus.debugjudge.model;

import acmcsus.debugjudge.ctrl.*;
import acmcsus.debugjudge.proto.*;
import acmcsus.debugjudge.proto.Competition.*;
import io.reactivex.disposables.*;
import io.reactivex.functions.*;
import io.reactivex.subjects.*;
import org.slf4j.*;

import java.io.*;
import java.nio.file.*;
import java.time.*;
import java.util.*;
import java.util.stream.*;

import static acmcsus.debugjudge.ctrl.MessageStores.PROBLEM_STORE;
import static acmcsus.debugjudge.ctrl.MessageStores.SUBMISSION_STORE;
import static acmcsus.debugjudge.proto.Competition.SubmissionJudgement.JUDGEMENT_UNKNOWN;
import static java.util.Collections.emptyList;
import static spark.Spark.halt;

public class StateService {

  // Replace with Guice for testability
  public static final StateService instance = new StateService();

  private Logger logger = LoggerFactory.getLogger(StateService.class);

  private final PublishSubject<Submission> submissionCreateSubject = PublishSubject.create();
  private final PublishSubject<Submission> submissionNeedingExecutionSubject = PublishSubject.create();
  private final PublishSubject<Submission> submissionNeedingJudgingSubject = PublishSubject.create();
  private final PublishSubject<Submission> submissionRulingSubject = PublishSubject.create();

  private BehaviorSubject<List<Problem>> teamProblemListSubject = BehaviorSubject.createDefault(emptyList());
  private BehaviorSubject<List<Problem>> judgeProblemListSubject = BehaviorSubject.create();

  private StateService() {
    judgeProblemListSubject.onNext(PROBLEM_STORE.readAll());

    CompetitionController.addCompetitionStateObserver((state) -> {
      if (state == CompetitionState.WAITING) {
        teamProblemListSubject.onNext(emptyList());
      }
      else {
        teamProblemListSubject.onNext(judgeProblemListSubject.getValue().stream()
            .map(PROBLEM_STORE::clearProtectedFields)
            .collect(Collectors.toList()));
      }
    });
  }

  public void loadExisting() {
    SUBMISSION_STORE.streamAll().forEach(sub -> {
      switch (sub.getValueCase()) {
        case DEBUGGING_SUBMISSION: {
          if (sub.getJudgement() == JUDGEMENT_UNKNOWN) {
            submissionNeedingJudgingSubject.onNext(sub);
          }
          break;
        }
        case ALGORITHMIC_SUBMISSION: {
          if (sub.getAlgorithmicSubmission().getPreliminaryJudgement() == JUDGEMENT_UNKNOWN) {
            submissionNeedingExecutionSubject.onNext(sub);
          }
          else if (sub.getJudgement() == JUDGEMENT_UNKNOWN) {
            submissionNeedingJudgingSubject.onNext(sub);
          }
          break;
        }
      }
    });
  }

  public Disposable addSubmissionCreateListener(Consumer<Submission> consumer) {
    return submissionCreateSubject.subscribe(consumer);
  }

  public Disposable addSubmissionCreateListener(
      Consumer<Submission> consumer, Predicate<Submission> filter) {
    return submissionCreateSubject
        .filter(filter)
        .subscribe(consumer);
  }

  public Disposable addSubmissionNeedingExecutionListener(Consumer<Submission> consumer) {
    return submissionNeedingExecutionSubject.subscribe(consumer);
  }

  public Disposable addSubmissionNeedingExecutionListener(
      Consumer<Submission> consumer, Predicate<Submission> filter) {
    return submissionNeedingExecutionSubject
        .filter(filter)
        .subscribe(consumer);
  }

  public Disposable addSubmissionNeedingJudgingListener(Consumer<Submission> consumer) {
    return submissionNeedingJudgingSubject.subscribe(consumer);
  }

  public Disposable addSubmissionNeedingJudgingListener(
      Consumer<Submission> consumer, Predicate<Submission> filter) {
    return submissionNeedingJudgingSubject
        .filter(filter)
        .subscribe(consumer);
  }

  public Disposable addSubmissionRulingListener(Consumer<Submission> submissionObserver) {
    return submissionRulingSubject.subscribe(submissionObserver);
  }

  public Disposable addSubmissionRulingListener(Consumer<Submission> submissionObserver, Predicate<Submission> filter) {
    return submissionRulingSubject
        .filter(filter)
        .subscribe(submissionObserver);
  }

  public Disposable addJudgeProblemsListener(Consumer<List<Problem>> problemReloader) {
    return judgeProblemListSubject.subscribe(problemReloader);
  }

  public Disposable addTeamProblemsListener(Consumer<List<Problem>> problemReloader) {
    return teamProblemListSubject.subscribe(problemReloader);
  }

  public void submissionCreate(int teamId, int problemId, Submission submission) {
    Submission.Builder builder = Submission.newBuilder();
    builder.setTeamId(teamId);
    builder.setProblemId(problemId);
    builder.setSubmissionTimeSeconds(CompetitionController.getElapsedSeconds());

    switch (submission.getValueCase()) {
      case DEBUGGING_SUBMISSION:
        builder.setDebuggingSubmission(submission.getDebuggingSubmission());
        builder.getDebuggingSubmissionBuilder();
        break;
      case ALGORITHMIC_SUBMISSION:
        builder.setAlgorithmicSubmission(submission.getAlgorithmicSubmission());
        builder.getAlgorithmicSubmissionBuilder()
            .clearExecutionResult()
            .clearPreliminaryJudgement()
            .clearPreliminaryJudgementMessage();
        break;
      default:
        logger.error("Unknown problem type: " + submission.getValueCase());
    }

    try {
      submission = SUBMISSION_STORE.create(builder.build());
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

    switch (submission.getValueCase()) {
      case DEBUGGING_SUBMISSION:
        submissionNeedingJudgingSubject.onNext(submission);
        break;
      case ALGORITHMIC_SUBMISSION:
        submissionNeedingExecutionSubject.onNext(submission);
        break;
      default:
        logger.error("Unknown problem type: " + submission.getValueCase());
    }
  }

  public void submissionExecuted(Submission submission) {
    try {
      SUBMISSION_STORE.save(submission);
      submissionNeedingJudgingSubject.onNext(submission);
    }
    catch (IOException e) {
      logger.error("could not save submission", e);
    }
  }

  public void submissionRuling(Submission submission, int judgeId, SubmissionJudgement judgement,
                               String message) {
    try {
      {
        Submission.Builder builder = Submission.newBuilder(submission);
        builder.setJudgeId(judgeId);
        builder.setJudgement(judgement);
        builder.setJudgementMessage(message);

        submission = SUBMISSION_STORE.save(builder.build());
      }
      submissionRulingSubject.onNext(submission);
    }
    catch (IOException e) {
      logger.error("could not save submission", e);
    }
  }
}
