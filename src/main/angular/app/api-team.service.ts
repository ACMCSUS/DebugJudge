import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {ApiWebSocketService} from "./api-ws.service";
import {acmcsus} from "./proto/dbgjdg_pb";
import Submission = acmcsus.debugjudge.Submission;
import SubmissionJudgement = acmcsus.debugjudge.SubmissionJudgement;
import Problem = acmcsus.debugjudge.Problem;
import C2SMessage = acmcsus.debugjudge.C2SMessage;
import {combineLatest} from "rxjs/observable/combineLatest";

export interface ApiTeamService {

  submissions: Observable<Submission[]>;
  problems: Observable<Problem[]>;
  solvedProblems: Observable<{[p: number]: boolean}>;

  submit(debuggingSubmission: Submission): void;

}

@Injectable()
export class ApiTeamServiceImpl implements ApiTeamService {

  submissions: BehaviorSubject<Submission[]>;
  problems: BehaviorSubject<Problem[]>;
  solvedProblems: Observable<{[p: number]: boolean}>;

  constructor(@Inject(HttpClient) private http: HttpClient,
              @Inject('ApiWebSocketService') private apiWs: ApiWebSocketService) {
    this.submissions = new BehaviorSubject<Submission[]>([]);
    this.problems = new BehaviorSubject<Problem[]>([]);
    this.solvedProblems = combineLatest(this.submissions, this.problems, (subs, probs) => {
      let solved: {[p: number]: boolean} = {};
      probs.forEach((prob) => solved[prob.id] = false);
      subs.filter((sub) => sub.judgement === SubmissionJudgement.JUDGEMENT_SUCCESS)
          .map(sub => sub.problemId)
          .forEach(pid => solved[pid] = true);
      return solved;
    });

    this.apiWs.s2cMessages.subscribe((s2c) => {
      if (s2c.value == "reloadProblemsMessage") {
        this.problems.next(
            s2c.reloadProblemsMessage.problems.value.map(Problem.create));

      }
      else if (s2c.value == "reloadSubmissionMessage") {
        let newSub = Submission.create(s2c.reloadSubmissionMessage.submission);
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
          submissionList.unshift(newSub);
        }

        if (newSub.judgement === SubmissionJudgement.JUDGEMENT_SUCCESS) {
          this.solvedProblems[newSub.problemId] = true;
        }

        this.submissions.next(submissionList);
      }
      if (s2c.value == "reloadSubmissionsMessage") {
        this.submissions.next(
            s2c.reloadSubmissionsMessage.submissions.value.map(Submission.create));
      }
    });
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
