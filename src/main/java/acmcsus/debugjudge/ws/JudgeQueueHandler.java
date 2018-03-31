package acmcsus.debugjudge.ws;

import static acmcsus.debugjudge.ws.SocketHandler.sendMessage;
import static java.lang.String.format;

import acmcsus.debugjudge.model.*;
import acmcsus.debugjudge.proto.Competition.Profile;
import acmcsus.debugjudge.proto.Competition.Submission;
import acmcsus.debugjudge.proto.WebSocket.S2CMessage.S2JMessage;
import java.io.IOException;
import java.util.ArrayDeque;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import org.eclipse.jetty.websocket.api.Session;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Created by merrillm on 4/8/17.
 */
public class JudgeQueueHandler {

  private static Logger logger = LoggerFactory.getLogger(JudgeQueueHandler.class);

  private JudgeQueueHandler() {
    // TODO: Uhh this is gonna be tricky
//    Submission.find.query().where()
//      .isNull("accepted")
//      .findEach(waitingSubmissions::add);
    StateService.instance.addSubmissionCreateListener(this::submitted);
    StateService.instance.addSubmissionRulingListener(this::judged);
  }

  private static final JudgeQueueHandler theInstance = new JudgeQueueHandler();

  public static JudgeQueueHandler getInstance() {
    return theInstance;
  }

  private static class JudgeSession {

    private final Profile judge;
    private final Session socketSession;
    private Submission currentSubmission = null;
    private Set<Long> skipProblems = null;

    private JudgeSession(Profile judge, Session socketSession) {
      this.judge = judge;
      this.socketSession = socketSession;
    }

