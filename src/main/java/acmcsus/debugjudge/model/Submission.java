package acmcsus.debugjudge.model;

<<<<<<< HEAD
import acmcsus.debugjudge.Views;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonView;
=======
>>>>>>> master
import io.ebean.Finder;
import io.ebean.Model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "submissions", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"team_id", "problem_id", "submitted_at"})
})
public class Submission extends Model {
    
    public static final Finder<Long, Submission> find = new Finder<>(Submission.class);
    
    @Id
    public Long id;
    
<<<<<<< HEAD
    @JsonBackReference
=======
>>>>>>> master
    @ManyToOne(optional = false)
    public Team team;
    
    @ManyToOne(optional = false)
    public Problem problem;
    
<<<<<<< HEAD
    @JsonView(Views.TeamView.class)
    @Column(nullable = false, length = 20_000)
    public String code;
    
=======
>>>>>>> master
    @Column(name = "submitted_at", nullable = false, columnDefinition = "datetime")
    public Date submittedAt;
    
    @Column(name = "judged_at", nullable = true, columnDefinition = "datetime")
    public Date judgedAt;
    
    @ManyToOne
    public Judge judge;
    
    @Column
    public Boolean accepted;
    
    public void accepted(Judge judge, Date judgedAt) {
        this.judge = judge;
        this.judgedAt = judgedAt;
        this.accepted = true;
    }
    
    public void rejected(Judge judge, Date judgedAt) {
        this.judge = judge;
        this.judgedAt = judgedAt;
        this.accepted = false;
    }
    
}
