import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ApiWebSocketService} from './api-ws.service';
import {acmcsus} from './proto/dbgjdg_pb';
import Submission = acmcsus.debugjudge.Submission;
import Problem = acmcsus.debugjudge.Problem;
import {Observable} from 'rxjs/Observable';

export interface ApiJudgeService {

  problems: Observable<Problem[]>;
  assignedSubmission: Observable<Submission>;

}

@Injectable()
export class ApiJudgeServiceImpl implements ApiJudgeService {

  problems: BehaviorSubject<Problem[]>;
  assignedSubmission: BehaviorSubject<Submission>;

  constructor(@Inject('ApiWebSocketService') private apiWs: ApiWebSocketService) {
    this.problems = new BehaviorSubject<Problem[]>([]);
    this.assignedSubmission = new BehaviorSubject<Submission>(null);

    this.apiWs.s2jMessages.subscribe((s2j) => {
      switch (s2j.value) {
        case 'assignedSubmissionMessage':
          this.assignedSubmission.next(Submission.create(s2j.assignedSubmissionMessage.submission));
          break;
        case 
      }
    });
  }

}
