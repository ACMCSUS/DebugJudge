package acmcsus.debugjudge.model;

import acmcsus.debugjudge.Views;
import com.fasterxml.jackson.annotation.JsonView;
import java.util.Date;

public class Submission {

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
