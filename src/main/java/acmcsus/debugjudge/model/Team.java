package acmcsus.debugjudge.model;

import com.avaje.ebean.Model;

import javax.persistence.*;

@Entity
@Table(name = "teams", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"team_id", "competition"})
})
public class Team extends Model {
    
    public static final Finder<Long, Team> find = new Finder<>(Team.class);
    
    @Id
    public Long id;
    
    @Column(name = "team_id", nullable= false)
    public String teamId;
    
    @ManyToOne
    @Column(nullable = false)
    public Competition competition;
    
//    @OneToMany(mappedBy = "team")
//    public List<String> members;
//
}
