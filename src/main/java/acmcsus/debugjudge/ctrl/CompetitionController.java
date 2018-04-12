package acmcsus.debugjudge.ctrl;

import acmcsus.debugjudge.proto.Competition.*;
import acmcsus.debugjudge.proto.WebSocket.*;
import acmcsus.debugjudge.proto.WebSocket.S2CMessage.*;
import acmcsus.debugjudge.ws.*;
import com.google.common.base.*;
import io.reactivex.*;
import io.reactivex.Observable;
import io.reactivex.disposables.*;
import io.reactivex.functions.*;
import io.reactivex.subjects.*;

import java.time.*;
import java.util.*;
import java.util.concurrent.*;

import static acmcsus.debugjudge.ctrl.ScoreboardBroadcaster.pushScoreboard;
import static io.reactivex.Observable.combineLatest;
import static io.reactivex.Observable.interval;

public class CompetitionController {

  private static BehaviorSubject<CompetitionState> competitionState = BehaviorSubject.createDefault(CompetitionState.WAITING);

  private static Stopwatch stopwatch = Stopwatch.createUnstarted();

  static {
    addCompetitionStateObserver(state -> {
      switch (state) {
        case STARTED:
          stopwatch.start();
          break;
        case WAITING:
          stopwatch.reset();
          break;
        case PAUSED:
        case STOPPED:
          stopwatch.stop();
          break;
      }
    });
  }

  public static CompetitionState getCompetitionState() {
    return competitionState.getValue();
  }

  static {
    // TODO: Have the interval change periods depending on competition state. Stopped can be closer to 5 minutes.
    combineLatest(interval(30, TimeUnit.SECONDS), competitionState, (a, b) -> b)
        .filter((state) -> state != CompetitionState.WAITING)
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

  public static long getElapsedSeconds() {
    return stopwatch.elapsed(TimeUnit.SECONDS);
  }

}
