import {Injectable} from '@angular/core';

import * as Rx from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import {Problem} from './models/problem';
import {Submission} from './models/submission';
import {Profile} from './models/profile';
import {JudgingApi} from './api/jdg.api';
import {RxWebSocketSubject} from './api/RxWebSocketSubject';
import {ApiService} from 'lib/api.service';

@Injectable()
export class ApiServiceStub implements ApiService {

  public theProfile : Profile;
  public problems: Rx.BehaviorSubject<Problem[]>;
  public submissions: Rx.BehaviorSubject<Submission[]>;
  public profile: Rx.BehaviorSubject<Profile>;

  private socket: RxWebSocketSubject<any>;

  public judgingApi: JudgingApi;
  public loggedInStatus: Rx.BehaviorSubject<boolean>;

  constructor() {
    this.problems = new Rx.BehaviorSubject<Problem[]>([]);
    this.submissions = new Rx.BehaviorSubject<Submission[]>([]);
    this.profile = new Rx.BehaviorSubject<Profile>(undefined);
    this.loggedInStatus = new Rx.BehaviorSubject<boolean>(false);
    this.judgingApi = new JudgingApi(this, this.socket);
  }

  public getSubmission(id: number): Promise<Submission> {
    return {

    }[id];
  }

  public getSubmissions(): Promise<Submission[]> {
    return new Promise(() => this.submissions.getValue());
  }

  public getProblems(): Promise<Problem[]> {
    return new Promise(() => this.problems.getValue());
  }

  public getProfile(): Promise<Profile> {
    return new Promise(() => this.profile);
  }

  public submit(problem: Problem, code: String) {
    alert('Submitted: ' + JSON.stringify(problem))
  }

  public accept(submission: Submission) {
    alert('Accepted: ' + JSON.stringify(submission))
  }

  public reject(submission: Submission) {
    alert('Reject: ' + JSON.stringify(submission))
  }
}
