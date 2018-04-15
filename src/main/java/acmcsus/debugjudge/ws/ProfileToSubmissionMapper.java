package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.proto.Competition.*;
import acmcsus.debugjudge.proto.*;
import org.eclipse.jetty.websocket.api.*;
import org.slf4j.*;

import java.io.*;
import java.util.*;
import java.util.function.*;

import static acmcsus.debugjudge.ws.SocketHandler.sendMessage;
import static java.lang.String.format;

public class ProfileToSubmissionMapper {

  private static Logger logger = LoggerFactory.getLogger(ProfileToSubmissionMapper.class);

  @FunctionalInterface
  public interface AssignmentConsumer {

    void assigned(Session session, Submission submission) throws IOException;

  }

  private static class ProfileSession {

    private final Profile profile;
    private final Session socketSession;
    private Submission currentSubmission = null;
    private Set<Integer> skipProblems = null;

    private ProfileSession(Profile profile, Session socketSession) {
      this.profile = profile;
      this.socketSession = socketSession;
    }

    private void setProfilePreferences(Map<Integer, Boolean> profilePreferences) {
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

    private boolean canGrade(Submission submission) {
      return skipProblems == null
          || !skipProblems.contains(submission.getProblemId());
    }
  }

  private ArrayDeque<ProfileSession> waitingProfiles = new ArrayDeque<>();
  private ArrayDeque<Submission> waitingSubmissions = new ArrayDeque<>();

  private HashMap<Integer, ProfileSession> profileSessionMap = new HashMap<>();
  private HashMap<String, ProfileSession> submissionSessionMap = new HashMap<>();

  private static String idForSubmission(Submission sub) {
    return format("%d_%d_%d", sub.getTeamId(), sub.getProblemId(), sub.getSubmissionTimeSeconds());
  }

  private final AssignmentConsumer assignmentConsumer;

  public ProfileToSubmissionMapper(AssignmentConsumer assignmentConsumer) {
    this.assignmentConsumer = assignmentConsumer;
  }

  public void connected(Profile judge, Session session) {
    if (profileSessionMap.containsKey(judge.getId())) {
      kick(judge, "You've started judging somewhere else!");
    }

    ProfileSession judgeSession = new ProfileSession(judge, session);
    profileSessionMap.put(judgeSession.profile.getId(), judgeSession);
  }

  public void started(Profile judge, Session session) {
    if (session.isOpen()) {
      welcome(session, "");
    }
    if (!profileSessionMap.containsKey(judge.getId())) {
      connected(judge, session);
    }
    match(profileSessionMap.get(judge.getId()));
  }
  public void stopped(Profile judge) {
    ProfileSession profileSession = profileSessionMap.get(judge.getId());

    if (profileSession == null) {
      return;
    }

    if (profileSession.currentSubmission != null) {
      submissionSessionMap.remove(idForSubmission(profileSession.currentSubmission));
      matchOrPushBack(profileSession.currentSubmission);
    }

    if (profileSession.socketSession.isOpen()) {
      unmatched(profileSession);
      goodbye(profileSession.socketSession, "Stopped Judging");
    }

    waitingProfiles.removeIf(jSess -> jSess.profile.getId() == judge.getId());
    profileSession.currentSubmission = null;
  }

  public void disconnected(Profile judge, Session session) {
    if (session.isOpen()) {
      goodbye(session, "");
    }
    purge(judge);
  }


  public void kick(Profile judge, String reason) {
    ProfileSession profileSession = profileSessionMap.get(judge.getId());

    if (profileSession != null) {
      purge(judge);
      goodbye(profileSession.socketSession, reason);
    }
  }

  public void submitted(Submission submission) {
    match(submission);
  }

  public void judged(Submission submission) {
    purge(submission);
  }

  public void defer(Profile profile) {
    ProfileSession ProfileSession = profileSessionMap.get(profile.getId());
    if (ProfileSession == null) {
      return;
    }

    if (waitingSubmissions.isEmpty()) {
      SocketHandler.alert(ProfileSession.socketSession,
          "There are no other submissions in the queue!");
    }
    else {
      match(ProfileSession);
    }
  }

  private void welcome(Session session, String reason) {
    try {
      sendMessage(session, Judge.S2JMessage.newBuilder()
          .setJudgingStatus(Judge.S2JMessage.JudgingStatusMessage.newBuilder()
              .setJudging(true)
              .setMessage(reason)).build());
    }
    catch (IOException e) {
      e.printStackTrace();
    }
  }

