package acmcsus.debugjudge.model;

import io.ebean.Finder;
import io.ebean.Model;

import javax.persistence.*;

@Entity
@Table(name = "problems", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"problem_name", "competition_id"})
})
public class Problem extends Model {
    
    public static final Finder<Long, Problem> find = new Finder<>(Problem.class);
    
    @Id
    public Long id;
    
    @Column(name = "ref_id", nullable = false)
    public String refId;
    
    @Column(name = "problem_name", nullable = false)
    public String problemName;
    
    @ManyToOne(optional = false)
    public Competition competition;
    
}
