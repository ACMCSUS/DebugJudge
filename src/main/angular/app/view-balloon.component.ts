import {AfterViewInit, Component, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatRipple} from '@angular/material';
import {ApiWebSocketService} from './api-ws.service';
import {Subscription} from 'rxjs/Subscription';

import {acmcsus} from "./proto/dbgjdg_pb";
import {ApiBalloonService} from "./api-balloon.service";
import {DebuggingJudgeComponent} from "./debuggingjudge.component";
import Problem = acmcsus.debugjudge.Problem;
import Submission = acmcsus.debugjudge.Submission;
import BalloonRunningStatusMessage = acmcsus.debugjudge.S2BMessage.BalloonRunningStatusMessage;
import AssignedDeliveryMessage = acmcsus.debugjudge.S2BMessage.AssignedDeliveryMessage;
import {AlgorithmicJudgeComponent} from "./algorithmicjudge.component";

@Component({
  selector: 'app-balloon-view',
  entryComponents: [],
  template: `
    <div id="outer">
      <div id="wrapper">
        <mat-card id="left">
          <mat-card-actions>
            <button mat-button (click)="startRunning()" [disabled]="runningStatus.running">Start</button>
            <button mat-button (click)="stopRunning()" [disabled]="!runningStatus.running">Stop</button>
          </mat-card-actions>
        </mat-card>
        <!-- TODO: Refactor this to its own component problemcard.component.ts -->
        <mat-card id="right">
          <mat-card-title *ngIf="statusMessage&&statusMessage.length">{{statusMessage}}</mat-card-title>
          <mat-card-title *ngIf="runningStatus.running && assignedDelivery">
            Delivering For Problem: {{problemMap[assignedDelivery.problemId].title}}</mat-card-title>
          <mat-card-title *ngIf="runningStatus.running && !assignedDelivery">
            Waiting for deliveries...</mat-card-title>
          <mat-card-content *ngIf="assignedDelivery">
            <div>
              <h2>Team ID: {{assignedDelivery.teamId}}</h2>
              <h2>Problem ID: {{assignedDelivery.problemId}}</h2>
            </div>
          </mat-card-content>
          <mat-card-actions>
            <button mat-raised-button color="primary" (click)="delivered()"
                    [disabled]="!assignedDelivery">Delivered!</button>
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
export class BalloonComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(MatRipple) ripple: MatRipple;

  bkgdColor = '#fff';

  problems: Problem[];
  problemMap: {};
  assignedDelivery: AssignedDeliveryMessage;
  runningStatus: BalloonRunningStatusMessage;

  rulingMessage: string;

  problemSubscription: Subscription;
  assignmentSubscription: Subscription;
  runningStatusSubscription: Subscription;

  statusMessage = "Loading...";

  problemWhitelist = {};

  constructor(@Inject('ApiBalloonService') private api: ApiBalloonService,
              @Inject('ApiWebSocketService') private wsApi: ApiWebSocketService) {
  }

  ngOnInit(): void {
    this.problems = [];
    this.problemMap = new Map<number, Problem>();
    this.assignedDelivery = null;
    this.runningStatus = BalloonRunningStatusMessage.create();
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
    this.assignmentSubscription = this.api.assignedDelivery.subscribe(
        (assignment) => {
          if (assignment && assignment.problemId) {
            this.assignedDelivery = assignment;
            this.setBanner(this.assignedDelivery.problemId);
            this.rulingMessage = 'Wrong Answer';
          }
          else {
            this.assignedDelivery = null;
            this.setBanner(0);
          }
        });
    this.runningStatusSubscription = this.api.runningStatus.subscribe(
        (runningStatus) => {
          this.runningStatus = runningStatus;
          if (runningStatus.running) {
            this.statusMessage = ""
          }
          else {
            this.statusMessage = "Press \"Start\" to begin running."
          }
        });
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    this.problemSubscription.unsubscribe();
    this.assignmentSubscription.unsubscribe();
    this.runningStatusSubscription.unsubscribe();
  }

  startRunning(): void {
    this.api.startRunning();
  }

  stopRunning(): void {
    this.api.stopRunning();
  }

  delivered() {
    this.api.balloonDelivered(this.assignedDelivery);
  }
  // defer() {
  //   this.api.submitJudgement(this.assignedDelivery, SubmissionJudgement.JUDGEMENT_UNKNOWN, '');
  // }

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
