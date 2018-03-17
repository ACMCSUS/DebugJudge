package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.model.*;
import acmcsus.debugjudge.proto.WebSocket.S2CMessage.*;
import org.eclipse.jetty.websocket.api.*;
import org.slf4j.*;

import java.io.*;
import java.util.*;

import static acmcsus.debugjudge.ws.SocketHandler.sendMessage;

/**
 * Created by merrillm on 4/8/17.
 */
public class JudgeQueueHandler {

    private static Logger logger = LoggerFactory.getLogger(JudgeQueueHandler.class);

    private JudgeQueueHandler(){
        Submission.find.query().where()
                .isNull("accepted")
                .findEach(waitingSubmissions::add);
    }

    private static final JudgeQueueHandler theInstance = new JudgeQueueHandler();
    public static JudgeQueueHandler getInstance() {
        return theInstance;
    }

    private static class JudgeSession {
        private final Judge judge;
        private final Session socketSession;
        private Submission currentSubmission = null;
        private Set<Long> skipProblems = null;

        private JudgeSession(Judge judge, Session socketSession) {
            this.judge = judge;
            this.socketSession = socketSession;
        }

        private void setJudgePreferences(Map<Long, Boolean> judgePreferences) {
            if (skipProblems == null) skipProblems = new HashSet<>();

            for (Map.Entry<Long, Boolean> entry : judgePreferences.entrySet()) {
                if (!entry.getValue()) {
                    skipProblems.add(entry.getKey());
                } else {
                    skipProblems.remove(entry.getKey());
                }
            }
        }

        private boolean canGrade(Submission submission) {
            return skipProblems == null
                    || !skipProblems.contains(submission.problem.id);
        }
    }

    private ArrayDeque<JudgeSession> waitingJudges = new ArrayDeque<>();
    private ArrayDeque<Submission> waitingSubmissions = new ArrayDeque<>();

    private HashMap<Long, JudgeSession> judgeSessionMap = new HashMap<>();
    private HashMap<Long, JudgeSession> submissionSessionMap = new HashMap<>();

    public boolean allowUse(Profile.ProfileType profileType) {
        return profileType == Profile.ProfileType.JUDGE;
    }

    public void connected(Judge judge, Session session) {
        if (judgeSessionMap.containsKey(judge.id))
            kick(judge, "You've started judging somewhere else!");

        JudgeSession judgeSession = new JudgeSession(judge, session);
        judgeSessionMap.put(judgeSession.judge.id, judgeSession);
        match(judgeSession);
    }
    public void disconnected(Judge judge) {
        purge(judge);
    }

    public void submitted(Submission submission) {
        match(submission);
    }
    public void judged(Submission submission) {
        purge(submission);
    }

    public void defer(Judge judge) {
        JudgeSession judgeSession = judgeSessionMap.get(judge.id);
        if (judgeSession == null) return;

        if (waitingSubmissions.isEmpty()) {
            SocketHandler.alert(judgeSession.socketSession,
              "There are no other submissions in the queue!");
        } else {
            match(judgeSession);
        }
    }

    public void kick(Judge judge, String reason) {
        JudgeSession judgeSession = judgeSessionMap.get(judge.id);

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

    public void setJudgePreferences(Judge judge, Session session, Map<Long, Boolean> map) {
      JudgeSession judgeSession = judgeSessionMap.get(judge.getId());
      if (judgeSession == null) {
        kick(judge, "You need to login!");
      }
      else {
        judgeSession.setJudgePreferences(map);

        if (judgeSession.currentSubmission == null) {
          match(judgeSession);
        }
        else if (map.containsKey(judgeSession.currentSubmission.problem.id)) {
          boolean needNewProblem = !map.get(judgeSession.currentSubmission.problem.id);
          if (needNewProblem) {
            defer(judgeSession.judge);
          }
        }
      }
    }

    private void purge(Judge judge) {
        JudgeSession judgeSession = judgeSessionMap.remove(judge.id);

        if (judgeSession == null)
            return;

        if (judgeSession.currentSubmission == null) {
            waitingJudges.removeIf(jSess -> jSess.judge.id.equals(judge.id));
        } else {
            submissionSessionMap.remove(judgeSession.currentSubmission.id);
            matchOrPushBack(judgeSession.currentSubmission);
        }
    }
    private void purge(Submission submission) {
        JudgeSession judgeSession = submissionSessionMap.remove(submission.id);

        if (judgeSession == null) {
            waitingSubmissions.removeIf(sub -> sub.id.equals(submission.id));
        } else {
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

        if (judgeSession.currentSubmission != null)
            matchOrPushBack(judgeSession.currentSubmission);

        if (submission == null) {
            unmatched(judgeSession);
        } else {
            matched(judgeSession, submission);
        }
    }
    private void match(Submission submission) {
        JudgeSession judgeSession = pollFirstEligibleJudge(submission);

        if (judgeSession == null) {
            waitingSubmissions.add(submission);
            submissionSessionMap.remove(submission.id);
        } else {
            matched(judgeSession, submission);
        }
    }
    private void matchOrPushBack(Submission submission) {
        JudgeSession judgeSession = pollFirstEligibleJudge(submission);

        if (judgeSession == null) {
            waitingSubmissions.addFirst(submission);
            submissionSessionMap.remove(submission.id);
        } else {
            matched(judgeSession, submission);
        }
    }
    private void matched(JudgeSession judgeSession, Submission submission) {
        judgeSession.currentSubmission = submission;
        submissionSessionMap.put(submission.id, judgeSession);

        waitingJudges.removeIf(js -> js.judge.id.equals(judgeSession.judge.id));
        waitingSubmissions.removeIf(sub -> sub.id.equals(submission.id));

        try {
            sendMessage(judgeSession.socketSession, S2JMessage.newBuilder()
              .setAssignedSubmissionMessage(
                S2JMessage.AssignedSubmissionMessage.newBuilder()
                  .setSubmissionId(submission.id)).build());
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
