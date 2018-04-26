import { AfterViewInit, Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ApiWebSocketService } from "./api-ws.service";
import { Subscription } from 'rxjs/Subscription';

import { acmcsus } from "./proto/dbgjdg_pb";
import { ApiJudgeService } from "./api-judge.service";
import { DebugBalloonComponent } from "./debuggingjudge.component";
import Problem = acmcsus.debugjudge.Problem;
import JudgingStatusMessage = acmcsus.debugjudge.S2JMessage.JudgingStatusMessage;
import Submission = acmcsus.debugjudge.Submission;
import SubmissionJudgment = acmcsus.debugjudge.SubmissionJudgement;


@Component({
  selector: 'app-runner-view',
  entryComponents: [DebugBalloonComponent],
  template: `
  <div id="outer">
    <div id="wrap">
    <mat-card id="left">
      <mat-card-subtitle>Problems to judge:</mat-card-subtitle>
      <mat-card-content style="display: flex; flex-direction: column;">
        <mat-progress-spinner *ngIf="!(problems&&problems.length)" [mode]="'indeterminate'"
                              [diameter]="50"></mat-progress-spinner>
        <span *ngFor="let problem of problems; let idx = index">
              <mat-checkbox [(ngModel)]="problemWhitelist[problem.id]"
                            color="primary" [disabled]="judgingStatus.judging"
                            (change)="updatePreferences()">{{problem.title}}</mat-checkbox>
            </span>
      </mat-card-content>
    </mat-card>
      <mat-card id="right">
        <mat-card-title>View for Ballons</mat-card-title>
        <mat-card-title *ngIf="judgingStatus.judging && assignedSubmission">View: {{problemMap[assignedSubmission.problemId].title}}</mat-card-title>
        <mat-card-title *ngIf="judgingStatus.judging && !assignedSubmission">Waiting for submissions...</mat-card-title>
        <mat-card-content *ngIf="assignedSubmission">
          <table border="1" *ngIf="scoreboard && scoreboard.row.length">
            <thead>
            <tr>
              <td colspan="4"></td>
              <td colSpan="{{problems && problems.length}}">Problems (hover)</td>
            </tr>
            <tr>
              <td>Problem</td>
              <td>Team</td>
              <td>Correct</td>
              <td>Penalty</td>
              <td class="problemName"
                  *ngFor="let problem of problems"
                  [title]="problem.title">
                {{problem.title}}
              </td>
            </tr>
            </thead>
            <tr *ngFor="let row of scoreboard.row">
              <td>{{row.place}}</td>
              <td>{{row.profileName}}</td>
              <td>{{row.score}}</td>
              <td>{{row.penalty}}</td>
              <td [ngClass]="{'green':row.problemCompletions[problem.id]}"
                  [title]="row.problemCompletions[problem.id] ? 'SOLVED' : 'UNSOLVED'"
                  *ngFor="let problem of problems">
                {{row.problemAttempts[problem.id] || 0}}
              </td>
            </tr>
          </table>
          <div [ngSwitch]="assignedSubmission.value">
            <app-judge-debug
                *ngSwitchCase="'debuggingSubmission'"
                [team]="problemMap[assignedSubmission.teamId]"
                [problem]="problemMap[assignedSubmission.problemId]"
                [submission]="assignedSubmission"></app-judge-debug>
          </div>
        </mat-card-content>
        <mat-card-content *ngIf="!assignedSubmission"></mat-card-content>
        <mat-card-actions>
          <button mat-raised-button color="primary" (click)="close()" [disabled]="!assignedSubmission">Done</button>

        </mat-card-actions>
        
      </mat-card>
    </div>
  </div>
  `,
  styles: [``],
})

export class ViewBalloonRunnerComponents implements OnInit, OnDestroy {

  //scoreboard: Scoreboard;
  bkgdColor = '#fff';
  problems: Problem[];
  balloonrunnerview: ViewBalloonRunnerComponents;

  judgingStatus: JudgingStatusMessage;

  rulingMessage: string;

  displayColumns = ['teamId', 'problemName', 'judgmentStatus', 'colorId'];

  problemNames: {};

  lastUpdateString: string;
  s2cSubscription: Subscription;

  problemSubscription: Subscription;
  assignmentSubscription: Subscription;
  judgingStatusSubscription: Subscription;

  statusMessage = "Patience.....";

  constructor(@Inject("ApiWebSocketService") private apiWs: ApiWebSocketService) {}

  ngOnInit(): void {
    this.problems = [];
    //this.problemMap = new Map<number, Problem>();
    this.assignmentSubscription = null;
    this.judgingStatus = JudgingStatusMessage.create();
    //this.setBanner(0);
    //this.problemSubscription = this.api.problems.subscribe();
    //this.assignmentSubscription = this.api.assignedSubmission.subscribe();
    //this.judgingStatusSubscription = this.api.judgingStatus.subscribe();

    this.s2cSubscription = this.apiWs.s2cMessages.subscribe((s2cMessage) =>{
      if(s2cMessage.value === "scoreboardUpdateMessage") {
        this.scoreboard = Scoreboard.create(s2cMessage.scoreboardUpdateMessage.scoreboard);

      }else if(s2cMessage.value == "reloadProblemsMessage") {
        this.problems = s2cMessage.reloadProblemsMessage.problems.value.map(Problem.create);
        this.problems.sort(a,b) => a.orderIndex - b.orderIndex)
      }
    });


  }
  ngOnDestroy(): void {
    this.s2cSubscription.unsubscribe();
    this.problemSubscription.unsubscribe();
    this.assignmentSubscription.unsubscribe();
    this.judgingstatussubscription.unsubscribe();

  }
  //Need to change color with cases somehow
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
  close() {
    this.api.submitJudgement(, , , ,'close');
  }
  updatePreferences(): void {
    this.api.updatePreferences(this.problemWhitelist);
  }
}
