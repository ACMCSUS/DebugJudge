package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.proto.Competition.*;
import acmcsus.debugjudge.proto.*;
import com.google.inject.*;
import org.eclipse.jetty.websocket.api.*;
import org.slf4j.*;

import java.io.*;
import java.util.*;

import static acmcsus.debugjudge.ws.SocketSendMessageUtil.sendMessage;
import static java.lang.String.format;

public abstract class SocketSessionToSubmissionMapper {

  private static Logger logger = LoggerFactory.getLogger(SocketSessionToSubmissionMapper.class);

  @Inject
  public BaseSocketService baseSocketService;

  private ArrayDeque<QueuedSocketSession> waitingProfiles = new ArrayDeque<>();
  private ArrayDeque<Submission> waitingSubmissions = new ArrayDeque<>();

  private HashMap<Session, QueuedSocketSession> profileSessionMap = new HashMap<>();
  private HashMap<String, QueuedSocketSession> submissionSessionMap = new HashMap<>();

  private static String idForSubmission(Submission sub) {
    return format("%d_%d_%d", sub.getTeamId(), sub.getProblemId(), sub.getSubmissionTimeSeconds());
  }

  public abstract void assigned(Session session, Submission submission) throws IOException;

  public void connected(Profile judge, Session session) {
    if (profileSessionMap.containsKey(session)) {
      return;
      //kick(session, "You've started judging somewhere else!");
    }

    QueuedSocketSession judgeSession = new QueuedSocketSession(judge, session);
    profileSessionMap.put(judgeSession.socketSession, judgeSession);
  }

  public void started(Profile judge, Session session) {
    if (session.isOpen()) {
      welcome(session, "");
    }
    if (!profileSessionMap.containsKey(session)) {
      connected(judge, session);
    }
    match(profileSessionMap.get(session));
  }

  public void stopped(Session session) {
    QueuedSocketSession queuedSocketSession = profileSessionMap.get(session);

    if (queuedSocketSession == null) {
      return;
    }

    if (queuedSocketSession.currentSubmission != null) {
      submissionSessionMap.remove(idForSubmission(queuedSocketSession.currentSubmission));
      matchOrPushBack(queuedSocketSession.currentSubmission);
    }

    if (queuedSocketSession.socketSession.isOpen()) {
      unmatched(queuedSocketSession);
      goodbye(queuedSocketSession.socketSession, "Stopped Judging");
    }

    waitingProfiles.removeIf(jSess -> jSess.socketSession.equals(session));
    queuedSocketSession.currentSubmission = null;
  }

  public void disconnected(Session session) {
    if (session.isOpen()) {
      goodbye(session, "");
    }
    purge(session);
  }


  public void kick(Session session, String reason) {
    QueuedSocketSession queuedSocketSession = profileSessionMap.get(session);

    if (queuedSocketSession != null) {
      purge(session);
      goodbye(queuedSocketSession.socketSession, reason);
    }
  }

  public void submitted(Submission submission) {
    match(submission);
  }

  public void judged(Submission submission) {
    purge(submission);
  }

  public void defer(Session session) {
    QueuedSocketSession queuedSocketSession = profileSessionMap.get(session);
    if (queuedSocketSession == null) {
      return;
    }

    if (waitingSubmissions.isEmpty()) {
      baseSocketService.alert(session,
          "There are no other submissions in the queue!");
    }
    else {
      match(queuedSocketSession);
    }
  }

  private void welcome(Session session, String reason) {
    try {
      sendMessage(session, WebSocket.S2CMessage.newBuilder()
          .setS2JMessage(Judge.S2JMessage.newBuilder()
              .setJudgingStatus(Judge.S2JMessage.JudgingStatusMessage.newBuilder()
                  .setJudging(true)
                  .setMessage(reason))).build());
    }
    catch (IOException e) {
      e.printStackTrace();
    }
  }

  private void goodbye(Session session, String reason) {
    try {
      sendMessage(session, WebSocket.S2CMessage.newBuilder()
          .setS2JMessage(Judge.S2JMessage.newBuilder()
              .setJudgingStatus(Judge.S2JMessage.JudgingStatusMessage.newBuilder()
                  .setJudging(false)
                  .setMessage(reason))).build());
    }
    catch (IOException e) {
      e.printStackTrace();
    }
  }

