import {AfterViewInit, Component, Inject, OnDestroy} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ApiTeamService} from "./api-team.service";
import {Observable} from "rxjs/Observable";
import {combineLatest} from "rxjs/observable/combineLatest";

import {acmcsus} from "./proto/dbgjdg_pb";
import * as Long from "long";
import Submission = acmcsus.debugjudge.Submission;
import SubmissionJudgement = acmcsus.debugjudge.SubmissionJudgement;

@Component({
  selector: 'app-submissions-bar',
  template: `
    <mat-card id="submissionBar">
      <mat-chip-list>
        <mat-chip *ngFor="let notif of ((notifs|async)||[])"
                  [selected]="true"
                  ngClass="{{notif.classes}}">
          {{notif.text}}
        </mat-chip>
        <mat-chip *ngIf="!(submissions&&submissions.length)">
          Notifications will arrive here.
        </mat-chip>
      </mat-chip-list>
    </mat-card>
  `,
  styles: [`
    mat-chip {
      /*overflow-x: hidden;*/
      white-space: nowrap;
    }

    #submissionBar {
      background-color: #eee;
      /*width: 100%;*/
      padding: 10px;
      overflow-x: scroll;
    }

    mat-chip.unknown {
      background: #666 !important;
    }

    mat-chip.success {
      background: #696 !important;
    }

    mat-chip.failure {
      background: #a66 !important;
    }

    mat-chip.pre-success {
      background: repeating-linear-gradient(
          45deg,
          #476646,
          #476646 5px,
          #666666 5px,
          #666666 10px
      ) !important;
    }

    mat-chip.pre-failure {
      background: repeating-linear-gradient(
          45deg,
          #665155,
          #665155 5px,
          #666666 5px,
          #666666 10px
      ) !important;
    }

    /deep/ .mat-chip-list-wrapper {
      flex-wrap: nowrap !important;
    }
  `],
})
export class SubmissionsBarComponent implements AfterViewInit {

  problemNames: {};
  notifs: Observable<Notification[]>;
  submissions: Submission[];

  constructor(@Inject(HttpClient) private httpClient: HttpClient,
              @Inject('ApiTeamService') private api: ApiTeamService) {
  }

  ngAfterViewInit(): void {
    this.notifs = combineLatest(this.api.submissions, this.api.problems,
        (subs, probs) => {
          this.problemNames = {};
          for (let problem of probs) {
            this.problemNames[problem.id] = problem.title;
          }
          subs.sort((a, b) =>
              Long.fromValue(b.submissionTimeSeconds).toNumber() -
              Long.fromValue(a.submissionTimeSeconds).toNumber());
          this.submissions = subs;
          return subs.map(sub => {
            return {
              text: this.textFor(sub),
              color: this.colorFor(sub),
              classes: this.classesFor(sub)
            }
          });
        });
  }

  textFor(notif: Submission): string {
    let str = this.problemNames[notif.problemId] || '???';

    if (notif.judgement === SubmissionJudgement.JUDGEMENT_SUCCESS) {
      str += ' (SUCCESS)';
    }
    else if (notif.judgement === SubmissionJudgement.JUDGEMENT_FAILURE) {
      str += ' (FAILURE)';
    }
    else {
      if (notif.value == 'algorithmicSubmission') {
        let algoSub = notif.algorithmicSubmission;
        if (algoSub.preliminaryJudgement === SubmissionJudgement.JUDGEMENT_SUCCESS) {
          str += ' (PRELIM: SUCCESS)';
        }
        else if (algoSub.preliminaryJudgement === SubmissionJudgement.JUDGEMENT_FAILURE) {
          str += ' (PRELIM: FAILURE)';
        }
      }
    }
    return str;
  }

  colorFor(sub: Submission): string {
    if (!sub.judgement) {
      return '#666';
    }
    else {
      switch (sub.judgement) {
        case acmcsus.debugjudge.SubmissionJudgement.JUDGEMENT_SUCCESS:
          return '#696';
        case acmcsus.debugjudge.SubmissionJudgement.JUDGEMENT_FAILURE:
          return '#a66';
        default:
          return '#666';
      }
    }
  }

  classesFor(sub: Submission): string[] {
    let classes = [];

    if (sub.judgement === SubmissionJudgement.JUDGEMENT_UNKNOWN) {
      if (sub.algorithmicSubmission) {
        let algoSub = sub.algorithmicSubmission;
        if (algoSub.preliminaryJudgement === SubmissionJudgement.JUDGEMENT_SUCCESS) {
          classes.push('pre-success');
        }
        else if (algoSub.preliminaryJudgement === SubmissionJudgement.JUDGEMENT_FAILURE) {
          classes.push('pre-failure');
        }
      }
    }
    else if (sub.judgement == SubmissionJudgement.JUDGEMENT_SUCCESS) {
      classes.push('success');
    }
    else if (sub.judgement == SubmissionJudgement.JUDGEMENT_FAILURE) {
      classes.push('failure')
    }

    if (classes.length === 0) {
      classes.push('unknown');
    }
    return classes;
  }
}

class Notification {
  text: string;
  color: string;
  classes: string[];
}
