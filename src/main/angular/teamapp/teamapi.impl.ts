import {Inject, Injectable} from "@angular/core";
import * as Rx from "rxjs/Rx";

import {ApiServiceImpl} from "lib/api.impl";
import {Submission} from "lib/models/submission";
import {acmcsus} from "../proto/debugjudge_pb";
import {ApiService} from "../lib/api.service";
import {TeamApiService} from "./teamapi.service";
import {Headers, Http, RequestOptions} from "@angular/http";
import S2TMessage = acmcsus.debugjudge.S2CMessage.S2TMessage;
import {Problem} from "../lib/models/problem";

@Injectable()
export class TeamApiServiceImpl implements TeamApiService {

  public submissions: Rx.BehaviorSubject<Submission[]>;

  public connectionSubscription: Rx.Subscription;

  constructor(@Inject('ApiService') private apiService: ApiService, private http: Http) {
    this.submissions = new Rx.BehaviorSubject<Submission[]>([]);
    this.connectionSubscription = null;
    this.apiService.setTeamApiService(this);
  }

  public handleMessage(msg: S2TMessage) {
    switch (msg.value) {
      case 'submissionResultMessage': {
        this.getSubmissions().then(submissions => this.submissions.next(submissions));
        break;
      }
      default: {
        console.error("WS: Don't know how to handle S2JMessage: " + msg.value);
      }
    }
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
          return response.json();
        })
        .catch(ApiServiceImpl.handleError)
        .then((submission_id) => 
          this.getSubmissions()
            .then(submissions => this.submissions.next(submissions)));
    }
    catch (err) {
      console.log(err);
    }
  }

  public getSubmissions(): Promise<Submission[]> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});

    return this.http.get('/api/submissions')
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

}
