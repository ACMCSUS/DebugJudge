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
import {ApiService} from 'lib/api.service';
// import {BehaviorSubject} from '@reactivex/rxjs';

import * as pb from 'proto/debugjudge_pb';
import {WebSocketSubject, WebSocketSubjectConfig} from "rxjs/observable/dom/WebSocketSubject";

import {acmcsus} from "../proto/debugjudge_pb";
import C2SMessage = acmcsus.debugjudge.C2SMessage;
import S2CMessage = acmcsus.debugjudge.S2CMessage;
import {NextObserver} from "rxjs/Observer";

@Injectable()
export class ApiServiceImpl implements ApiService {

  private nonceUrl = '/ws/nonce';
  private wsUrl = 'ws://' + window.location.host + '/ws/connect';

  public problems: Rx.BehaviorSubject<Problem[]>;
  public submissions: Rx.BehaviorSubject<Submission[]>;
  public profile: Rx.BehaviorSubject<Profile>;

  private socket: WebSocketSubject<S2CMessage>;

  public judgingApi: JudgingApi;
  public loggedInStatus: Rx.BehaviorSubject<boolean>;


  private static extractDataArray(res: Response): any[] {
    const body = res.json();
    return body || [];
  }

  private static extractData(res: Response): any {
    const body = res.json();
    return body || {};
  }

