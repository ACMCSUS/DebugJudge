import {Injectable, EventEmitter} from "@angular/core";
import {Http, Response, RequestOptions, Headers} from '@angular/http';

import * as Rx from '@reactivex/rxjs';

import {Problem} from "./models/problem";
import {Submission} from "./models/submission";
import {Observable} from "@reactivex/rxjs";

@Injectable()
export class ApiService {

  private nonceUrl = '/ws/teamNonce';

  constructor(private http: Http) {
    this.connectWS('ws://'+window.location.host+'/ws/team');
  }

  getProblems(): Observable<Problem[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    // return this.http.get("/api/problems", options)
    //   .map(this.extractData)
    //   .map((data) => data.map(p => new Problem(
    //     p.id,
    //     p.title,
    //     p.description,
    //     p.precode,
    //     p.code,
    //     p.postcode,
    //     p.answer)))
    //   .catch(this.handleError);
    let cachedProblems : Problem[] = undefined;
    return Observable.interval(500)
      .switchMap(() => this.http.get("/api/problems", options))
      .map(this.extractData)
      .map((data) => data.map(p => new Problem(
        p.id,
        p.title,
        p.description,
        p.precode,
        p.code,
        p.postcode,
        p.answer)))
      .filter(problems => {
        if (!this.arraysEqual(cachedProblems, problems)) {
          console.log("New problems!", cachedProblems, problems);
          cachedProblems = problems;
          return true;
        }
        return false;
      })
      .catch(this.handleError);
  }

  getSubmissions(): Observable<Submission[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let cachedSubmissions : Submission[] = undefined;
    return Observable.interval(500)
      .switchMap(() => this.http.get("/api/submissions", options))
      .map(this.extractData)
      .map((data) => data.map(s => new Submission(
        s.id,
        s.problem,
        s.team_id,
        new Date(s.submittedAt),
        s.code,
        s.accepted)))
      .filter(submissions => {
        if (!this.arraysEqual(cachedSubmissions, submissions)) {
          console.log("New submissions!", cachedSubmissions, submissions);
          cachedSubmissions = submissions;
          return true;
        }
        console.log("Steady Freddie");
        return false;
      })
      .catch(this.handleError);
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

  private socket: Rx.Subject<MessageEvent>;
  public connectWS(url) {
    if (!this.socket) {
      this.http.get(this.nonceUrl).forEach((response) => {
        console.log(response);
        if (!this.socket) {
          this.socket = this.createWS(url, response.text());

          this.socket.forEach((message: MessageEvent) => {
            console.log("Debug Message:", message.data);
            if (message.data.startsWith("dbg:"))
              console.debug("Debug Message:", message.data.substring(4));
            else if (message.data.startsWith("rld:")) {
            }
          });
          this.socket.subscribe();
        }
      });
    }
  }
  private createWS(url, nonce): Rx.Subject<MessageEvent> {
    let ws = new WebSocket(url);
    ws.onopen = () => ws.send("login:"+nonce);

    let observable = Rx.Observable.create(
      (obs: Rx.Observer<MessageEvent>) => {
        ws.onmessage = obs.next.bind(obs);
        ws.onerror = obs.error.bind(obs);
        ws.onclose = obs.complete.bind(obs);
        return ws.close.bind(ws);
      }
    );
    let observer = {
      next: (data: Object) => {
        if (ws.readyState === WebSocket.OPEN) {
          console.log("Sending: " + JSON.stringify(data));
          ws.send(JSON.stringify(data));
        } else {
          console.log(ws.readyState, "!=", WebSocket.OPEN, "...feelsbadman")
        }
      },
    };

    return Rx.Subject.create(observer, observable);
  }


  private extractData(res: Response) : any[] {
    let body = res.json();
    return body || [];
  }
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
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
