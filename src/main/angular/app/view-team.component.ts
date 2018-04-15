import {AfterViewInit, Component, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatRipple} from '@angular/material';
import {ApiTeamService} from './api-team.service';
import {ApiWebSocketService} from './api-ws.service';
import {Subscription} from 'rxjs/Subscription';
import {DebuggingCardComponent} from "./debuggingcard.component";

import {acmcsus} from "./proto/dbgjdg_pb";
import CompetitionState = acmcsus.debugjudge.CompetitionState;
import Problem = acmcsus.debugjudge.Problem;

@Component({
  selector: 'app-team-view',
  entryComponents: [DebuggingCardComponent],
  template: `
    <div id="outer">
      <div id="team-wrapper">
        <mat-card id="left" style="padding: 0">
          <mat-card-content style="display: flex; flex-direction: column;"
                            *ngIf="problems&&problems.length">
            <span *ngFor="let problem of problems; let idx = index; let isLast=last">
              <button mat-button [ngClass]="{'green': solvedProblems[problem.id]}"
                      (click)="problemClicked(idx)">{{problem.title}}</button>
              <mat-divider *ngIf="!isLast"></mat-divider>
            </span>
          </mat-card-content>
          <mat-card-content *ngIf="!(problems && problems.length)">
            <button mat-button [disabled]="true">Problems</button>
            <mat-divider></mat-divider>
            <button mat-button [disabled]="true">Will</button>
            <mat-divider></mat-divider>
            <button mat-button [disabled]="true">Be</button>
            <mat-divider></mat-divider>
            <button mat-button [disabled]="true">Listed</button>
            <mat-divider></mat-divider>
            <button mat-button [disabled]="true">Here</button>
          </mat-card-content>
        </mat-card>
        <!-- TODO: Refactor this to its own component problemcard.component.ts -->
        <div id="right" *ngIf="problems && problems.length">
          <app-problem-debug *ngFor="let problem of problems"
                             [hidden]="problem.id!==problems[problemIdx].id"
                             [solved]="solvedProblems[problem.id]"
                             [problem]="problem"></app-problem-debug>
        </div>
        <mat-card id="right" *ngIf="!(problems && problems.length)">
          <mat-card-title>{{statusMessage}}</mat-card-title>
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

    #team-wrapper {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      width: 100%;
      /*height: 100%;*/
    }

    #left {
      /*width: 200px;*/
      max-width: 30%;
      flex-direction: column;
      align-items: stretch;
    }

    #left button {
      display: block;
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

    .green {
      text-decoration-line: line-through;
      background-color: #aeb;
    }
  `],
})
export class TeamComponent implements OnInit, AfterViewInit, OnDestroy {

  static colorFail = '#caa';
  static colorSuccess = '#acb';

  @ViewChild(MatRipple) ripple: MatRipple;

  bkgdColor = '#fff';

  solvedProblems: {[p: number]: boolean};
  problems: Problem[];
  problemIdx = 0;

  competitionStateSubscription: Subscription;
  problemSubscription: Subscription;
  solvedSubscription: Subscription;

  statusMessage = "Loading...";

  constructor(@Inject('ApiTeamService') private api: ApiTeamService,
              @Inject('ApiWebSocketService') private wsApi: ApiWebSocketService) {
  }

  ngOnInit(): void {
    this.wsApi.competitionState.subscribe((state) => {
      console.log('STATE CHANGE!', state, CompetitionState);

      if (state === CompetitionState.WAITING) {
        this.statusMessage = "Hold tight! Competition starting soon.";
      }
      else if (state === CompetitionState.PAUSED) {
        this.statusMessage = "Hold tight! Competition is paused!";
      }
      else if (state === CompetitionState.STARTED) {
        this.statusMessage = "Loading...";
      }
      else if (state === CompetitionState.STOPPED) {
        this.statusMessage = "Competition has ended!";
      }
      else {
        this.statusMessage = "Competition is in some magical state the frontend doesn't recognize!";
      }
    });

    this.problemSubscription = this.api.problems.subscribe((problems) => {
      this.problems = problems;
      this.problems.sort((a, b) => a.orderIndex - b.orderIndex);
      this.problemClicked(this.problemIdx);
    });

    this.solvedSubscription = this.api.solvedProblems.subscribe((solvedProblems) => {
      this.solvedProblems = solvedProblems;
      console.log('solved', this.solvedProblems)
    });
  }

  ngAfterViewInit(): void {
    this.problemClicked(0);
  }

  ngOnDestroy(): void {
    this.competitionStateSubscription.unsubscribe();
    this.problemSubscription.unsubscribe();
    this.solvedSubscription.unsubscribe();
  }

  problemClicked(problem: number): void {
    this.problemIdx = problem;
    let color = ((this.problems[problem] || {})['color'] || '#cccccc');
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
