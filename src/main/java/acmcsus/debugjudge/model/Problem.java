package acmcsus.debugjudge.model;

import com.avaje.ebean.Model;

import javax.persistence.*;

@Entity
@Table(name = "problems", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"problemId", "competition"})
})
public class Problem extends Model {
    
    public static final Finder<Long, Problem> find = new Finder<>(Problem.class);
    
    @Id
    public Long id;
    
    @Column(name = "problem_id", nullable = false)
    public String problemId;
    
    @Column(nullable = false)
    public Competition competition;
    
}
