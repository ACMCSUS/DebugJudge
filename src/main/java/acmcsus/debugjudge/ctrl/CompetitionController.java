package acmcsus.debugjudge.ctrl;

import acmcsus.debugjudge.proto.Admin.A2SMessage.SetSchedulingMessage;
import acmcsus.debugjudge.proto.Admin.A2SMessage.SetSchedulingMessage.ScheduleEvent;
import acmcsus.debugjudge.proto.Competition.CompetitionState;
import acmcsus.debugjudge.proto.WebSocket.S2CMessage.CompetitionStateChangedMessage;
import acmcsus.debugjudge.ws.BaseSocketService;
import com.google.common.base.Stopwatch;
import com.google.inject.Inject;
import com.google.inject.Singleton;
import io.reactivex.Observable;
import io.reactivex.subjects.BehaviorSubject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import static acmcsus.debugjudge.store.SchedulingStore.getScheduling;
import static acmcsus.debugjudge.store.SchedulingStore.save;
import static io.reactivex.Observable.wrap;
import static java.time.Instant.now;
import static java.util.Comparator.comparing;

@Singleton
public class CompetitionController {

  private static final Logger logger = LoggerFactory.getLogger(CompetitionController.class);

  private BehaviorSubject<CompetitionStateChangedMessage> competitionStateSubject = BehaviorSubject.createDefault(
      CompetitionStateChangedMessage.newBuilder()
          .setState(CompetitionState.WAITING)
          .setTimeMillis(now().getEpochSecond())
          .build());
  public Observable<CompetitionStateChangedMessage> competitionState = wrap(competitionStateSubject);

  private List<ScheduleEvent> eventList = null;

  private Stopwatch stopwatch = Stopwatch.createUnstarted();

  public CompetitionState getCompetitionState() {
    return competitionStateSubject.getValue().getState();
  }
  public CompetitionStateChangedMessage getCompetitionStateChange() {
    return competitionStateSubject.getValue();
  }

  private BaseSocketService socketService;

  @Inject
  CompetitionController(BaseSocketService socketService) {
    this.socketService = socketService;

    competitionState.subscribe(stateChange -> {
      switch (stateChange.getState()) {
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

    readSchedule();
  }

  private void readSchedule() {
    try {
      SetSchedulingMessage schedule = getScheduling();
      updateSchedule(schedule.getEventList());
    } catch (Exception e) {
      logger.error("error reading schedule", e);
    }
  }

  public void changeCompetitionState(CompetitionState state) {
    if (state != competitionStateSubject.getValue().getState()) {
      competitionStateSubject.onNext(CompetitionStateChangedMessage.newBuilder()
          .setState(state)
          .setTimeMillis(now().toEpochMilli())
          .setCompetitionSeconds(getElapsedSeconds())
          .build());
//
//      socketService.broadcastMessage(S2CMessage.newBuilder()
//          .setCompetitionStateChangedMessage(CompetitionStateChangedMessage.newBuilder()
//              .setState(state)
//              .setTimeMillis(Instant.now().toEpochMilli())
//              .setCompetitionSeconds(getElapsedSeconds())
//              .build())
//          .build());
    }
  }

  public int getElapsedSeconds() {
    int ret = (int) stopwatch.elapsed(TimeUnit.SECONDS);
    return ret;
  }

  public void updateSchedule(List<ScheduleEvent> eventList) {
    eventList = new ArrayList<>(eventList);
    eventList.sort(comparing(ScheduleEvent::getTimeMillis));

    if (!eventList.isEmpty()) {
      long currentTime = now().toEpochMilli();
      ScheduleEvent mostRecentEvent = null;

      for (ScheduleEvent event : eventList) {
        if (event.getTimeMillis() <= currentTime) {
          mostRecentEvent = event;
        }
        else {
          break;
        }
      }

      if (mostRecentEvent != null) {
        changeCompetitionState(mostRecentEvent.getState());
      }
    }

    try {
      save(SetSchedulingMessage.newBuilder().addAllEvent(eventList).build());
    } catch (Exception ioe) {
      logger.error("error saving schedule", ioe);
    }

  }

//  public int getFrozenMillis() {
//    if (startTime == 0) {
//      return 0;
//    }
//
//    long timeSinceStart = Instant.now().toEpochMilli() - startTime;
//    long elapsed = stopwatch.elapsed(TimeUnit.MILLISECONDS);
//    return (int) (timeSinceStart - elapsed);
//  }
//
//  public void updateSchedule(List<ScheduleEvent> eventList) {
//  }
}
