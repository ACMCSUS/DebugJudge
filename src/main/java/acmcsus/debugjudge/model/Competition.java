package acmcsus.debugjudge.model;

import com.avaje.ebean.Model;

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
    
    @Column(nullable = false, unique = true)
    public String key;
    
    @Column(nullable = false)
    public String name;
    
    public Date date;
    
}