    private void setJudgePreferences(Map<Long, Boolean> judgePreferences) {
      if (skipProblems == null) { skipProblems = new HashSet<>(); }

      for (Map.Entry<Long, Boolean> entry : judgePreferences.entrySet()) {
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

  private ArrayDeque<JudgeSession> waitingJudges = new ArrayDeque<>();
  private ArrayDeque<Submission> waitingSubmissions = new ArrayDeque<>();

  private HashMap<Long, JudgeSession> judgeSessionMap = new HashMap<>();
  private HashMap<String, JudgeSession> submissionSessionMap = new HashMap<>();

  private static String idForSubmission(Submission sub) {
    return format("%d_%d_%d", sub.getTeamId(), sub.getProblemId(), sub.getSubmissionTimeSeconds());
  }

  public void connected(Profile judge, Session session) {
    if (judgeSessionMap.containsKey(judge.getId())) {
      kick(judge, "You've started judging somewhere else!");
    }

    JudgeSession judgeSession = new JudgeSession(judge, session);
    judgeSessionMap.put(judgeSession.judge.getId(), judgeSession);
    match(judgeSession);
  }

  public void disconnected(Profile judge) {
    purge(judge);
  }

  public void submitted(Submission submission) {
    match(submission);
  }

  public void judged(Submission submission) {
    purge(submission);
  }

  public void defer(Profile judge) {
    JudgeSession judgeSession = judgeSessionMap.get(judge.getId());
    if (judgeSession == null) { return; }

    if (waitingSubmissions.isEmpty()) {
      SocketHandler.alert(judgeSession.socketSession,
        "There are no other submissions in the queue!");
    }
    else {
      match(judgeSession);
    }
  }

  public void kick(Profile judge, String reason) {
    JudgeSession judgeSession = judgeSessionMap.get(judge.getId());

    if (judgeSession != null) {
      purge(judge);

      try {
        sendMessage(judgeSession.socketSession, S2JMessage.newBuilder()
          .setKickMessage(S2JMessage.KickMessage.newBuilder()
            .setMessage(reason)).build());
      } catch (IOException e) {
        e.printStackTrace();
      }
    }
  }

  public void setJudgePreferences(Profile judge, Session session, Map<Long, Boolean> map) {
    JudgeSession judgeSession = judgeSessionMap.get(judge.getId());
    if (judgeSession == null) {
      kick(judge, "You need to login!");
    }
    else {
      judgeSession.setJudgePreferences(map);

      if (judgeSession.currentSubmission == null) {
        match(judgeSession);
      }
      else if (map.containsKey(judgeSession.currentSubmission.getProblemId())) {
        boolean needNewProblem = !map.get(judgeSession.currentSubmission.getProblemId());
        if (needNewProblem) {
          defer(judgeSession.judge);
        }
      }
    }
  }

  private void purge(Profile judge) {
    JudgeSession judgeSession = judgeSessionMap.remove(judge.getId());

    if (judgeSession == null) { return; }

    if (judgeSession.currentSubmission == null) {
      waitingJudges.removeIf(jSess -> jSess.judge.getId() == judge.getId());
    }
    else {
      submissionSessionMap.remove(idForSubmission(judgeSession.currentSubmission));
      matchOrPushBack(judgeSession.currentSubmission);
    }
  }

  private void purge(Submission submission) {
    JudgeSession judgeSession = submissionSessionMap.remove(idForSubmission(submission));
    String submissionId = idForSubmission(submission);

    if (judgeSession == null) {
      waitingSubmissions.removeIf(sub -> submissionId.equals(idForSubmission(sub)));
    }
    else {
      judgeSession.currentSubmission = null;
      match(judgeSession);
    }
  }

  private Submission pollFirstEligibleSubmission(JudgeSession judgeSession) {
    return waitingSubmissions
      .stream()
      .filter(judgeSession::canGrade)
      .findFirst()
      .orElse(null);
  }

  private JudgeSession pollFirstEligibleJudge(Submission submission) {
    return waitingJudges
      .stream()
      .filter(judgeSession -> judgeSession.canGrade(submission))
      .findFirst()
      .orElse(null);
  }

  private void match(JudgeSession judgeSession) {
    Submission submission = pollFirstEligibleSubmission(judgeSession);

    if (judgeSession.currentSubmission != null) { matchOrPushBack(judgeSession.currentSubmission); }

    if (submission == null) {
      unmatched(judgeSession);
    }
    else {
      matched(judgeSession, submission);
    }
  }

  private void match(Submission submission) {
    JudgeSession judgeSession = pollFirstEligibleJudge(submission);

    if (judgeSession == null) {
      waitingSubmissions.add(submission);
      submissionSessionMap.remove(idForSubmission(submission));
    }
    else {
      matched(judgeSession, submission);
    }
  }

  private void matchOrPushBack(Submission submission) {
    JudgeSession judgeSession = pollFirstEligibleJudge(submission);

    if (judgeSession == null) {
      waitingSubmissions.addFirst(submission);
      submissionSessionMap.remove(idForSubmission(submission));
    }
    else {
      matched(judgeSession, submission);
    }
  }

  private void matched(JudgeSession judgeSession, Submission submission) {
    judgeSession.currentSubmission = submission;
    submissionSessionMap.put(idForSubmission(submission), judgeSession);

    String submissionId = idForSubmission(submission);
    waitingJudges.removeIf(js -> js.judge.getId() == judgeSession.judge.getId());
    waitingSubmissions.removeIf(sub -> submissionId.equals(idForSubmission(sub)));

    try {
      sendMessage(judgeSession.socketSession, S2JMessage.newBuilder()
        .setAssignedSubmissionMessage(
          S2JMessage.AssignedSubmissionMessage.newBuilder()
            .setSubmission(submission)).build());
    } catch (IOException e) {
      kick(judgeSession.judge, "There was an error matching you with a submission.");
      logger.error("", e);
    }
  }

  private void unmatched(JudgeSession judgeSession) {
    try {
      judgeSession.currentSubmission = null;
      sendMessage(judgeSession.socketSession, S2JMessage.newBuilder()
        .setAssignedSubmissionMessage(S2JMessage.AssignedSubmissionMessage.newBuilder())
        .build());
      waitingJudges.add(judgeSession);
    } catch (IOException e) {
      e.printStackTrace();
    }

  }
}
