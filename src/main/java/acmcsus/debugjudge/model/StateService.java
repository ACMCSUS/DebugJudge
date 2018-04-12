package acmcsus.debugjudge.model;

import acmcsus.debugjudge.ctrl.*;
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
import static java.util.Collections.emptyList;
import static java.util.Collections.unmodifiableList;
import static spark.Spark.halt;

public class StateService {

  // Replace with Guice for testability
  public static final StateService instance = new StateService();

  private Logger logger = LoggerFactory.getLogger(StateService.class);

  private PublishSubject<Submission> submissionCreateSubject = PublishSubject.create();
  private PublishSubject<Submission> submissionRulingSubject = PublishSubject.create();

  private BehaviorSubject<List<Problem>> teamProblemListSubject = BehaviorSubject.createDefault(emptyList());
  private BehaviorSubject<List<Problem>> judgeProblemListSubject = BehaviorSubject.create();

  private BehaviorSubject<List<Submission>> submissionListSubject =
      BehaviorSubject.createDefault(emptyList());

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

  public Disposable addSubmissionCreateListener(Consumer<Submission> consumer) {
    return submissionCreateSubject.subscribe(consumer);
  }

  public Disposable addSubmissionCreateListener(Consumer<Submission> consumer, Predicate<Submission> filter) {
    return submissionCreateSubject
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
    builder.setSubmissionTimeSeconds(Instant.now().getEpochSecond());

    switch (submission.getValueCase()) {
      case DEBUGGING_SUBMISSION:
        builder.setDebuggingSubmission(submission.getDebuggingSubmission());
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

    List<Submission> oldSubmissionList = submissionListSubject.getValue();
    ArrayList<Submission> newSubmissionList = new ArrayList<>(oldSubmissionList.size() + 1);
    newSubmissionList.add(submission);
    newSubmissionList.addAll(oldSubmissionList);


    submissionCreateSubject.onNext(submission);
    submissionListSubject.onNext(unmodifiableList(newSubmissionList));

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
