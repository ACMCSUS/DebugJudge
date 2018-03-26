package acmcsus.debugjudge.ctrl;

import acmcsus.debugjudge.proto.Competition.CompetitionState;
import acmcsus.debugjudge.proto.WebSocket.S2CMessage;
import acmcsus.debugjudge.proto.WebSocket.S2CMessage.CompetitionStateChangedMessage;
import acmcsus.debugjudge.ws.SocketHandler;
import java.time.Instant;

public class CompetitionController {

  private static CompetitionState competitionState = CompetitionState.WAITING;

  public static CompetitionState getCompetitionState() {
    return competitionState;
  }

  public static void changeCompetitionState(CompetitionState state) {
    if (state != competitionState) {
      competitionState = state;

      SocketHandler.broadcastMessage(S2CMessage.newBuilder()
        .setCompetitionStateChangedMessage(CompetitionStateChangedMessage.newBuilder()
          .setState(state)
          .setTimeMillis(Instant.now().toEpochMilli())
          .build())
        .build());
    }
  }

}
