package acmcsus.debugjudge.model;

import io.ebean.Finder;
import io.ebean.Model;

import javax.persistence.*;

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
    
    @ManyToOne(optional = false)
    public Competition competition;

}
