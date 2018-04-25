package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.proto.*;
import com.google.inject.*;
import org.eclipse.jetty.websocket.api.*;

import java.util.*;

@Singleton
public class QueuedSocketSession {

  public final Competition.Profile profile;
  public final Session socketSession;
  public Competition.Submission currentSubmission = null;
  private Set<Integer> skipProblems = null;

  public QueuedSocketSession(Competition.Profile profile, Session socketSession) {
    this.profile = profile;
    this.socketSession = socketSession;
  }

  public void setProfilePreferences(Map<Integer, Boolean> profilePreferences) {
    if (skipProblems == null) {
      skipProblems = new HashSet<>();
    }

    for (Map.Entry<Integer, Boolean> entry : profilePreferences.entrySet()) {
      if (!entry.getValue()) {
        skipProblems.add(entry.getKey());
      }
      else {
        skipProblems.remove(entry.getKey());
      }
    }
  }

  public boolean canGrade(Competition.Submission submission) {
    return skipProblems == null
        || !skipProblems.contains(submission.getProblemId());
  }
}
