import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';

import * as Rx from 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import {Problem} from './models/problem';
import {Submission} from './models/submission';
import {Profile} from './models/profile';
import {ApiService} from 'lib/api.service';
import {WebSocketSubject} from "rxjs/observable/dom/WebSocketSubject";

import {JudgeApiService} from "judgeapp/judgeapi.service";
import {TeamApiService} from "teamapp/teamapi.service";
import {acmcsus} from "proto/debugjudge_pb";
import C2SMessage = acmcsus.debugjudge.C2SMessage;
import S2CMessage = acmcsus.debugjudge.S2CMessage;
import CompetitionState = acmcsus.debugjudge.CompetitionState;
import S2JMessage = acmcsus.debugjudge.S2CMessage.S2JMessage;
import S2TMessage = acmcsus.debugjudge.S2CMessage.S2TMessage;

@Injectable()
export class ApiServiceImpl implements ApiService {

  private nonceUrl = '/ws/nonce';
  private wsUrl = 'ws://' + window.location.host + '/ws/connect';

  public competitionState: Rx.BehaviorSubject<CompetitionState>;
  public problems: Rx.BehaviorSubject<Problem[]>;
  public submissions: Rx.BehaviorSubject<Submission[]>;
  public profile: Rx.BehaviorSubject<Profile>;

  private socket: WebSocketSubject<S2CMessage>;

  public loggedInStatus: Rx.BehaviorSubject<boolean>;

  private judgeApiService: JudgeApiService;
  private teamApiService: TeamApiService;

  static extractDataArray(res: Response): any[] {
    const body = res.json();
    return body || [];
  }

  static extractData(res: Response): any {
    const body = res.json();
    return body || {};
  }

  static handleError(error: Response | any) {
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
    this.competitionState = new Rx.BehaviorSubject<CompetitionState>(CompetitionState.WAITING);
    this.problems = new Rx.BehaviorSubject<Problem[]>([]);
    this.submissions = new Rx.BehaviorSubject<Submission[]>([]);
    this.profile = new Rx.BehaviorSubject<Profile>(undefined);

    this.socket = new WebSocketSubject<S2CMessage>({
      url: this.wsUrl,
      binaryType: "arraybuffer",

      openObserver: {
        next: (event: Event) => {
          this.http.get(this.nonceUrl).forEach((response) => {
            let msg = C2SMessage.create({
              loginMessage: {
                nonce: response.text()
              }
            });
            this.sendMessage(msg);
          })
        }
      },
      resultSelector: (e: MessageEvent) => {
        // I am the greatest hacker. Rxjs has a weird type check that this bypasses.
        // If you find a way to bypass this hack, go for it.
        return S2CMessage.decode.apply(this, [new Uint8Array(e.data)]);
      },
    });

    this.loggedInStatus = new Rx.BehaviorSubject<boolean>(false);
    this.setUpSocket();
  }

  public setJudgeApiService(judgeApiService: JudgeApiService) {
    this.judgeApiService = judgeApiService;
  }

  public setTeamApiService(teamApiService: TeamApiService) {
    this.teamApiService = teamApiService;
    this.teamApiService.getSubmissions()
      .then(submissions => this.teamApiService.submissions.next(submissions));
  }

  private setUpSocket() {
    this.socket.subscribe(msg => {
      if (msg === undefined) {
        return
      }

      switch (msg.value) {
        case'debugMessage': {
          console.debug('WS_DBG:', msg.debugMessage.message);
          break;
        }
        case 'alertMessage': {
          alert(msg.alertMessage.message);
          break;
        }
        case 'loginResultMessage': {
          if (msg.loginResultMessage.value == S2CMessage.LoginResultMessage.LoginResult.SUCCESS) {
            this.loggedInStatus.next(true);
          }
          else {
            this.loggedInStatus.next(false);
          }
          break;
        }
        case 'competitionStateChangedMessage': {
          // TODO: Fancy stuff with the state and time like a countdown in the titlebar
          let state = msg.competitionStateChangedMessage.state;
          let time = msg.competitionStateChangedMessage.timeMillis;

          this.competitionState.next(state);
          this.getProblems().then((problems) => this.problems.next(problems));
          break;
        }
        case 'notificationMessage': {
          // TODO: Notification logic
          console.log('WS: Notification: "' + msg.notificationMessage.message + '"');
          break;
        }
        case 's2tMessage': {
          if (this.teamApiService) {
            this.teamApiService.handleMessage(S2TMessage.create(msg.s2tMessage));
          }
          else {
            console.error("WS: Received an s2tMessage but no teamApiService was set");
          }
          break;
        }
        case 's2jMessage': {
          if (this.judgeApiService) {
            this.judgeApiService.handleMessage(S2JMessage.create(msg.s2jMessage));
          }
          else {
            console.error("WS: Received an s2jMessage but no judgeApiService was set");
          }
          break;
        }
        default: {
          console.error("WS: I didn't know how to act on msg:", msg.value,
            "Either this message is not supported in frontend or someone forgot a 'break'.");
        }
      }
    });

    this.getProfile().then((profile) => this.profile.next(profile));
    this.getProblems().then((problems) => this.problems.next(problems));
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

  public sendMessage(msg: C2SMessage) {
    this.socket.socket.send(C2SMessage.encode(msg).finish());
  }
}
