package acmcsus.debugjudge.model;

import acmcsus.debugjudge.Views;
import com.fasterxml.jackson.annotation.JsonView;
import io.ebean.Finder;
import io.ebean.Model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

public class Problem extends Model {

  public Long id;

  public String refId;

  public Long orderIndex;

  public String title;

  public String description;

  public Competition competition;

  public enum ProblemType {
    DEBUGGING, PROGRAMMING,
  }

  public ProblemType problemType;

  public DebuggingProblem debuggingProblem;
//  public ProgrammingProblem programmingProblem;

  public static class DebuggingProblem {

    public String language;

    public String precode;

    public String code;

    public String postcode;

    @JsonView(Views.JudgeView.class)
    public String answer;
  }

}
