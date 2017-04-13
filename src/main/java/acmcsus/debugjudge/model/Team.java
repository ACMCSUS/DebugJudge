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
public class Team extends Model implements Profile {
    
    public static final Finder<Long, Team> find = new Finder<>(Team.class);
    
    @Id
    public Long id;
    
    @Column(name = "team_name", nullable= false)
    public String teamName;
    
    @Column(name = "member_names", nullable = false)
    public String memberNames;
    
    @JsonIgnore
    @Column(nullable = false)
    public String loginSecret;
    
    @ManyToOne(optional = false)
    public Competition competition;

    @JsonManagedReference
    @OneToMany
    public List<Submission> submissions;
    
    @Override
    public Long getId() {
        return this.id;
    }
    @Override
    public String getName() {
        return this.teamName;
    }
    @Override
    public Profile.ProfileType getType() {
        return ProfileType.TEAM;
    }
    @Override
    public Competition getCompetition() {
        return competition;
    }
}
