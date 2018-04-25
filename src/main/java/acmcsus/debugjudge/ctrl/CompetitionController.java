package acmcsus.debugjudge.ctrl;

import acmcsus.debugjudge.proto.Competition.CompetitionState;
import acmcsus.debugjudge.proto.WebSocket.S2CMessage;
import acmcsus.debugjudge.proto.WebSocket.S2CMessage.CompetitionStateChangedMessage;
import acmcsus.debugjudge.ws.BaseSocketService;
import com.google.common.base.Stopwatch;
import com.google.inject.Inject;
import com.google.inject.Singleton;
import io.reactivex.Observable;
import io.reactivex.disposables.Disposable;
import io.reactivex.functions.Consumer;
import io.reactivex.subjects.BehaviorSubject;

import java.time.Instant;
import java.util.concurrent.TimeUnit;

import static io.reactivex.Observable.combineLatest;
import static io.reactivex.Observable.interval;
import static io.reactivex.Observable.wrap;

@Singleton
public class CompetitionController {

  private BehaviorSubject<CompetitionState> competitionStateSubject = BehaviorSubject.createDefault(CompetitionState.WAITING);
  public Observable<CompetitionState> competitionState = wrap(competitionStateSubject);
  private Stopwatch stopwatch = Stopwatch.createUnstarted();

  public CompetitionState getCompetitionState() {
    return competitionStateSubject.getValue();
  }

  private BaseSocketService socketService;

  @Inject
  CompetitionController(BaseSocketService socketService) {
    this.socketService = socketService;

    competitionState.subscribe(state -> {
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

  public void changeCompetitionState(CompetitionState state) {
    if (state != competitionStateSubject.getValue()) {
      competitionStateSubject.onNext(state);

      socketService.broadcastMessage(S2CMessage.newBuilder()
          .setCompetitionStateChangedMessage(CompetitionStateChangedMessage.newBuilder()
              .setState(state)
              .setTimeMillis(Instant.now().toEpochMilli())
              .build())
          .build());
    }
  }

  public long getElapsedSeconds() {
    long ret = stopwatch.elapsed(TimeUnit.SECONDS);
    return ret;
  }

}
