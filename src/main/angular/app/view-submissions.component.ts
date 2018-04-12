import {AfterViewInit, Component, Inject, OnDestroy, ViewChild} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ApiTeamService} from "./api-team.service";
import {Subscription} from "rxjs/Subscription";

import {acmcsus} from "./proto/dbgjdg_pb";
import * as Long from "long";
import {MatTable, MatTableDataSource} from "@angular/material";
import {combineLatest} from "rxjs/observable/combineLatest";
import Submission = acmcsus.debugjudge.Submission;
import SubmissionJudgement = acmcsus.debugjudge.SubmissionJudgement;

@Component({
  selector: 'app-submissions-view',
  template: `
    <mat-card>
      <mat-card-title>Submissions</mat-card-title>
      <!--<mat-card-subtitle *ngIf="!submissions.length">No Submissions Yet!</mat-card-subtitle>-->
      <mat-card-content>
        <mat-table #submissionsTable [dataSource]="dataSource">
          <mat-form-field>
            <input matInput (keyup)="applyFilter($event.target.value)" placeholder="Filter">
          </mat-form-field>

          <ng-container matColumnDef="teamId">
            <mat-header-cell *matHeaderCellDef>Team No.</mat-header-cell>
            <mat-cell *matCellDef="let row"> {{row.teamId}}</mat-cell>
          </ng-container>
          <ng-container matColumnDef="problemName">
            <mat-header-cell *matHeaderCellDef>Problem</mat-header-cell>
            <mat-cell *matCellDef="let row"> {{row.problemName || '???'}}</mat-cell>
          </ng-container>
          <ng-container matColumnDef="submissionTime">
            <mat-header-cell *matHeaderCellDef>Submission Time</mat-header-cell>
            <mat-cell *matCellDef="let row"> {{row.submissionTime || '???'}}</mat-cell>
          </ng-container>
          <ng-container matColumnDef="judgementStatus">
            <mat-header-cell *matHeaderCellDef>Judgement</mat-header-cell>
            <mat-cell *matCellDef="let row" [style.color]="colorFor(row.sub)">
              {{row.judgementValue || '???'}}
            </mat-cell>
          </ng-container>
          <ng-container matColumnDef="judgementMessage">
            <mat-header-cell *matHeaderCellDef>Message</mat-header-cell>
            <mat-cell *matCellDef="let row" [style.color]="colorFor(row.sub)">
              {{row.judgementMessage || '???'}}
            </mat-cell>
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
  dataSource = new MatTableDataSource<SubmissionTableRow>([]);

  displayColumns = ['teamId', 'problemName', 'judgementStatus', 'judgementMessage'];

  problemNames: {};
  submissions: Submission[] = [];

  problemSubscription: Subscription;
  submissionsSubscription: Subscription;

  constructor(@Inject(HttpClient) private httpClient: HttpClient,
              @Inject('ApiTeamService') private api: ApiTeamService) {
  }

  ngAfterViewInit(): void {
    combineLatest(this.api.submissions, this.api.problems).subscribe(([subs, probs]) => {
      if (probs) {
        this.problemNames = {};
        for (let problem of probs) {
          this.problemNames[problem.id] = problem.title;
        }
      }

      this.dataSource.data = subs
      // .sort((a, b) =>
      //     Long.fromValue(b.submissionTimeSeconds).toNumber() -
      //     Long.fromValue(a.submissionTimeSeconds).toNumber())
          .map(sub =>
              new SubmissionTableRow(
                  sub.teamId,
                  this.problemNames[sub.problemId],
                  Math.floor(Long.fromValue(sub.submissionTimeSeconds).toInt() / 60),
                  this.judgementNames[sub.judgement],
                  sub.judgementMessage,
                  sub));

      this.submissionsTable.renderRows();
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

export class SubmissionTableRow {
  constructor(public teamId: number,
              public problemName: string,
              public submissionTime: number,
              public judgementValue: string,
              public judgementMessage: string,
              public sub: Submission) {
  }
}
