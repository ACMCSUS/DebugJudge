import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {ApiWebSocketService} from "./api-ws.service";
import {acmcsus} from "./proto/dbgjdg_pb";
import Submission = acmcsus.debugjudge.Submission;
import Problem = acmcsus.debugjudge.Problem;
import C2SMessage = acmcsus.debugjudge.C2SMessage;

export interface ApiTeamService {

  submissions: Observable<Submission[]>;
  problems: Observable<Problem[]>;

  submit(debuggingSubmission: Submission): void;

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
      if (s2t.value == "reloadSubmissionMessage") {
        let newSub = Submission.create(s2t.reloadSubmissionMessage.submission);
        let submissionList = [...this.submissions.getValue()]; // copy
        let found = false;

        for (let idx = 0; idx < submissionList.length; idx++) {
          let sub = submissionList[idx];
          if (sub.teamId === newSub.teamId &&
              sub.problemId === newSub.problemId &&
              sub.submissionTimeSeconds === newSub.submissionTimeSeconds) {
            submissionList[idx] = newSub;
            found = true;
          }
        }
        console.log(found);
        if (!found) {
          submissionList.push(newSub);
        }

        this.submissions.next(submissionList);
      }
      if (s2t.value == "reloadSubmissionsMessage") {
        this.submissions.next(
            s2t.reloadSubmissionsMessage.submissions.value.map(Submission.create));
      }
      if (s2t.value == "reloadProblemsMessage") {
        this.problems.next(
            s2t.reloadProblemsMessage.problems.value.map(Problem.create));
        console.log('problems: ', this.problems.getValue())
      }
    });

    // this.reloadSubmissions();
    // this.reloadProblems();
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

}
