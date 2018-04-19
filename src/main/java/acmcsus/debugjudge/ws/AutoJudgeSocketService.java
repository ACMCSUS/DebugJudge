package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.model.*;
import acmcsus.debugjudge.proto.*;
import acmcsus.debugjudge.proto.AutoJudge.AJ2SMessage.*;
import acmcsus.debugjudge.proto.AutoJudge.S2AJMessage.*;
import acmcsus.debugjudge.proto.Competition.*;
import acmcsus.debugjudge.proto.WebSocket.S2CMessage.*;
import com.google.inject.*;
import com.google.protobuf.*;
import org.slf4j.*;

import java.io.*;
import java.util.concurrent.*;

import static acmcsus.debugjudge.ctrl.MessageStores.PROBLEM_STORE;
import static acmcsus.debugjudge.ctrl.MessageStores.SUBMISSION_STORE;
import static acmcsus.debugjudge.ws.SocketSendMessageUtil.sendMessage;
import static acmcsus.debugjudge.ws.SocketSendMessageUtil.sendMessageByFuture;
import static com.google.protobuf.TextFormat.shortDebugString;
import static java.util.concurrent.CompletableFuture.completedFuture;

@Singleton
public class AutoJudgeSocketService extends ProfileSocketService {

  private static Logger logger = LoggerFactory.getLogger(AutoJudgeSocketService.class);

  @Inject
  public AutoJudgeQueueService queueHandler;

  @Inject
  AutoJudgeSocketService(BaseSocketService baseSocketService,
                         AutoJudgeQueueService autoJudgeQueueService) {
    super(baseSocketService, Profile.ProfileType.AUTO_JUDGE);
    this.queueHandler = autoJudgeQueueService;
  }

  @Override
  protected void onConnect(WebSocketContext ctx) throws IOException {
    queueHandler.connected(ctx.profile, ctx.session);

    baseSocketService.addObserver(ctx.session,
        StateService.instance.addJudgeProblemsListener(
            (problems) -> sendMessage(ctx.session,
                WebSocket.S2CMessage.newBuilder()
                    .setReloadProblemsMessage(ReloadProblemsMessage.newBuilder()
                        .setProblems(Problem.List.newBuilder().addAllValue(problems))).build())));

    Algorithmic.ProgrammingLanguage.List.Builder langs = Algorithmic.ProgrammingLanguage.List.newBuilder();
    TextFormat.merge(new FileReader("data/languages.textproto"), langs);

    Future<Void> problemsSent = sendMessageByFuture(ctx.session,
        WebSocket.S2CMessage.newBuilder()
            .setReloadProblemsMessage(ReloadProblemsMessage.newBuilder()
                .setProblems(Problem.List.newBuilder()
                    .addAllValue(StateService.instance.getProblems()))).build());

    Future<Void> languagesSent = sendMessageByFuture(ctx.session,
        WebSocket.S2CMessage.newBuilder()
            .setS2AjMessage(AutoJudge.S2AJMessage.newBuilder()
                .setReloadLanguagesMessage(ReloadLanguagesMessage.newBuilder()
                    .setValue(langs))).build());

    CompletableFuture.allOf(completedFuture(problemsSent), completedFuture(languagesSent))
        .thenRunAsync(() -> queueHandler.started(ctx.profile, ctx.session));
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
              SUBMISSION_STORE.readFromPath(
                  SUBMISSION_STORE.pathForIds(
                      result.getTeamId(), result.getProblemId(), result.getSubmissionId())));

          submissionBuilder.getAlgorithmicSubmissionBuilder()
              .setCompileResult(result.getCompileResult())
              .putAllCaseResults(result.getCaseResultsMap())
              .setPreliminaryJudgement(result.getPreliminaryJudgement())
              .setPreliminaryJudgementMessage(result.getPreliminaryJudgementMessage());

          Submission submission = submissionBuilder.build();

          queueHandler.judged(submission);
          StateService.instance.submissionExecuted(submission);
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
