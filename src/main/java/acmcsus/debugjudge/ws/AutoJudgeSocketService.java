package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.model.*;
import acmcsus.debugjudge.proto.*;
import acmcsus.debugjudge.proto.AutoJudge.AJ2SMessage.*;
import acmcsus.debugjudge.proto.Competition.*;
import com.google.inject.*;
import org.slf4j.*;

import java.io.*;

import static acmcsus.debugjudge.ctrl.MessageStores.SUBMISSION_STORE;
import static com.google.protobuf.TextFormat.shortDebugString;

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
  protected void onConnect(WebSocketContext ctx) {
    queueHandler.connected(ctx.profile, ctx.session);
    queueHandler.started(ctx.profile, ctx.session);
  }

  @Override
  protected void onDisconnect(WebSocketContext ctx) {
    queueHandler.stopped(ctx.profile);
    queueHandler.disconnected(ctx.profile, ctx.session);
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
