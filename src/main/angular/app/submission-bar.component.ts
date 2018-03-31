import {Component, Inject, OnDestroy, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ApiTeamService} from "./api-team.service";
import {Subscription} from "rxjs/Subscription";

import {acmcsus} from "./proto/dbgjdg_pb";
import Submission = acmcsus.debugjudge.Submission;

@Component({
  selector: 'app-submissions-bar',
  template: `
    <mat-card id="submissionBar">
      <mat-chip-list>
        <mat-chip *ngFor="let submission of submissions"
                  [selected]="true"
                  [color]="'accent'">
          {{submission.problemId}}</mat-chip>
        <mat-chip *ngIf="!(submissions&&submissions.length)">
          Notifications will arrive here.</mat-chip>
      </mat-chip-list>
    </mat-card>
  `,
  styles: [`
    #submissionBar {
      background-color: #eee;
      /*width: 100%;*/
      padding: 10px;
      overflow-x: scroll;
    }
    /deep/.mat-chip-list-wrapper {
      flex-wrap: nowrap !important;
    }
  `],
})
export class SubmissionsBarComponent implements OnInit, OnDestroy {

  submissions: Submission[];
  submissionsSubscription: Subscription;

  constructor(@Inject(HttpClient) private httpClient: HttpClient,
              @Inject('ApiTeamService') private api: ApiTeamService) {
  }

  ngOnInit(): void {
    this.submissionsSubscription = this.api.submissions.subscribe(
      (subs) => console.log(this.submissions = subs));
  }

  ngOnDestroy(): void {
    this.submissionsSubscription.unsubscribe();
  }
}
