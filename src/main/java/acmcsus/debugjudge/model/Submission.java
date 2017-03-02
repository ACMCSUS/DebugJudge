package acmcsus.debugjudge.model;

import com.avaje.ebean.Model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "submissions", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"team_id", "problem", "submitted_at"})
})
public class Submission extends Model {
    
    public static final Finder<Long, Submission> find = new Finder<>(Submission.class);
    
    @Id
    public Long id;
    
    @ManyToOne()
    @Column(name = "team_id", nullable = false)
    public Team team;
    
    @OneToOne
    @Column(nullable = false)
    public Problem problem;
    
    @Column(name = "submitted_at", nullable = false)
    public Date submittedAt;
    
    public Boolean approved;
}
