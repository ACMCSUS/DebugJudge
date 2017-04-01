package acmcsus.debugjudge.model;

import io.ebean.Finder;
import io.ebean.Model;

import javax.persistence.*;

@Entity
@Table(name = "judges")
public class Judge extends Model {
    
    public static final Finder<Long, Judge> find = new Finder<>(Judge.class);
    
    @Id
    public Long id;
    
    @Column
    public String name;
    
    @ManyToOne(optional = false)
    public Competition competition;
}
