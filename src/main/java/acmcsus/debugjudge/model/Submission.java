package acmcsus.debugjudge.model;

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
    
    @ManyToOne(optional = false)
    public Team team;
    
    @ManyToOne(optional = false)
    public Problem problem;
    
    @Column(name = "submitted_at", nullable = false, columnDefinition = "datetime")
    public Date submittedAt;
    
    public Boolean approved;
}
