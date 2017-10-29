import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';

import * as Rx from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import {Problem} from './models/problem';
import {Submission} from './models/submission';
import {Observable} from 'rxjs/Rx';
import {Profile} from './models/profile';
import {JudgingApi} from './api/jdg.api';
import {RxWebSocketSubject} from './api/RxWebSocketSubject';
// import {BehaviorSubject} from '@reactivex/rxjs';

export interface ApiService {

  problems: Rx.BehaviorSubject<Problem[]>;
  submissions: Rx.BehaviorSubject<Submission[]>;
  profile: Rx.BehaviorSubject<Profile>;

  judgingApi: JudgingApi;
  loggedInStatus: Rx.BehaviorSubject<boolean>;

  getSubmission(id: number): Promise<Submission>;
  getSubmissions(): Promise<Submission[]>;

  getProblems(): Promise<Problem[]>;
  getProfile(): Promise<Profile>

  submit(problem: Problem, code: String);

  accept(submission: Submission);
  reject(submission: Submission);

}