  private static handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      console.error(error.text());
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    }
    else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    console.log(error);
    return Observable.throw(errMsg);
  }

  public static arraysEqual(a: any[], b: any[]): boolean {
    if (a === b) {
      return true;
    }
    if (a == null || b == null) {
      return false;
    }
    if (a.length !== b.length) {
      return false;
    }

    for (let i = 0; i < a.length; ++i) {
      if (JSON.stringify(a[i]) !== JSON.stringify(b[i])) {
        return false;
      }
    }
    return true;
  }

  constructor(private http: Http) {
    this.problems = new Rx.BehaviorSubject<Problem[]>([]);
    this.submissions = new Rx.BehaviorSubject<Submission[]>([]);
    this.profile = new Rx.BehaviorSubject<Profile>(undefined);

    let socketConfig : WebSocketSubjectConfig;
    socketConfig = {
      url: this.wsUrl,
      binaryType: "arraybuffer",
    };
    socketConfig.resultSelector = (e: MessageEvent) => {
      // I am the greatest hacker. Rxjs has a weird type check that this bypasses.
      return S2CMessage.decode.apply(this, [new Uint8Array(e.data).subarray(0)]);
    };
    socketConfig.openObserver = {
      next: (event: Event) => {
        this.http.get(this.nonceUrl).forEach((response) => {
          let msg = C2SMessage.create({
            loginMessage: {
              nonce: response.text()
            }
          });
          this.socket.socket.send(C2SMessage.encode(msg).finish());
        })
      }
    };
    this.socket = new WebSocketSubject<S2CMessage>(socketConfig);

    this.loggedInStatus = new Rx.BehaviorSubject<boolean>(false);
    this.setUpSocket();

    // this.judgingApi = new JudgingApi(this, this.socket);

    this.socket.subscribe();
  }

  private setUpSocket() {
    this.socket.subscribe(msg => {
      switch (msg.value) {
        case('debugMessage'): {
          console.debug('WS_DBG:', msg.debugMessage.message);
          break;
        }
        case('alertMessage'): {
          alert(msg.alertMessage.message);
          break;
        }
        case ('loginResultMessage'): {
          if (msg.loginResultMessage.value == S2CMessage.LoginResultMessage.LoginResult.SUCCESS) {
            this.loggedInStatus.next(true);
          }
          else {
            this.loggedInStatus.next(false);
          }
          break;
        }
        default: {
          console.error("WS: I didn't know how to act on msg:", msg.value,
            "Either this message is not supported in frontend or someone forgot a 'break'.");
        }
      }
    });

    // this.socket.asObservable()
    //   .filter(msg => msg.who === 'alert')
    //   .subscribe(msg => alert(msg.data));
    //
    // this.socket.asObservable()
    //   .filter(msg => msg.who === 'api' && msg.what === 'rld-submissions')
    //   .subscribe((msg) => {
    //     console.log('I should reload my submissions:', msg);
    //     this.getSubmissions()
    //       .then((submissions) => this.submissions.next(submissions));
    //   });
    this.getSubmissions()
      .then((submissions) => this.submissions.next(submissions));
    //
    // this.socket.asObservable()
    //   .filter(msg => msg.who === 'api' && msg.what === 'rld-problems')
    //   .subscribe((msg) => {
    //     console.log('I should reload my problems:', msg);
    //     this.getProblems()
    //       .then((problems) => this.problems.next(problems));
    //   });
    this.getProblems()
      .then((problems) => this.problems.next(problems));
    //
    // this.socket.asObservable()
    //   .filter(msg => msg.who === 'api' && msg.what === 'rld-profile')
    //   .subscribe((msg) => {
    //     this.getProfile()
    //       .then((profile) => this.profile.next(profile));
    //   });
    this.getProfile()
      .then((profile) => this.profile.next(profile));
  }


  public getSubmission(id: number): Promise<Submission> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});

    return this.http.get('/api/submission/' + id, options)
      .toPromise()
      .then(ApiServiceImpl.extractData)
      .then((s) => new Submission(s.id, s.problem, s.team_id, new Date(s.submittedAt), s.code, s.accepted));
    // .catch(ApiService.handleError);
  }

  public getSubmissions(): Promise<Submission[]> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});

    return this.http.get('/api/submissions', options)
      .toPromise()
      .then(ApiServiceImpl.extractDataArray)
      .then((data) => data.map(
        s => new Submission(s.id, s.problem, s.team_id, new Date(s.submittedAt), s.code, s.accepted)));
    // .filter(submissions => {
    //   if (!this.arraysEqual(this.submissions.getValue(), submissions)) {
    //     console.log("New submissions!");
    //     return true;
    //   }
    //   console.log("Steady Freddie");
    //   return false;
    // })
    // .catch(ApiService.handleError);
  }

  public getProblems(): Promise<Problem[]> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});

    return this.http.get('/api/problems', options)
      .toPromise()
      .then(ApiServiceImpl.extractDataArray)
      .then((data) => data.map(
        p => new Problem(p.id, p.orderIndex, p.title, p.description, p.language, p.precode, p.code, p.postcode, p.answer)));
    // .filter(problems => {
    //   if (!this.arraysEqual(this.problems.getValue(), problems)) {
    //     console.log("New problems!");
    //     return true;
    //   }
    //   console.log("Steady Freddie");
    //   return false;
    // })
    // .catch(ApiService.handleError);
  }

  public getProfile(): Promise<Profile> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});

    return this.http.get('/api/profile', options)
      .toPromise()
      .then(ApiServiceImpl.extractData)
      .then(p => new Profile(p.id, p.type, p.name, p.members));
    // .filter(profile => JSON.stringify(this.profile.getValue()) !=
    // JSON.stringify(profile)) .catch(ApiService.handleError);
  }

  public submit(problem: Problem, code: String) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});

    try {
      this.http.post('/api/submissions', JSON.stringify({
          problem_id: problem.id, code: code,
        }), options)
        .toPromise()
        .then((response) => {
          console.log('Shah dud');
          return response.json();
        })
        .catch(ApiServiceImpl.handleError);
    }
    catch (err) {
      console.log(err);
    }
  }

  public accept(submission: Submission) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});

    try {
      return this.http.post('/api/submission/' + submission.id + '/accept', '', options)
        .toPromise()
        .then((response) => {
          console.log('Shah dud');
          return response.json();
        })
        .catch(ApiServiceImpl.handleError);
    }
    catch (err) {
      console.log(err);
      return undefined;
    }
  }

  public reject(submission: Submission) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});

    try {
      console.log(submission);
      return this.http.post('/api/submission/' + submission.id + '/reject', '', options)
        .toPromise()
        .then((response) => {
          console.log('Shah dud');
          return response.json();
        })
        .catch(ApiServiceImpl.handleError);
    }
    catch (err) {
      console.log(err);
      return undefined;
    }
  }
}
