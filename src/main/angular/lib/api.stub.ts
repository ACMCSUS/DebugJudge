import {Injectable} from '@angular/core';

import * as Rx from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import {Problem} from './models/problem';
import {Submission} from './models/submission';
import {Profile} from './models/profile';
import {RxWebSocketSubject} from './api/RxWebSocketSubject';
import {ApiService} from 'lib/api.service';
import {acmcsus} from "../proto/debugjudge_pb";
import CompetitionState = acmcsus.debugjudge.CompetitionState;
import C2SMessage = acmcsus.debugjudge.C2SMessage;
import {JudgeApiService} from "../judgeapp/judgeapi.service";
import {TeamApiService} from "../teamapp/teamapi.service";

@Injectable()
export class ApiServiceStub implements ApiService {

  public competitionState: Rx.BehaviorSubject<CompetitionState>;
  public problems: Rx.BehaviorSubject<Problem[]>;
  public submissions: Rx.BehaviorSubject<Submission[]>;
  public profile: Rx.BehaviorSubject<Profile>;

  public loggedInStatus: Rx.BehaviorSubject<boolean>;

  constructor() {
    this.problems = new Rx.BehaviorSubject<Problem[]>([]);
    this.submissions = new Rx.BehaviorSubject<Submission[]>([]);
    this.profile = new Rx.BehaviorSubject<Profile>(undefined);
    this.loggedInStatus = new Rx.BehaviorSubject<boolean>(false);
  }

  setJudgeApiService(judgeApiService: JudgeApiService) {
    throw new Error("Method not implemented.");
  }

  setTeamApiService(teamApiService: TeamApiService) {
    throw new Error("Method not implemented.");
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

  sendMessage(c2SMessage: C2SMessage): void {
    throw new Error("Method not implemented.");
  }

}
