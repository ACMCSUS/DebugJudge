package acmcsus.debugjudge.ctrl;

import acmcsus.debugjudge.proto.Competition.CompetitionState;
import acmcsus.debugjudge.proto.WebSocket.S2CMessage;
import acmcsus.debugjudge.proto.WebSocket.S2CMessage.CompetitionStateChangedMessage;
import acmcsus.debugjudge.ws.SocketHandler;
import com.sun.media.jfxmediaimpl.*;
import io.reactivex.*;
import io.reactivex.disposables.*;
import io.reactivex.functions.*;
import io.reactivex.subjects.*;

import java.time.Instant;
import java.util.concurrent.*;

import static acmcsus.debugjudge.ctrl.ScoreboardBroadcaster.pushScoreboard;

public class CompetitionController {

  private static BehaviorSubject<CompetitionState> competitionState = BehaviorSubject.createDefault(CompetitionState.WAITING);

  public static CompetitionState getCompetitionState() {
    return competitionState.getValue();
  }

  static {
    // TODO: Have the interval change periods depending on competition state. Stopped can be closer to 5 minutes.
    Observable.interval(30, TimeUnit.SECONDS)
        .filter((l) -> competitionState.getValue() != CompetitionState.WAITING)
        .subscribe((l) -> pushScoreboard());
  }

  public static void changeCompetitionState(CompetitionState state) {
    if (state != competitionState.getValue()) {
      competitionState.onNext(state);

      SocketHandler.broadcastMessage(S2CMessage.newBuilder()
        .setCompetitionStateChangedMessage(CompetitionStateChangedMessage.newBuilder()
          .setState(state)
          .setTimeMillis(Instant.now().toEpochMilli())
          .build())
        .build());
    }
  }

  public static Disposable addCompetitionStateObserver(Consumer<CompetitionState> stateConsumer) {
    return competitionState.subscribe(stateConsumer);
  }

}
