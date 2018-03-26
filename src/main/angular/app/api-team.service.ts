import {Problem} from './model';
import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {ApiWebSocketService} from "./api-ws.service";
import {acmcsus} from 'proto';
import Submission = acmcsus.debugjudge.Submission;
import C2SMessage = acmcsus.debugjudge.C2SMessage;

export interface ApiTeamService {

  submissions: Observable<Submission[]>;
  problems: Observable<Problem[]>;

  submit(debuggingSubmission: Submission): void;

  reloadSubmissions(): void;

  reloadProblems(): void;

}

@Injectable()
export class ApiTeamServiceImpl {

  submissions: BehaviorSubject<Submission[]>;
  problems: BehaviorSubject<Problem[]>;
  private readonly problemsUrl = '/api/problems';
  private readonly submissionsUrl = '/api/t/submissions';

  constructor(@Inject(HttpClient) private http: HttpClient,
              @Inject('ApiWebSocketService') private apiWs: ApiWebSocketService) {
    this.submissions = new BehaviorSubject<Submission[]>([]);
    this.problems = new BehaviorSubject<Problem[]>([]);

    this.apiWs.s2tMessages.subscribe((s2t) => {
      if (s2t.value == "reloadSubmissionsMessage") {
        this.reloadSubmissions();
      }
    });

    this.reloadSubmissions();
    this.reloadProblems();
  }

  submit(submission: Submission): void {
    if (!submission.value) {
      throw new Error("Cannot submit without the value set!");
    }
    this.apiWs.sendMessage(new C2SMessage({
      t2sMessage: {
        submissionCreateMessage: {
          submission: submission
        }
      }
    }));
  }

  reloadSubmissions(): void {
    this.http.get<Submission[]>(this.submissionsUrl)
      .subscribe(s => this.submissions.next(s));
  }

  reloadProblems(): void {
    this.http.get<Problem[]>(this.problemsUrl)
      .subscribe(s => this.problems.next(s));
  }

}
