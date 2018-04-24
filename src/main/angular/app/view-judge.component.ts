import {AfterViewInit, Component, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatRipple} from '@angular/material';
import {ApiWebSocketService} from './api-ws.service';
import {Subscription} from 'rxjs/Subscription';

import {acmcsus} from "./proto/dbgjdg_pb";
import {ApiJudgeService} from "./api-judge.service";
import {DebuggingJudgeComponent} from "./debuggingjudge.component";
import Problem = acmcsus.debugjudge.Problem;
import Submission = acmcsus.debugjudge.Submission;
import JudgingStatusMessage = acmcsus.debugjudge.S2JMessage.JudgingStatusMessage;
import SubmissionJudgement = acmcsus.debugjudge.SubmissionJudgement;
import {AlgorithmicJudgeComponent} from "./algorithmicjudge.component";

@Component({
  selector: 'app-judge-view',
  entryComponents: [DebuggingJudgeComponent, AlgorithmicJudgeComponent],
  template: `
    <div id="outer">
      <div id="wrapper">
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
          <mat-card-actions>
            <button mat-button (click)="startJudging()" [disabled]="judgingStatus.judging">Start</button>
            <button mat-button (click)="stopJudging()" [disabled]="!judgingStatus.judging">Stop</button>
          </mat-card-actions>
        </mat-card>
        <!-- TODO: Refactor this to its own component problemcard.component.ts -->
        <mat-card id="right">
          <mat-card-title *ngIf="statusMessage&&statusMessage.length">{{statusMessage}}</mat-card-title>
          <mat-card-title *ngIf="judgingStatus.judging && assignedSubmission">
            Now Judging: {{problemMap[assignedSubmission.problemId].title}}</mat-card-title>
          <mat-card-title *ngIf="judgingStatus.judging && !assignedSubmission">
            Waiting for submissions...</mat-card-title>
          <mat-card-content *ngIf="assignedSubmission">
            <div [ngSwitch]="assignedSubmission.value">
              <app-judge-debug
                  *ngSwitchCase="'debuggingSubmission'"
                  [problem]="problemMap[assignedSubmission.problemId]"
                  [submission]="assignedSubmission"></app-judge-debug>
              <app-judge-algorithm
                  *ngSwitchCase="'algorithmicSubmission'"
                  [problem]="problemMap[assignedSubmission.problemId]"
                  [submission]="assignedSubmission"></app-judge-algorithm>
            </div>
            
            <!--<mat-select [(ngModel)]="rulingMessage" [disabled]="!assignedSubmission">-->
              <!--<mat-option [value]="'Wrong Answer'">Wrong Answer</mat-option>-->
              <!--<mat-option [value]="'Too Many Edits'">Too Many Edits</mat-option>-->
              <!--<mat-option [value]="'Not Enough Edits'">Not Enough Edits</mat-option>-->
            <!--</mat-select>-->
          </mat-card-content>
          <mat-card-content *ngIf="!assignedSubmission">
          </mat-card-content>
          <mat-card-actions>
            <button mat-raised-button color="primary" (click)="accept()"
                    [disabled]="!assignedSubmission">Accept</button>
            <button mat-raised-button color="warn" (click)="reject()"
                    [disabled]="!assignedSubmission">Reject</button>
            <button mat-raised-button (click)="defer()"
                    [disabled]="!assignedSubmission">Defer</button>
          </mat-card-actions>
        </mat-card>
      </div>
      <div id="backRipple" matRipple [matRippleColor]="'#acb'"
           [ngStyle]="{'background-color':bkgdColor}"></div>
    </div>
  `,
  styles: [`
    #outer {
      width: 100%;
      /*height: 100%;*/
      position: relative;
    }

    #wrapper {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      width: 100%;
      /*height: 100%;*/
    }

    #left {
      /*width: 200px;*/
      max-width: 30%;
    }

    #left button {
      display: block;
      margin: auto;
      width: 100%;
    }

    /deep/ .mat-button-wrapper, /deep/ .mat-button {
      white-space: normal !important;
      line-height: 1rem !important;
      padding: .5rem !important;
    }

    #right {
      flex: 1;
    }

    #left mat-progress-spinner {
      height: 20%;
      width: 20%;
    }

    mat-card, #right {
      display: inline-block;
      margin: 10px;
    }

    #backRipple {
      z-index: -99 !important;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 50px;
    }
  `],
})
export class JudgeComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(MatRipple) ripple: MatRipple;

  bkgdColor = '#fff';

  problems: Problem[];
  problemMap: {};
  assignedSubmission: Submission;
  judgingStatus: JudgingStatusMessage;

  rulingMessage: string;

  problemSubscription: Subscription;
  assignmentSubscription: Subscription;
  judgingStatusSubscription: Subscription;

  statusMessage = "Loading...";

  problemWhitelist = {};

  constructor(@Inject('ApiJudgeService') private api: ApiJudgeService,
              @Inject('ApiWebSocketService') private wsApi: ApiWebSocketService) {
  }

  ngOnInit(): void {
    this.problems = [];
    this.problemMap = new Map<number, Problem>();
    this.assignedSubmission = null;
    this.judgingStatus = JudgingStatusMessage.create();
    this.setBanner(0);

    this.problemSubscription = this.api.problems.subscribe(
        (problems) => {
          let problemMap = {};

          for (let problem of problems) {
            problemMap[problem.id] = problem;
            if (this.problemWhitelist[problem.id] === undefined) {
              this.problemWhitelist[problem.id] = true;
            }
          }
          this.problemMap = problemMap;
          this.problems = problems;
        });
    this.assignmentSubscription = this.api.assignedSubmission.subscribe(
        (assignment) => {
          if (assignment && assignment.problemId) {
            this.assignedSubmission = assignment;
            this.setBanner(this.assignedSubmission.problemId);
            this.rulingMessage = 'Wrong Answer';
          }
          else {
            this.assignedSubmission = null;
            this.setBanner(0);
          }
        });
    this.judgingStatusSubscription = this.api.judgingStatus.subscribe(
        (judgingStatus) => {
          this.judgingStatus = judgingStatus;
          if (judgingStatus.message) {
            this.statusMessage = judgingStatus.message;
          }
          else {
            if (judgingStatus.judging) {
              this.statusMessage = ""
            }
            else {
              this.statusMessage = "Press \"Start\" to begin judging."
            }
          }
        });
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    this.problemSubscription.unsubscribe();
    this.assignmentSubscription.unsubscribe();
    this.judgingStatusSubscription.unsubscribe();
  }

  updatePreferences(): void {
    this.api.updatePreferences(this.problemWhitelist);
  }

  startJudging(): void {
    this.api.startJudging();
  }

  stopJudging(): void {
    this.api.stopJudging();
  }

  accept() {
    this.api.submitJudgement(
        this.assignedSubmission,
        SubmissionJudgement.JUDGEMENT_SUCCESS,
        'Correct Answer');
  }
  reject() {
    this.api.submitJudgement(
        this.assignedSubmission,
        SubmissionJudgement.JUDGEMENT_FAILURE,
        this.rulingMessage);
  }
  defer() {
    this.api.submitJudgement(this.assignedSubmission, SubmissionJudgement.JUDGEMENT_UNKNOWN, '');
  }

  setBanner(problemId: number): void {
    let color = (((this.problemMap[problemId]||{}).color) || '#cccccc');
    const rippleRef = this.ripple.launch(0, 0, {
      persistent: true,
      color: color,
    });
    setTimeout(() => {
      this.bkgdColor = color;
      rippleRef.fadeOut();
    }, 200);
  }
}
