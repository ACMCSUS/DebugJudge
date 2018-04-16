package acmcsus.debugjudge.autojudge;

import acmcsus.debugjudge.proto.*;

import static acmcsus.debugjudge.proto.Competition.SubmissionJudgement.JUDGEMENT_FAILURE;
import static acmcsus.debugjudge.proto.Competition.SubmissionJudgement.JUDGEMENT_SUCCESS;

public class PreliminaryJudgementCode {

  public static final String RUNTIME_ERROR_MESSAGE = "Runtime Error";
  public static final String COMPILE_ERROR_MESSAGE = "Compile Error";
  public static final String UNKNOWN_LANGUAGE_MESSAGE = "Unknown Language";
  public static final String COMPILE_TIME_EXCEEDED_MESSAGE = "Compile Time Exceeded";
  public static final String TIME_EXCEEDED_MESSAGE = "Time Limit Exceeded";
  public static final String INTERNAL_ERROR_MESSAGE = "Internal Error";

  public static final PreliminaryJudgementCode SUCCESS_RESULT = new PreliminaryJudgementCode(JUDGEMENT_SUCCESS, "");
  public static final PreliminaryJudgementCode RUNTIME_ERROR_RESULT = failure(RUNTIME_ERROR_MESSAGE);
  public static final PreliminaryJudgementCode COMPILE_ERROR_RESULT = failure(COMPILE_ERROR_MESSAGE);
  public static final PreliminaryJudgementCode UNKNOWN_LANGUAGE_RESULT = failure(UNKNOWN_LANGUAGE_MESSAGE);
  public static final PreliminaryJudgementCode TIME_EXCEEDED_RESULT = failure(TIME_EXCEEDED_MESSAGE);
  public static final PreliminaryJudgementCode COMPILE_TIME_EXCEEDED_RESULT = failure(COMPILE_TIME_EXCEEDED_MESSAGE);
  public static final PreliminaryJudgementCode INTERNAL_ERROR_RESULT = failure(INTERNAL_ERROR_MESSAGE);

  public final Competition.SubmissionJudgement judgement;
  public final String judgementMessage;

  public PreliminaryJudgementCode(Competition.SubmissionJudgement judgement, String judgementMessage) {
    this.judgement = judgement;
    this.judgementMessage = judgementMessage;
  }

  public static PreliminaryJudgementCode failure(String judgementMessage) {
    return new PreliminaryJudgementCode(JUDGEMENT_FAILURE, judgementMessage);
  }


}
