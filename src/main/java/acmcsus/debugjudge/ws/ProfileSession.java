package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.proto.*;
import com.google.inject.*;
import org.eclipse.jetty.websocket.api.*;

import java.util.*;

@Singleton
public class ProfileSession {

  final Competition.Profile profile;
  final Session socketSession;
  Competition.Submission currentSubmission = null;
  Set<Integer> skipProblems = null;

  public ProfileSession(Competition.Profile profile, Session socketSession) {
    this.profile = profile;
    this.socketSession = socketSession;
  }

  void setProfilePreferences(Map<Integer, Boolean> profilePreferences) {
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

  boolean canGrade(Competition.Submission submission) {
    return skipProblems == null
        || !skipProblems.contains(submission.getProblemId());
  }
}
