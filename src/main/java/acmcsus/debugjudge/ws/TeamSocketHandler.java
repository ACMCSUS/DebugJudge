package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.ctrl.*;
import acmcsus.debugjudge.model.*;
import acmcsus.debugjudge.proto.*;
import acmcsus.debugjudge.proto.Competition.*;
import acmcsus.debugjudge.proto.Team.*;
import acmcsus.debugjudge.proto.WebSocket.*;
import acmcsus.debugjudge.proto.WebSocket.S2CMessage.*;
import io.reactivex.functions.*;
import org.eclipse.jetty.websocket.api.Session;
import org.slf4j.*;
import spark.*;

import java.io.*;
import java.util.*;

import static acmcsus.debugjudge.ctrl.MessageStores.SUBMISSION_STORE;
import static acmcsus.debugjudge.ws.SocketHandler.*;

public class TeamSocketHandler {

  private static Logger logger = LoggerFactory.getLogger(TeamSocketHandler.class);

  static void handleT2SMessage(WebSocketContext ctx) {
    T2SMessage t2s = ctx.req.getT2SMessage();

    switch (t2s.getValueCase()) {
      case SUBMISSIONCREATEMESSAGE: {
        try {
          Submission sent = t2s.getSubmissionCreateMessage().getSubmission();
          StateService.instance.submissionCreate(ctx.profile.getId(), sent.getProblemId(), sent);
        }
        catch (HaltException haltException) {
          alert(ctx.session,
              "Slow down!\n\n" +
                  "Your last submission was NOT saved. " +
                  "You must wait at least one second between submits.");
        }
        break;
      }
    }
  }

  public static void subscribeNewTeam(final Session session, final Competition.Profile profile) throws IOException {
    final long teamId = profile.getId();

    Consumer<Submission> submissionReloader =
        (sub) -> {
          try {
            SocketHandler.sendMessage(session, S2CMessage.newBuilder()
                .setReloadSubmissionMessage(ReloadSubmissionMessage.newBuilder()
                    .setSubmission(sub))
                .build());
          }
          catch (IOException e) {
            logger.error("error reloading submission of team", e);
          }
        };

    Consumer<List<Problem>> problemReloader =
        (problems) -> SocketHandler.sendMessage(session, S2CMessage.newBuilder()
            .setReloadProblemsMessage(ReloadProblemsMessage.newBuilder()
                .setProblems(Problem.List.newBuilder().addAllValue(problems))).build());

    Predicate<Submission> isTeamsSubmission = (sub) -> sub.getTeamId() == teamId;

    sendMessage(session, S2CMessage.newBuilder()
        .setReloadSubmissionsMessage(ReloadSubmissionsMessage.newBuilder()
            .setSubmissions(Submission.List.newBuilder()
                .addAllValue(SUBMISSION_STORE.readAll(SUBMISSION_STORE.getPathsForTeam(teamId)))))
        .build());

    addObserver(session,
        StateService.instance.addSubmissionCreateListener(submissionReloader, isTeamsSubmission));
    addObserver(session,
        StateService.instance.addSubmissionRulingListener(submissionReloader, isTeamsSubmission));

    addObserver(session, StateService.instance.addTeamProblemsListener(problemReloader));
  }
}
