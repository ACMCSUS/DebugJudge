package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.ctrl.CompetitionController;
import acmcsus.debugjudge.proto.Competition.CompetitionState;
import acmcsus.debugjudge.proto.Competition.Problem;
import acmcsus.debugjudge.proto.Competition.Profile;
import acmcsus.debugjudge.proto.Competition.Submission;
import acmcsus.debugjudge.proto.Team.T2SMessage;
import acmcsus.debugjudge.proto.WebSocket.S2CMessage;
import acmcsus.debugjudge.proto.WebSocket.S2CMessage.ReloadProblemsMessage;
import acmcsus.debugjudge.proto.WebSocket.S2CMessage.ReloadSubmissionMessage;
import acmcsus.debugjudge.proto.WebSocket.S2CMessage.ReloadSubmissionsMessage;
import acmcsus.debugjudge.state.StateService;
import acmcsus.debugjudge.store.SubmissionStore;
import com.google.inject.Inject;
import com.google.inject.Singleton;
import io.reactivex.functions.Consumer;
import io.reactivex.functions.Predicate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import spark.HaltException;

import java.io.IOException;
import java.util.List;

import static acmcsus.debugjudge.ws.SocketSendMessageUtil.sendMessage;

@Singleton
public class TeamSocketService extends ProfileSocketService {

  private static Logger logger = LoggerFactory.getLogger(TeamSocketService.class);

  private CompetitionController competitionController;

  @Inject
  public TeamSocketService(BaseSocketService baseSocketService, StateService stateService,
                           CompetitionController competitionController,
                           SubmissionStore submissionStore) {
    super(baseSocketService, stateService, submissionStore, Profile.ProfileType.TEAM);
    this.competitionController = competitionController;
  }

  @Override
  public void onConnect(WebSocketContext ctx) throws IOException {
    final long teamId = ctx.profile.getId();
    onScoreboardReceiverConnect(ctx);
    onClarificationReceiverConnect(ctx);

    Consumer<Submission> submissionReloader =
        (sub) -> {
          try {
            sub = submissionStore.clearProtectedFields(sub);

            sendMessage(ctx.session, S2CMessage.newBuilder()
                .setReloadSubmissionMessage(ReloadSubmissionMessage.newBuilder()
                    .setSubmission(sub))
                .build());
          }
          catch (IOException e) {
            logger.error("error reloading submission of team", e);
          }
        };

    Consumer<List<Problem>> problemReloader =
        (problems) -> sendMessage(ctx.session, S2CMessage.newBuilder()
            .setReloadProblemsMessage(ReloadProblemsMessage.newBuilder()
                .setProblems(Problem.List.newBuilder().addAllValue(problems))).build());

    Predicate<Submission> isTeamsSubmission = (sub) -> sub.getTeamId() == teamId;

    sendMessage(ctx.session, S2CMessage.newBuilder()
        .setReloadSubmissionsMessage(ReloadSubmissionsMessage.newBuilder()
            .setSubmissions(Submission.List.newBuilder()
                .addAllValue(submissionStore.readAll(submissionStore.getPathsForTeam(teamId)))))
        .build());

    baseSocketService.addObserver(ctx.session, stateService.submissionUpdates
        .filter(isTeamsSubmission)
        .subscribe(submissionReloader));

    baseSocketService.addObserver(ctx.session, stateService.publicProblemList
        .subscribe(problemReloader));
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
          stateService.submissionCreate(ctx.profile.getId(), sent.getProblemId(), sent);
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
