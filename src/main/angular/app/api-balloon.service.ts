import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ApiWebSocketService} from './api-ws.service';
import {acmcsus} from './proto/dbgjdg_pb';
import {Observable} from 'rxjs/Observable';
import Submission = acmcsus.debugjudge.Submission;
import Problem = acmcsus.debugjudge.Problem;
import C2SMessage = acmcsus.debugjudge.C2SMessage;
import BalloonRunningStatusMessage = acmcsus.debugjudge.S2BMessage.BalloonRunningStatusMessage;
import AssignedDeliveryMessage = acmcsus.debugjudge.S2BMessage.AssignedDeliveryMessage;

export interface ApiBalloonService {

  runningStatus: Observable<BalloonRunningStatusMessage>;
  problems: Observable<Problem[]>;
  assignedDelivery: Observable<AssignedDeliveryMessage>;

  startRunning();
  stopRunning();

  balloonDelivered(delivery: AssignedDeliveryMessage): void;
}

@Injectable()
export class ApiBalloonServiceImpl implements ApiBalloonService {

  runningStatus: BehaviorSubject<BalloonRunningStatusMessage>;
  problems: BehaviorSubject<Problem[]>;
  assignedDelivery: BehaviorSubject<AssignedDeliveryMessage>;

  constructor(@Inject('ApiWebSocketService') private apiWs: ApiWebSocketService) {
    this.problems = new BehaviorSubject<Problem[]>([]);
    this.assignedDelivery = new BehaviorSubject<AssignedDeliveryMessage>(null);
    this.runningStatus = new BehaviorSubject<BalloonRunningStatusMessage>(
      BalloonRunningStatusMessage.create());

    this.apiWs.s2cMessages.subscribe((s2c) => {
      if (s2c.value == "reloadProblemsMessage") {
        this.problems.next(
            s2c.reloadProblemsMessage.problems.value.map(Problem.create));
      }
    });

    this.apiWs.s2bMessages.subscribe((s2b) => {
      switch (s2b.value) {
        case 'assignedDeliveryMessage':
          this.assignedDelivery.next(AssignedDeliveryMessage.create(s2b.assignedDeliveryMessage));
          console.log(this.assignedDelivery.getValue());
          break;
        case 'runningStatus':
          this.runningStatus.next(BalloonRunningStatusMessage.create(s2b.runningStatus));
          break;

      }
    });
  }

  public startRunning(): void {
    this.apiWs.sendMessage(C2SMessage.create({
      b2sMessage: {
        startRunningMessage: {}
      }
    }));
  }

  public stopRunning(): void {
    this.apiWs.sendMessage(C2SMessage.create({
      b2sMessage: {
        stopRunningMessage: {}
      }
    }));
  }

  public updatePreferences(problemWhitelist: {}): void {
    console.log(problemWhitelist);

    this.apiWs.sendMessage(C2SMessage.create({
      j2sMessage: {
        judgingPreferencesMessage: {
          preferences: problemWhitelist,
        }
      }
    }));
  }

  public balloonDelivered(delivery: AssignedDeliveryMessage): void {
    this.apiWs.sendMessage(C2SMessage.create({
      b2sMessage: {
        balloonDeliveredMessage: {
          teamId: delivery.teamId,
          problemId: delivery.problemId,
        }
      }
    }));
  }

}
