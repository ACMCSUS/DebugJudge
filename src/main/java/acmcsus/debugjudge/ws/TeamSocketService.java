package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.ctrl.*;
import acmcsus.debugjudge.model.*;
import acmcsus.debugjudge.proto.Competition.*;
import acmcsus.debugjudge.proto.Team.*;
import acmcsus.debugjudge.proto.WebSocket.*;
import acmcsus.debugjudge.proto.WebSocket.S2CMessage.*;
import com.google.inject.*;
import io.reactivex.functions.*;
import org.slf4j.*;
import spark.*;

import java.io.*;
import java.util.*;

import static acmcsus.debugjudge.ctrl.MessageStores.SUBMISSION_STORE;

@Singleton
public class TeamSocketService extends ProfileSocketService {

  private static Logger logger = LoggerFactory.getLogger(TeamSocketService.class);

  private CompetitionController competitionController;

  @Inject
  public TeamSocketService(BaseSocketService baseSocketService,
                           CompetitionController competitionController) {
    super(baseSocketService, Profile.ProfileType.TEAM);
    this.competitionController = competitionController;
  }

  @Override
  public void onConnect(WebSocketContext ctx) throws IOException {
    final long teamId = ctx.profile.getId();

    Consumer<Submission> submissionReloader =
        (sub) -> {
          try {
            sub = SUBMISSION_STORE.clearProtectedFields(sub);

            baseSocketService.sendMessage(ctx.session, S2CMessage.newBuilder()
                .setReloadSubmissionMessage(ReloadSubmissionMessage.newBuilder()
                    .setSubmission(sub))
                .build());
          }
          catch (IOException e) {
            logger.error("error reloading submission of team", e);
          }
        };

    Consumer<List<Problem>> problemReloader =
        (problems) -> baseSocketService.sendMessage(ctx.session, S2CMessage.newBuilder()
            .setReloadProblemsMessage(ReloadProblemsMessage.newBuilder()
                .setProblems(Problem.List.newBuilder().addAllValue(problems))).build());

    Predicate<Submission> isTeamsSubmission = (sub) -> sub.getTeamId() == teamId;

    baseSocketService.sendMessage(ctx.session, S2CMessage.newBuilder()
        .setReloadSubmissionsMessage(ReloadSubmissionsMessage.newBuilder()
            .setSubmissions(Submission.List.newBuilder()
                .addAllValue(SUBMISSION_STORE.readAll(SUBMISSION_STORE.getPathsForTeam(teamId)))))
        .build());

    baseSocketService.addObserver(ctx.session,
        StateService.instance.addSubmissionCreateListener(submissionReloader, isTeamsSubmission));
    baseSocketService.addObserver(ctx.session,
        StateService.instance.addSubmissionRulingListener(submissionReloader, isTeamsSubmission));

    baseSocketService.addObserver(ctx.session,
        StateService.instance.addTeamProblemsListener(problemReloader));
  }

  @Override
  public void onDisconnect(WebSocketContext ctx) {
  }

  @Override
  protected void onMessage(WebSocketContext ctx) {
    T2SMessage t2s = ctx.req.getT2SMessage();

    switch (t2s.getValueCase()) {
      case SUBMISSIONCREATEMESSAGE: {
        try {
          if (competitionController.getCompetitionState() != CompetitionState.STARTED) {
            baseSocketService.alert(ctx.session, "You cannot submit right now!");
            break;
          }
          Submission sent = t2s.getSubmissionCreateMessage().getSubmission();
          StateService.instance.submissionCreate(ctx.profile.getId(), sent.getProblemId(), sent);
        }
        catch (HaltException haltException) {
          baseSocketService.alert(ctx.session,
              "Slow down!\n\n" +
                  "Your last submission was NOT saved. " +
                  "You must wait at least one second between submits.");
        }
        break;
      }
    }
  }
}
