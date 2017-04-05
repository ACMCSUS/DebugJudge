package acmcsus.debugjudge.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.ebean.Finder;
import io.ebean.Model;

import javax.persistence.*;

@Entity
@Table(name = "judges")
public class Judge extends Model implements Profile {
    
    public static final Finder<Long, Judge> find = new Finder<>(Judge.class);
    
    @Id
    public Long id;
    
    @Column
    public String name;
    
    @JsonIgnore
    @Column(nullable = false)
    public String loginSecret;
    
    @ManyToOne(optional = false)
    public Competition competition;
    
    @Override
    public Long getId() {
        return this.id;
    }
    @Override
    public String getName() {
        return this.name;
    }
    @Override
    public ProfileType getType() {
        return ProfileType.JUDGE;
    }
    @Override
    public Competition getCompetition() {
        return competition;
    }
}
