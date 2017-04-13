import {Injectable, EventEmitter} from "@angular/core";
import {Http, Response, RequestOptions, Headers} from '@angular/http';

import * as Rx from '@reactivex/rxjs';

import {Problem} from "./models/problem";
import {Submission} from "./models/submission";
import {Observable} from "@reactivex/rxjs";
import {WebSocketSubject} from "@reactivex/rxjs/dist/cjs/observable/dom/WebSocketSubject";
import {Profile} from "./models/profile";

@Injectable()
export class ApiService {

  private nonceUrl = '/ws/nonce';
  private wsUrl = 'ws://'+window.location.host+'/ws/connect';

  public problems: Rx.BehaviorSubject<Problem[]>;
  public submissions: Rx.BehaviorSubject<Submission[]>;
  public profile: Rx.BehaviorSubject<Profile>;

  private socket: WebSocketSubject<string>;

  constructor(private http: Http) {
    this.problems = new Rx.BehaviorSubject<Problem[]>([]);
    this.submissions = new Rx.BehaviorSubject<Submission[]>([]);
    this.profile = new Rx.BehaviorSubject<Profile>(undefined);

    this.http.get(this.nonceUrl).forEach((response) => {
      console.debug(response.toString());
      this.socket = WebSocketSubject.create(this.wsUrl);
      this.socket.next("login:"+response.text());
    }).then(() => {

      this.socket.asObservable()
        .forEach(data => console.debug("WS:", data));

      this.socket.asObservable()
        .filter(data => data.startsWith("dbg:"))
        .forEach(data => console.debug("WS DBG:", data.substring(4)));

      this.socket.asObservable()
        .filter(data => data === "rld:submissions")
        .forEach((msg) => {
          console.log("I should reload my submissions:", msg)
          this.getSubmissions();
        });
      this.getSubmissions();

      this.socket.asObservable()
        .filter(data => data === "rld:problems")
        .forEach((msg) => {
          console.log("I should reload my problems:", msg)
          this.getProblems();
        });
      this.getProblems();

      this.socket.asObservable()
        .filter(data => data === "rld:profile")
        .forEach((msg) => {
          this.getProfile();
        });
      this.getProfile();
    });
  }

  private getProblems():void {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    this.http.get("/api/problems", options)
      .map(this.extractDataArray)
      .map((data) => data.map(p => new Problem(
        p.id,
        p.title,
        p.description,
        p.precode,
        p.code,
        p.postcode,
        p.answer)))
      .filter(problems => {
        if (!this.arraysEqual(this.problems.getValue(), problems)) {
          console.log("New problems!");
          return true;
        }
        console.log("Steady Freddie");
        return false;
      })
      .catch(this.handleError)
      .subscribe((problems) => this.problems.next(problems));
  }
  private getSubmissions():void {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    this.http.get("/api/submissions", options)
      .map(this.extractDataArray)
      .map((data) => data.map(s => new Submission(
        s.id,
        s.problem,
        s.team_id,
        new Date(s.submittedAt),
        s.code,
        s.accepted)))
      .filter(submissions => {
        if (!this.arraysEqual(this.submissions.getValue(), submissions)) {
          console.log("New submissions!");
          return true;
        }
        console.log("Steady Freddie");
        return false;
      })
      .catch(this.handleError)
      .subscribe((submissions) => this.submissions.next(submissions));
  }
  private getProfile():void {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    this.http.get("/api/profile", options)
      .map(this.extractData)
      .map(p => new Profile(
        p.id,
        p.type,
        p.name,
        p.members))
      .filter(profile => JSON.stringify(this.profile.getValue()) != JSON.stringify(profile))
      .catch(this.handleError)
      .subscribe((profile) => this.profile.next(profile));
  }

  submit(problem: Problem, code: String) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    try {
      this.http.post("/api/submissions", JSON.stringify({problem_id: problem.id, code: code}), options)
        .map((response) => {
          console.log("Shah dud");
          return response.json();
        })
        .catch(this.handleError)
        .subscribe();
    } catch (err) {
      console.log(err);
    }
  }
  accept(submission: Submission) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    try {
      return this.http.post("/api/submission/"+submission.id+"/accept", "", options)
        .map((response) => {
          console.log("Shah dud");
          return response.json();
        })
        .catch(this.handleError);
    } catch (err) {
      console.log(err);
      return undefined;
    }
  }
  reject(submission: Submission) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    try {
      console.log(submission);
      return this.http.post("/api/submission/"+submission.id+"/reject", "", options)
        .map((response) => {
          console.log("Shah dud");
          return response.json();
        })
        .catch(this.handleError);
    } catch (err) {
      console.log(err);
      return undefined;
    }
  }

  private extractDataArray(res: Response) : any[] {
    let body = res.json();
    return body || [];
  }
  private extractData(res: Response) : any {
    let body = res.json();
    return body || {};
  }
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      console.error(error.text());
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    console.log(error);
    return Observable.throw(errMsg);
  }

  private arraysEqual(a: any[], b: any[]) : boolean {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;

    for (let i = 0; i < a.length; ++i) {
      if (JSON.stringify(a[i]) !== JSON.stringify(b[i])) return false;
    }
    return true;
  }
}
