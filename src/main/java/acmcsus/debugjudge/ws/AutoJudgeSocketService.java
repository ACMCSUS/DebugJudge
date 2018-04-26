package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.proto.Algorithmic;
import acmcsus.debugjudge.proto.AutoJudge;
import acmcsus.debugjudge.proto.AutoJudge.AJ2SMessage.AutoJudgeResultMessage;
import acmcsus.debugjudge.proto.AutoJudge.S2AJMessage.ReloadLanguagesMessage;
import acmcsus.debugjudge.proto.Competition.Problem;
import acmcsus.debugjudge.proto.Competition.Profile;
import acmcsus.debugjudge.proto.Competition.Submission;
import acmcsus.debugjudge.proto.WebSocket;
import acmcsus.debugjudge.proto.WebSocket.S2CMessage.ReloadProblemsMessage;
import acmcsus.debugjudge.queue.AutoJudgeQueueService;
import acmcsus.debugjudge.state.AlgorithmicStateService;
import acmcsus.debugjudge.state.StateService;
import acmcsus.debugjudge.store.SubmissionStore;
import com.google.inject.Inject;
import com.google.inject.Singleton;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;

import static acmcsus.debugjudge.ws.SocketSendMessageUtil.sendMessage;
import static com.google.protobuf.TextFormat.shortDebugString;

@Singleton
public class AutoJudgeSocketService extends ProfileSocketService {

  private static Logger logger = LoggerFactory.getLogger(AutoJudgeSocketService.class);

  private final AlgorithmicStateService algoStateService;
  private final AutoJudgeQueueService queueHandler;

  @Inject
  AutoJudgeSocketService(BaseSocketService baseSocketService,
                         StateService stateService,
                         AlgorithmicStateService algoStateService,
                         AutoJudgeQueueService autoJudgeQueueService,
                         SubmissionStore submissionStore) {
    super(baseSocketService, stateService, submissionStore, Profile.ProfileType.AUTO_JUDGE);
    this.algoStateService = algoStateService;
    this.queueHandler = autoJudgeQueueService;
  }

  @Override
  protected void onConnect(WebSocketContext ctx) throws IOException {
    baseSocketService.addObserver(ctx.session,
        stateService.secretProblemList.skip(1).subscribe(
            (problems) -> sendMessage(ctx.session,
                WebSocket.S2CMessage.newBuilder()
                    .setReloadProblemsMessage(ReloadProblemsMessage.newBuilder()
                        .setProblems(Problem.List.newBuilder().addAllValue(problems)))
                    .build())));

    sendMessage(ctx.session, WebSocket.S2CMessage.newBuilder()
        .setReloadProblemsMessage(ReloadProblemsMessage.newBuilder()
            .setProblems(Problem.List.newBuilder()
                .addAllValue(stateService.secretProblemList.blockingFirst())))
        .build());

    sendMessage(ctx.session, WebSocket.S2CMessage.newBuilder()
        .setS2AjMessage(AutoJudge.S2AJMessage.newBuilder()
            .setReloadLanguagesMessage(ReloadLanguagesMessage.newBuilder()
                .setValue(Algorithmic.ProgrammingLanguage.List.newBuilder()
                    .addAllLanguage(algoStateService.languageList.blockingFirst()))))
        .build());

    // TODO: This is horrible, but works for now.
    try {
      Thread.sleep(1000);
      queueHandler.connected(ctx.profile, ctx.session);
      queueHandler.started(ctx.profile, ctx.session);
    } catch (Exception e) {}
  }

  @Override
  protected void onDisconnect(WebSocketContext ctx) {
    queueHandler.stopped(ctx.session);
    queueHandler.disconnected(ctx.session);
  }

  @Override
  protected void onMessage(WebSocketContext ctx) {
    AutoJudge.AJ2SMessage a2SMessage = ctx.req.getAj2SMessage();

    switch (a2SMessage.getValueCase()) {
      case SUBMISSIONJUDGEMENTMESSAGE: {
        AutoJudgeResultMessage result = a2SMessage.getSubmissionJudgementMessage();
        try {
          Submission.Builder submissionBuilder = Submission.newBuilder(
              submissionStore.readFromPath(
                  submissionStore.pathForIds(
                      result.getTeamId(), result.getProblemId(), result.getSubmissionId())));

          submissionBuilder.getAlgorithmicSubmissionBuilder()
              .setCompileResult(result.getCompileResult())
              .putAllCaseResults(result.getCaseResultsMap())
              .setPreliminaryJudgement(result.getPreliminaryJudgement())
              .setPreliminaryJudgementMessage(result.getPreliminaryJudgementMessage());

          Submission submission = submissionBuilder.build();

          queueHandler.removeSubmission(submission);
          stateService.submissionUpdated(submission);
        }
        catch (IOException e) {
          logger.error("could not process executed submission " + shortDebugString(result));
        }
        break;
      }
      default: {
        logger.error("WS: Backend does not recognize AJ2SMessage: {}", a2SMessage.getValueCase());
      }
    }
  }
}
