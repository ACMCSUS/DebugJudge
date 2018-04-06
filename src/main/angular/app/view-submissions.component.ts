import {AfterViewInit, Component, Inject, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ApiTeamService} from "./api-team.service";
import {Subscription} from "rxjs/Subscription";

import {acmcsus} from "./proto/dbgjdg_pb";
import * as Long from "long";
import Submission = acmcsus.debugjudge.Submission;
import SubmissionJudgement = acmcsus.debugjudge.SubmissionJudgement;
import {MatTable} from "@angular/material";

@Component({
  selector: 'app-submissions-view',
  template: `
    <mat-card>
      <mat-card-title>Submissions</mat-card-title>
      <mat-card-subtitle *ngIf="!submissions.length">No Submissions Yet!</mat-card-subtitle>
      <mat-card-content>
        <mat-table #submissionsTable [dataSource]="submissions">

          <ng-container matColumnDef="teamId">
            <mat-header-cell *matHeaderCellDef>Team No.</mat-header-cell>
            <mat-cell *matCellDef="let sub"> {{sub.teamId.toString()}} </mat-cell>
          </ng-container>
          <ng-container matColumnDef="problemName">
            <mat-header-cell *matHeaderCellDef>Problem</mat-header-cell>
            <mat-cell *matCellDef="let sub"> {{problemNames[sub.problemId] || '???'}} </mat-cell>
          </ng-container>
          <ng-container matColumnDef="judgementStatus">
            <mat-header-cell *matHeaderCellDef>Judgement</mat-header-cell>
            <mat-cell *matCellDef="let sub" [style.color]="colorFor(sub)"> {{judgementNames[sub.judgement] || '???'}}</mat-cell>
          </ng-container>
          <ng-container matColumnDef="judgementMessage">
            <mat-header-cell *matHeaderCellDef>Message</mat-header-cell>
            <mat-cell *matCellDef="let sub" [style.color]="colorFor(sub)"> {{sub.judgementMessage || '???'}}</mat-cell>
          </ng-container>

          <mat-header-row *matHeaderRowDef="displayColumns"></mat-header-row>
          <mat-row *matRowDef="let myRowData; columns: displayColumns"></mat-row>
        </mat-table>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    mat-card {
      margin: 10px;
    }
  `],
})
export class SubmissionsViewComponent implements AfterViewInit, OnDestroy {

  readonly judgementNames = SubmissionJudgement;

  @ViewChild('submissionsTable')
  submissionsTable: MatTable<Submission>;
  displayColumns = ['teamId', 'problemName', 'judgementStatus', 'judgementMessage'];

  problemNames: {};
  submissions: Submission[] = [];

  problemSubscription: Subscription;
  submissionsSubscription: Subscription;

  constructor(@Inject(HttpClient) private httpClient: HttpClient,
              @Inject('ApiTeamService') private api: ApiTeamService) {
  }

  ngAfterViewInit(): void {
    this.submissionsSubscription = this.api.submissions.subscribe(
        (subs) => {
          subs.sort((a, b) =>
              Long.fromValue(b.submissionTimeSeconds).toNumber() -
              Long.fromValue(a.submissionTimeSeconds).toNumber());
          this.submissions = subs;
          this.submissionsTable.renderRows();
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
