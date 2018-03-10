import * as Rx from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import {Problem} from './models/problem';
import {Submission} from './models/submission';
import {Profile} from './models/profile';
import {acmcsus} from "proto/debugjudge_pb";
import CompetitionState = acmcsus.debugjudge.CompetitionState;
import {JudgeApiService} from "judgeapp/judgeapi.service";
import {TeamApiService} from "teamapp/teamapi.service";

export interface ApiService {

  competitionState: Rx.BehaviorSubject<CompetitionState>;
  problems: Rx.BehaviorSubject<Problem[]>;
  profile: Rx.BehaviorSubject<Profile>;

  loggedInStatus: Rx.BehaviorSubject<boolean>;

  setJudgeApiService(judgeApiService: JudgeApiService);
  setTeamApiService(teamApiService: TeamApiService);

  getSubmission(id: number): Promise<Submission>;

  getProblems(): Promise<Problem[]>;
  getProfile(): Promise<Profile>;

  sendMessage(c2SMessage: acmcsus.debugjudge.C2SMessage): void;

}
