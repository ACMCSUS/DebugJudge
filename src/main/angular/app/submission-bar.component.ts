import {AfterViewInit, Component, Inject, OnDestroy, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ApiTeamService} from "./api-team.service";
import {Subscription} from "rxjs/Subscription";
import {animate, state, style, transition, trigger} from "@angular/animations";

import {acmcsus} from "./proto/dbgjdg_pb";
import Submission = acmcsus.debugjudge.Submission;
import * as Long from "long";

@Component({
  selector: 'app-submissions-bar',
  // animations: [
  //   trigger('animateBar', [
  //     state('in', style({transform: 'scale(1)'})),
  //     transition('void => *', [
  //       style({transform: 'scale(0)'}),
  //       animate('1s ease')
  //     ]),
  //     transition('* => void', [
  //       animate('1s ease',
  //           style({transform: 'scale(0)'}))
  //     ])
  //   ])
  // ],
  template: `
    <mat-card id="submissionBar">
      <mat-chip-list>
        <mat-chip *ngFor="let notif of notifs"
                  [selected]="true"
                  [style.backgroundColor]="notif.color">
          {{problemNames[notif.problemId] || '???'}}
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

    /deep/ .mat-chip-list-wrapper {
      flex-wrap: nowrap !important;
    }
  `],
})
export class SubmissionsBarComponent implements AfterViewInit, OnDestroy {

  problemNames: {};
  notifs = [];
  submissions: Submission[];

  problemSubscription: Subscription;
  submissionsSubscription: Subscription;

  constructor(@Inject(HttpClient) private httpClient: HttpClient,
              @Inject('ApiTeamService') private api: ApiTeamService) {
  }

  ngAfterViewInit(): void {
    this.submissionsSubscription = this.api.submissions.subscribe(
        (subs) => {
          subs.sort((a,b) =>
              Long.fromValue(b.submissionTimeSeconds).toNumber() -
              Long.fromValue(a.submissionTimeSeconds).toNumber());
          this.submissions = subs;
          this.notifs = subs.map(sub => {
            return {
              problemId: sub.problemId,
              color: this.colorFor(sub),
            }
          });
        });

    this.problemSubscription = this.api.problems.subscribe((problems) => {
      this.problemNames = {}
      for (let problem of problems) {
        this.problemNames[problem.id] = problem.title;
      }
    });
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

  ngOnDestroy(): void {
    this.submissionsSubscription.unsubscribe();
  }
}
