package acmcsus.debugjudge.model;

public class Event {

  public enum EventType {
    SUBMISSION,
    ACCEPTANCE,
    REJECTION,
  }

  public Submission submission;
  public EventType eventType;

  public String toString() {
    return String.format("%s:%d", eventType, submission.id);
  }

}
