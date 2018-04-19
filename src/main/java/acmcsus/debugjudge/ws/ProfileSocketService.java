package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.ctrl.*;
import acmcsus.debugjudge.model.*;
import acmcsus.debugjudge.proto.*;
import acmcsus.debugjudge.proto.Competition.Profile.*;
import com.google.inject.*;
import io.reactivex.functions.*;

import java.io.*;
import java.util.List;

import static acmcsus.debugjudge.ctrl.MessageStores.SUBMISSION_STORE;
import static acmcsus.debugjudge.ws.SocketSendMessageUtil.sendMessage;

public abstract class ProfileSocketService {

  protected abstract void onConnect(WebSocketContext ctx) throws IOException;

  protected abstract void onDisconnect(WebSocketContext ctx) throws IOException;

  protected abstract void onMessage(WebSocketContext ctx) throws IOException;

  protected BaseSocketService baseSocketService;

  @Inject
  ScoreboardBroadcaster scoreboardBroadcaster;

  public ProfileSocketService(BaseSocketService baseSocketService, ProfileType profileType) {
    Predicate<WebSocketContext> filter =
        ctx -> ctx.profile != null && ctx.profile.getProfileType() == profileType;

    this.baseSocketService = baseSocketService;
    baseSocketService.connectSubject.filter(filter).subscribe(this::onConnect);
    baseSocketService.disconnectSubject.filter(filter).subscribe(this::onDisconnect);
    baseSocketService.messageSubject.filter(filter).subscribe(this::onMessage);
  }

  protected void onScoreboardReceiverConnect(WebSocketContext ctx) throws IOException {
    Competition.Scoreboard lastScoreboard = scoreboardBroadcaster.getLastScoreboard();
    if (lastScoreboard != null) {
      sendMessage(ctx.session, WebSocket.S2CMessage.newBuilder()
          .setScoreboardUpdateMessage(WebSocket.S2CMessage.ScoreboardUpdateMessage.newBuilder()
              .setScoreboard(lastScoreboard))
          .build());
    }
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
                .addAllValue(SUBMISSION_STORE.readAll())))
        .build());

    baseSocketService.addObserver(ctx.session,
        StateService.instance.addSubmissionCreateListener(submissionReloader));
    baseSocketService.addObserver(ctx.session,
        StateService.instance.addSubmissionRulingListener(submissionReloader));

    baseSocketService.addObserver(ctx.session,
        StateService.instance.addJudgeProblemsListener(problemReloader));
  }

}
