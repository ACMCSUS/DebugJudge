package acmcsus.debugjudge.model;

public interface Profile {
    
    enum ProfileType {
        TEAM, JUDGE
    }
    
    Long getId();
    String getName();
    ProfileType getType();
    Competition getCompetition();
    
}
