package acmcsus.debugjudge.model;

import acmcsus.debugjudge.*;
import acmcsus.debugjudge.ctrl.*;
import acmcsus.debugjudge.proto.Competition;
import acmcsus.debugjudge.ws.*;
import com.fasterxml.jackson.annotation.*;

import java.io.*;
import java.util.*;

import static acmcsus.debugjudge.ctrl.CompetitionController.getCompetitionState;
import static spark.Spark.halt;

public class Submission {

  public static Submission processNewSubmission(Long teamId, Long problemId,
                                                Date submittedAt, String code) throws IOException {
    if (getCompetitionState() != Competition.CompetitionState.STARTED) {
      throw halt(400);
    }

    Submission submission = new Submission();
    submission.teamId = teamId;
    submission.problemId = problemId;
    submission.submittedAt = submittedAt;
    submission.id = submittedAt.getTime();
    submission.code = code;

    FileStore.saveSubmission(submission);
    JudgeQueueHandler.getInstance().submitted(submission);

    return submission;
  }

  public Long id;

  public Long teamId;

  public Long problemId;

  @JsonView(Views.TeamView.class)
  public String code;

  public Date submittedAt;

  public Date judgedAt;

  public Long judgeId;

  public Boolean accepted;

  public void ruling(Profile judge, Date judgedAt, boolean accepted) {
    if (accepted) {
      accepted(judge, judgedAt);
    }
    else {
      rejected(judge, judgedAt);
    }
  }

  public void accepted(Profile judge, Date judgedAt) {
    this.judgeId = judge.id;
    this.judgedAt = judgedAt;
    this.accepted = true;
  }

  public void rejected(Profile judge, Date judgedAt) {
    this.judgeId = judge.id;
    this.judgedAt = judgedAt;
    this.accepted = false;
  }

}
