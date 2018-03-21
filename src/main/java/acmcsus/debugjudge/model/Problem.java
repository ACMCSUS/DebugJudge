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

@Entity
@Table(name = "problems", uniqueConstraints = {
  @UniqueConstraint(columnNames = {"ref_id", "competition_id"}),
  @UniqueConstraint(columnNames = {"order_index", "competition_id"})
})
public class Problem extends Model {

  public static final Finder<Long, Problem> find = new Finder<>(Problem.class);

  @Id
  public Long id;

  @Column(name = "ref_id", nullable = false)
  public String refId;

  @Column(name = "order_index", nullable = false)
  public Long orderIndex;

  @Column(name = "title", nullable = false, length = 50)
  public String title;

  @Column(name = "description", nullable = false, columnDefinition = "BLOB")
  public String description;

  @Column(name = "language", nullable = false, columnDefinition = "BLOB")
  public String language;

  @Column(name = "precode", columnDefinition = "BLOB")
  public String precode;

  @Column(name = "code", nullable = false, columnDefinition = "BLOB")
  public String code;

  @Column(name = "postcode", columnDefinition = "BLOB")
  public String postcode;

  @JsonView(Views.JudgeView.class)
  @Column(name = "answer", nullable = false, columnDefinition = "BLOB")
  public String answer;

  @ManyToOne(optional = false)
  public Competition competition;

}
