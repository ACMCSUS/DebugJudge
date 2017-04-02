package acmcsus.debugjudge.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import io.ebean.Finder;
import io.ebean.Model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "teams", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"team_name", "competition_id"})
})
public class Team extends Model {
    
    public static final Finder<Long, Team> find = new Finder<>(Team.class);
    
    @Id
    public Long id;
    
    @Column(name = "team_name", nullable= false)
    public String teamName;
    
    @Column(name = "member_names", nullable = false)
    public String memberNames;
    
    @JsonIgnore
    public String loginSecret;
    
    @ManyToOne(optional = false)
    public Competition competition;

    @JsonManagedReference
    @OneToMany
    public List<Submission> submissions;
}