  public void setProfilePreferences(Session session, Map<Integer, Boolean> map) {
    QueuedSocketSession queuedSocketSession = profileSessionMap.get(session);
    if (queuedSocketSession == null) {
      kick(session, "You need to login!");
    }
    else {
      queuedSocketSession.setProfilePreferences(map);

      if (queuedSocketSession.currentSubmission == null) {
        match(queuedSocketSession);
      }
      else if (map.containsKey(queuedSocketSession.currentSubmission.getProblemId())) {
        boolean needNewProblem = !map.get(queuedSocketSession.currentSubmission.getProblemId());
        if (needNewProblem) {
          defer(queuedSocketSession.socketSession);
        }
      }
    }
  }

  private void purge(Session session) {
    QueuedSocketSession queuedSocketSession = profileSessionMap.remove(session);

    if (queuedSocketSession == null) {
      return;
    }

    if (queuedSocketSession.currentSubmission == null) {
      waitingProfiles.removeIf(jSess -> jSess.socketSession.equals(session));
    }
    else {
      submissionSessionMap.remove(idForSubmission(queuedSocketSession.currentSubmission));
      matchOrPushBack(queuedSocketSession.currentSubmission);
    }
  }

  private void purge(Submission submission) {
    QueuedSocketSession queuedSocketSession = submissionSessionMap.remove(idForSubmission(submission));
    String submissionId = idForSubmission(submission);

    if (queuedSocketSession == null) {
      waitingSubmissions.removeIf(sub -> submissionId.equals(idForSubmission(sub)));
    }
    else {
      queuedSocketSession.currentSubmission = null;
      match(queuedSocketSession);
    }
  }

  private Submission pollFirstEligibleSubmission(QueuedSocketSession QueuedSocketSession) {
    return waitingSubmissions
        .stream()
        .filter(QueuedSocketSession::canGrade)
        .findFirst()
        .orElse(null);
  }

  private QueuedSocketSession pollFirstEligibleProfile(Submission submission) {
    return waitingProfiles
        .stream()
        .filter(QueuedSocketSession -> QueuedSocketSession.canGrade(submission))
        .findFirst()
        .orElse(null);
  }

  private void match(QueuedSocketSession queuedSocketSession) {
    Submission submission = pollFirstEligibleSubmission(queuedSocketSession);

    if (queuedSocketSession.currentSubmission != null) {
      matchOrPushBack(queuedSocketSession.currentSubmission);
    }

    if (submission == null) {
      unmatched(queuedSocketSession);
    }
    else {
      matched(queuedSocketSession, submission);
    }
  }

  private void match(Submission submission) {
    QueuedSocketSession queuedSocketSession = pollFirstEligibleProfile(submission);

    if (queuedSocketSession == null) {
      waitingSubmissions.add(submission);
      submissionSessionMap.remove(idForSubmission(submission));
    }
    else {
      matched(queuedSocketSession, submission);
    }
  }

  private void matchOrPushBack(Submission submission) {
    QueuedSocketSession queuedSocketSession = pollFirstEligibleProfile(submission);

    if (queuedSocketSession == null) {
      waitingSubmissions.addFirst(submission);
      submissionSessionMap.remove(idForSubmission(submission));
    }
    else {
      matched(queuedSocketSession, submission);
    }
  }

  private void matched(QueuedSocketSession queuedSocketSession, Submission submission) {
    queuedSocketSession.currentSubmission = submission;
    submissionSessionMap.put(idForSubmission(submission), queuedSocketSession);

    String submissionId = idForSubmission(submission);
    waitingProfiles.removeIf(js -> js.profile.getId() == queuedSocketSession.profile.getId());
    waitingSubmissions.removeIf(sub -> submissionId.equals(idForSubmission(sub)));

    try {
      assigned(queuedSocketSession.socketSession, queuedSocketSession.currentSubmission);
    }
    catch (IOException e) {
      kick(queuedSocketSession.socketSession, "There was an error matching you with a submission.");
      logger.error("", e);
    }
  }

  private void unmatched(QueuedSocketSession queuedSocketSession) {
    try {
      queuedSocketSession.currentSubmission = null;
      assigned(queuedSocketSession.socketSession, null);
      waitingProfiles.add(queuedSocketSession);
    }
    catch (IOException e) {
      e.printStackTrace();
    }

  }
}
