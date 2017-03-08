package acmcsus.debugjudge.model;

import io.ebean.Finder;
import io.ebean.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "competitions")
public class Competition extends Model {
    
    public static final Finder<Long, Competition> find = new Finder<>(Competition.class);
    
    @Id
    public Long id;
    
    @Column(name = "ref_id", nullable = false, unique = true)
    public String refId;
    
    @Column(nullable = false)
    public String name;
    
    @Column(columnDefinition = "datetime")
    public Date date;
    
}
