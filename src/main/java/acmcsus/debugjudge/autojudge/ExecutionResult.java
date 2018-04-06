package acmcsus.debugjudge.autojudge;

import acmcsus.debugjudge.proto.*;

import static acmcsus.debugjudge.proto.Competition.SubmissionJudgement.JUDGEMENT_FAILURE;
import static acmcsus.debugjudge.proto.Competition.SubmissionJudgement.JUDGEMENT_SUCCESS;

public class ExecutionResult {

  public static final String RUNTIME_ERROR_MESSAGE = "Runtime Error";
  public static final String UNKNOWN_LANGUAGE_MESSAGE = "Unknown Language";
  public static final String TIME_EXCEEDED_MESSAGE = "Time Limit Exceeded";
  public static final String INTERNAL_ERROR_MESSAGE = "Internal Error";

  public static final ExecutionResult SUCCESS_RESULT = new ExecutionResult(JUDGEMENT_SUCCESS, "");
  public static final ExecutionResult RUNTIME_ERROR_RESULT = failure(RUNTIME_ERROR_MESSAGE);
  public static final ExecutionResult UNKNOWN_LANGUAGE_RESULT = failure(UNKNOWN_LANGUAGE_MESSAGE);
  public static final ExecutionResult TIME_EXCEEDED_RESULT = failure(TIME_EXCEEDED_MESSAGE);
  public static final ExecutionResult INTERNAL_ERROR_RESULT = failure(UNKNOWN_LANGUAGE_MESSAGE);

  public final Competition.SubmissionJudgement judgement;
  public final String judgementMessage;

  public ExecutionResult(Competition.SubmissionJudgement judgement, String judgementMessage) {
    this.judgement = judgement;
    this.judgementMessage = judgementMessage;
  }

  public static ExecutionResult failure(String judgementMessage) {
    return new ExecutionResult(JUDGEMENT_FAILURE, judgementMessage);
  }


}
