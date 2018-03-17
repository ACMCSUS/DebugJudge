import {Inject, Injectable} from "@angular/core";
import * as Rx from "rxjs/Rx";

import {ApiServiceImpl} from "lib/api.impl";
import {Submission} from "lib/models/submission";
import {acmcsus} from "../proto/debugjudge_pb";
import {ApiService} from "../lib/api.service";
import {JudgeApiService} from "./judgeapi.service";
import C2SMessage = acmcsus.debugjudge.C2SMessage;
import SubmissionJudgement = acmcsus.debugjudge.SubmissionJudgement;
import S2JMessage = acmcsus.debugjudge.S2CMessage.S2JMessage;

@Injectable()
export class JudgeApiServiceImpl implements JudgeApiService {

  private static connectingMessage = 'Connecting...';
  private static waitingMessage = 'Waiting for submission...';

  public submission: Rx.BehaviorSubject<Submission>;
  public statusMessage: Rx.BehaviorSubject<string>;

  public connectionSubscription: Rx.Subscription;
  private sessionSubscription: Rx.Subscription = null;

  constructor(@Inject('ApiService') private apiService: ApiService) {
    this.submission = new Rx.BehaviorSubject(undefined);
    this.statusMessage = new Rx.BehaviorSubject(JudgeApiServiceImpl.connectingMessage);
    this.connectionSubscription = null;
    this.apiService.setJudgeApiService(this);
  }

  public startSession() {
    if (this.connectionSubscription !== null || this.sessionSubscription !== null) {
      throw new Error('Judging session already in progress!');
    }

    this.connectionSubscription = this.apiService.loggedInStatus
      .subscribe((connected) => {
        console.log('Connection Status:', connected);
        if (connected) {
          this.apiService.sendMessage(C2SMessage.create({
            j2sMessage: {
              startJudgingMessage: {}
            }
          }));
          this.statusMessage.next(JudgeApiServiceImpl.waitingMessage);
        }
        else {
          this.submission.next(undefined);
          this.statusMessage.next(JudgeApiServiceImpl.connectingMessage);
        }
      });
  }

  public stopSession() {
    if (this.connectionSubscription) {
      this.connectionSubscription.unsubscribe();
    }
    if (this.sessionSubscription) {
      this.sessionSubscription.unsubscribe();
    }

    this.submission.next(undefined);
    this.statusMessage.next('Judging Session Ended');

    this.connectionSubscription = null;
    this.sessionSubscription = null;

    this.apiService.sendMessage(C2SMessage.create({
      j2sMessage: {
        stopJudgingMessage: {}
      }
    }));
  }

  public handleMessage(msg: S2JMessage) {
    switch (msg.value) {
      case "assignedSubmissionMessage": {
        // Hack using oneof to give "optional" support to a scalar int64.
        if ((<S2JMessage.AssignedSubmissionMessage>msg.assignedSubmissionMessage).value) {
          this.setSubmissionById(<number>msg.assignedSubmissionMessage.submissionId);
        }
        else {
          this.submission.next(undefined);
        }
        break;
      }
      case "kickMessage": {
        this.submission.next(undefined);
        this.statusMessage.next(msg.kickMessage.message || 'Kicked!');
        break;
      }
      default: {
        console.error("WS: Don't know how to handle S2JMessage: " + msg.value);
      }
    }
  }

  private setSubmissionById(id: number) {
    this.apiService.getSubmission(id)
      .then((submission: Submission) => this.submission.next(submission));
  }

  public defer(submission: Submission) {
    this.apiService.sendMessage(C2SMessage.create({
      j2sMessage: {
        submissionJudgementMessage: {
          submissionId: submission.id,
          ruling: SubmissionJudgement.DEFERRED,
        }
      }
    }));
  }

  public preferences(problemPreferences: {}) {
    this.apiService.sendMessage(C2SMessage.create({
      j2sMessage: {
        judgingPreferencesMessage: {
          preferences: problemPreferences,
        }
      }
    }));
  }

  public accept(submission: Submission) {
    this.apiService.sendMessage(C2SMessage.create({
      j2sMessage: {
        submissionJudgementMessage: {
          submissionId: submission.id,
          ruling: SubmissionJudgement.SUCCESS,
        }
      }
    }));
  }

  public reject(submission: Submission) {
    this.apiService.sendMessage(C2SMessage.create({
      j2sMessage: {
        submissionJudgementMessage: {
          submissionId: submission.id,
          ruling: SubmissionJudgement.FAILURE,
        }
      }
    }));
  }
}
