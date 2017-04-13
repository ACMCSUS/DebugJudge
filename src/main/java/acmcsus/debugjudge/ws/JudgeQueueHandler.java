package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.model.Judge;
import acmcsus.debugjudge.model.Submission;
import org.eclipse.jetty.websocket.api.Session;

import java.io.IOException;
import java.util.ArrayDeque;
import java.util.HashMap;

/**
 * Created by merrillm on 4/8/17.
 */
public class JudgeQueueHandler {
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
        public final Judge judge;
        public final Session socketSession;
        private Submission currentSubmission = null;
        
        public JudgeSession(Judge judge, Session socketSession) {
            this.judge = judge;
            this.socketSession = socketSession;
        }
    }
    
    private ArrayDeque<JudgeSession> waitingJudges = new ArrayDeque<>();
    private ArrayDeque<Submission> waitingSubmissions = new ArrayDeque<>();
    
    private HashMap<Long, JudgeSession> judgeSessionMap = new HashMap<>();
    private HashMap<Long, JudgeSession> submissionSessionMap = new HashMap<>();
    
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
    public void accepted(Submission submission) {
        purge(submission);
    }
    public void rejected(Submission submission) {
        purge(submission);
    }
    
    public void kick(Judge judge, String reason) {
        JudgeSession judgeSession = judgeSessionMap.get(judge.id);
    
        if (judgeSession != null) {
            purge(judge);
        
            try {
                judgeSession.socketSession.getRemote().sendString("{" +
                        "\"who\":\"jdg\"," +
                        "\"what\":\"kick\"," +
                        "\"data\":\"" + reason + "\"" +
                        "}");
            } catch (IOException e) {
                e.printStackTrace();
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
            
            try {
                judgeSession.socketSession.getRemote().sendString("{" +
                        "\"who\":\"jdg\"," +
                        "\"what\":\"set\"," +
                        "\"data\":null" +
                        "}");
            } catch (IOException e) {
                e.printStackTrace();
            }
            
            match(judgeSession);
        }
    }
    
    private void match(JudgeSession judgeSession) {
        Submission submission = waitingSubmissions.pollFirst();
        
        if (submission == null) {
            waitingJudges.add(judgeSession);
        } else {
            matched(judgeSession, submission);
        }
    }
    private void match(Submission submission) {
        JudgeSession judgeSession = waitingJudges.pollFirst();
        
        if (judgeSession == null) {
            waitingSubmissions.add(submission);
        } else {
            matched(judgeSession, submission);
        }
    }
    private void matchOrPushBack(Submission submission) {
        JudgeSession judgeSession = waitingJudges.pollFirst();
        
        if (judgeSession == null) {
            waitingSubmissions.addFirst(submission);
        } else {
            matched(judgeSession, submission);
        }
    }
    private void matched(JudgeSession judgeSession, Submission submission) {
        judgeSession.currentSubmission = submission;
        submissionSessionMap.put(submission.id, judgeSession);
    
        try {
            judgeSession.socketSession.getRemote().sendString("{" +
                    "\"who\":\"jdg\"," +
                    "\"what\":\"set\"," +
                    "\"data\":" + submission.id +
                    "}");
        } catch (IOException e) {
            kick(judgeSession.judge, "There was an error matching you with a submission.");
        }
    }
}
