import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ApiWebSocketService} from './api-ws.service';
import {acmcsus} from './proto/dbgjdg_pb';
import {Observable} from 'rxjs/Observable';
import Submission = acmcsus.debugjudge.Submission;
import Problem = acmcsus.debugjudge.Problem;
import C2SMessage = acmcsus.debugjudge.C2SMessage;
import JudgingStatusMessage = acmcsus.debugjudge.S2JMessage.JudgingStatusMessage;
import SubmissionJudgement = acmcsus.debugjudge.SubmissionJudgement;

export interface ApiJudgeService {

  judgingStatus: Observable<JudgingStatusMessage>;
  problems: Observable<Problem[]>;
  assignedSubmission: Observable<Submission>;

  startJudging();
  stopJudging();

  updatePreferences(problemWhitelist: {}): void;
  submitJudgement(submission: Submission, judgement: SubmissionJudgement): void;
}

@Injectable()
export class ApiJudgeServiceImpl implements ApiJudgeService {

  judgingStatus: BehaviorSubject<JudgingStatusMessage>;
  problems: BehaviorSubject<Problem[]>;
  assignedSubmission: BehaviorSubject<Submission>;

  constructor(@Inject('ApiWebSocketService') private apiWs: ApiWebSocketService) {
    this.problems = new BehaviorSubject<Problem[]>([]);
    this.assignedSubmission = new BehaviorSubject<Submission>(null);
    this.judgingStatus = new BehaviorSubject<JudgingStatusMessage>(JudgingStatusMessage.create());

    this.apiWs.s2cMessages.subscribe((s2c) => {
      if (s2c.value == "reloadProblemsMessage") {
        this.problems.next(
            s2c.reloadProblemsMessage.problems.value.map(Problem.create));
      }
    });

    this.apiWs.s2jMessages.subscribe((s2j) => {
      switch (s2j.value) {
        case 'assignedSubmissionMessage':
          this.assignedSubmission.next(Submission.create(s2j.assignedSubmissionMessage.submission));
          console.log(this.assignedSubmission.getValue());
          break;
        case 'judgingStatus':
          this.judgingStatus.next(JudgingStatusMessage.create(s2j.judgingStatus));
          break;

      }
    });
  }

  public startJudging(): void {
    this.apiWs.sendMessage(C2SMessage.create({
      j2sMessage: {
        startJudgingMessage: {}
      }
    }));
  }

  public stopJudging(): void {
    this.apiWs.sendMessage(C2SMessage.create({
      j2sMessage: {
        stopJudgingMessage: {}
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

  public submitJudgement(submission: Submission, judgement: SubmissionJudgement): void {
    this.apiWs.sendMessage(C2SMessage.create({
      j2sMessage: {
        submissionJudgementMessage: {
          teamId: submission.teamId,
          problemId: submission.problemId,
          submissionId: submission.submissionTimeSeconds,
          ruling: judgement,
        }
      }
    }));
  }

}
