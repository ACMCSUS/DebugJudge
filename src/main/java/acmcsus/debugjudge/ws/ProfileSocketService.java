package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.ctrl.ScoreboardBroadcaster;
import acmcsus.debugjudge.proto.Competition;
import acmcsus.debugjudge.proto.Competition.Profile.ProfileType;
import acmcsus.debugjudge.proto.WebSocket;
import acmcsus.debugjudge.proto.WebSocket.S2CMessage.ScoreboardUpdateMessage;
import acmcsus.debugjudge.state.StateService;
import acmcsus.debugjudge.store.SubmissionStore;
import com.google.inject.Inject;
import io.reactivex.functions.Consumer;
import io.reactivex.functions.Predicate;

import java.io.IOException;
import java.util.List;

import static acmcsus.debugjudge.ws.SocketSendMessageUtil.sendMessage;

public abstract class ProfileSocketService {


  protected abstract void onConnect(WebSocketContext ctx) throws IOException;

  protected abstract void onDisconnect(WebSocketContext ctx) throws IOException;

  protected abstract void onMessage(WebSocketContext ctx) throws IOException;

  protected BaseSocketService baseSocketService;
  protected StateService stateService;
  protected SubmissionStore submissionStore;

  @Inject
  ScoreboardBroadcaster scoreboardBroadcaster;

  public ProfileSocketService(BaseSocketService baseSocketService, StateService stateService,
                              SubmissionStore submissionStore, ProfileType profileType) {
    Predicate<WebSocketContext> filter =
        ctx -> ctx.profile != null && ctx.profile.getProfileType() == profileType;

    this.baseSocketService = baseSocketService;
    this.stateService = stateService;
    this.submissionStore = submissionStore;

    baseSocketService.connectSubject.filter(filter).subscribe(this::onConnect);
    baseSocketService.disconnectSubject.filter(filter).subscribe(this::onDisconnect);
    baseSocketService.messageSubject.filter(filter).subscribe(this::onMessage);
  }

  protected void onScoreboardReceiverConnect(WebSocketContext ctx) {
    baseSocketService.addObserver(ctx.session,
        scoreboardBroadcaster.scoreboard.subscribe(
            scoreboard ->
                sendMessage(ctx.session, WebSocket.S2CMessage.newBuilder()
                    .setScoreboardUpdateMessage(ScoreboardUpdateMessage.newBuilder()
                        .setScoreboard(scoreboard))
                    .build())));
  }

  protected void onOfficialConnect(WebSocketContext ctx) throws IOException {
    Consumer<Competition.Submission> submissionReloader =
        (sub) ->
            sendMessage(ctx.session, WebSocket.S2CMessage.newBuilder()
                .setReloadSubmissionMessage(WebSocket.S2CMessage.ReloadSubmissionMessage.newBuilder()
                    .setSubmission(sub))
                .build());

    Consumer<List<Competition.Problem>> problemReloader =
        (problems) ->
            sendMessage(ctx.session, WebSocket.S2CMessage.newBuilder()
                .setReloadProblemsMessage(WebSocket.S2CMessage.ReloadProblemsMessage.newBuilder()
                    .setProblems(Competition.Problem.List.newBuilder()
                        .addAllValue(problems))).build());

    sendMessage(ctx.session, WebSocket.S2CMessage.newBuilder()
        .setReloadSubmissionsMessage(WebSocket.S2CMessage.ReloadSubmissionsMessage.newBuilder()
            .setSubmissions(Competition.Submission.List.newBuilder()
                .addAllValue(submissionStore.readAll())))
        .build());

    baseSocketService.addObserver(ctx.session,
        stateService.submissionUpdates.subscribe(submissionReloader));

    baseSocketService.addObserver(ctx.session,
        stateService.secretProblemList.subscribe(problemReloader));
  }

}