  private void goodbye(Session session, String reason) {
    try {
      sendMessage(session, Judge.S2JMessage.newBuilder()
          .setJudgingStatus(Judge.S2JMessage.JudgingStatusMessage.newBuilder()
              .setJudging(false)
              .setMessage(reason)).build());
    }
    catch (IOException e) {
      e.printStackTrace();
    }
  }

  public void setProfilePreferences(Profile profile, Session session, Map<Integer, Boolean> map) {
    ProfileSession profileSession = profileSessionMap.get(profile.getId());
    if (profileSession == null) {
      kick(profile, "You need to login!");
    }
    else {
      profileSession.setProfilePreferences(map);

      if (profileSession.currentSubmission == null) {
        match(profileSession);
      }
      else if (map.containsKey(profileSession.currentSubmission.getProblemId())) {
        boolean needNewProblem = !map.get(profileSession.currentSubmission.getProblemId());
        if (needNewProblem) {
          defer(profileSession.profile);
        }
      }
    }
  }

  private void purge(Profile profile) {
    ProfileSession profileSession = profileSessionMap.remove(profile.getId());

    if (profileSession == null) {
      return;
    }

    if (profileSession.currentSubmission == null) {
      waitingProfiles.removeIf(jSess -> jSess.profile.getId() == profile.getId());
    }
    else {
      submissionSessionMap.remove(idForSubmission(profileSession.currentSubmission));
      matchOrPushBack(profileSession.currentSubmission);
    }
  }

  private void purge(Submission submission) {
    ProfileSession profileSession = submissionSessionMap.remove(idForSubmission(submission));
    String submissionId = idForSubmission(submission);

    if (profileSession == null) {
      waitingSubmissions.removeIf(sub -> submissionId.equals(idForSubmission(sub)));
    }
    else {
      profileSession.currentSubmission = null;
      match(profileSession);
    }
  }

  private Submission pollFirstEligibleSubmission(ProfileSession ProfileSession) {
    return waitingSubmissions
        .stream()
        .filter(ProfileSession::canGrade)
        .findFirst()
        .orElse(null);
  }

  private ProfileSession pollFirstEligibleProfile(Submission submission) {
    return waitingProfiles
        .stream()
        .filter(ProfileSession -> ProfileSession.canGrade(submission))
        .findFirst()
        .orElse(null);
  }

  private void match(ProfileSession profileSession) {
    Submission submission = pollFirstEligibleSubmission(profileSession);

    if (profileSession.currentSubmission != null) {
      matchOrPushBack(profileSession.currentSubmission);
    }

    if (submission == null) {
      unmatched(profileSession);
    }
    else {
      matched(profileSession, submission);
    }
  }

  private void match(Submission submission) {
    ProfileSession profileSession = pollFirstEligibleProfile(submission);

    if (profileSession == null) {
      waitingSubmissions.add(submission);
      submissionSessionMap.remove(idForSubmission(submission));
    }
    else {
      matched(profileSession, submission);
    }
  }

  private void matchOrPushBack(Submission submission) {
    ProfileSession profileSession = pollFirstEligibleProfile(submission);

    if (profileSession == null) {
      waitingSubmissions.addFirst(submission);
      submissionSessionMap.remove(idForSubmission(submission));
    }
    else {
      matched(profileSession, submission);
    }
  }

  private void matched(ProfileSession profileSession, Submission submission) {
    profileSession.currentSubmission = submission;
    submissionSessionMap.put(idForSubmission(submission), profileSession);

    String submissionId = idForSubmission(submission);
    waitingProfiles.removeIf(js -> js.profile.getId() == profileSession.profile.getId());
    waitingSubmissions.removeIf(sub -> submissionId.equals(idForSubmission(sub)));

    try {
      assignmentConsumer.assigned(profileSession.socketSession, profileSession.currentSubmission);
    }
    catch (IOException e) {
      kick(profileSession.profile, "There was an error matching you with a submission.");
      logger.error("", e);
    }
  }

  private void unmatched(ProfileSession profileSession) {
    try {
      profileSession.currentSubmission = null;
      assignmentConsumer.assigned(profileSession.socketSession, null);
      waitingProfiles.add(profileSession);
    }
    catch (IOException e) {
      e.printStackTrace();
    }

  }
}
