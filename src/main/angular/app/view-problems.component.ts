import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {ApiTeamService} from './api-team.service';
import {ApiWebSocketService} from './api-ws.service';
import {Subscription} from 'rxjs/Subscription';
import {DebuggingCardComponent} from "./debuggingcard.component";

import {acmcsus} from "./proto/dbgjdg_pb";
import CompetitionState = acmcsus.debugjudge.CompetitionState;
import Problem = acmcsus.debugjudge.Problem;

@Component({
  selector: 'app-problems-view',
  entryComponents: [DebuggingCardComponent],
  template: `
    <div id="outer">
      <div id="team-wrapper">
        <!-- TODO: Refactor this to its own component problemcard.component.ts -->
        <mat-card *ngIf="!(problems && problems.length)">
          <mat-card-title>{{statusMessage}}</mat-card-title>
        </mat-card>
        <div class="problemDiv" *ngFor="let problem of problems">
          <mat-card>
            <mat-card-title>{{problem.title}}</mat-card-title>
            <mat-card-subtitle *ngIf="problem.algorithmicProblem">
              Max Runtime: {{problem.algorithmicProblem.timeLimitSeconds}} Seconds
            </mat-card-subtitle>
            <hr/>
            <div id="descriptionHtml" class="descriptionHtml"
                 [innerHtml]="problem.descriptionText"></div>
          </mat-card>
        </div>
      </div>
    </div>
  `,
  styles: [`
    mat-card {
      margin: 10px;
      page-break-before: always;
    }
    /deep/p, /deep/ol, /deep/ul {
      margin-top: 0;
      line-height: 1.2em;
    }
    /deep/h4 {
      margin-bottom: .1em;
    }
    hr {
      display: none;
    }
    @media print {
      .problemDiv {
        display: flex;
        margin: 0;
        padding: .25in;
        min-height: 11in;
        box-sizing: border-box;
      }
      mat-card {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        flex: 1;
      }
      hr {
        display: initial;
        width: 4in;
        margin: .2in auto;
      }
      mat-card-title {
        text-align: center;
        font-family: "Roboto Mono Light";
        font-size: 24pt;
        line-height: 1.2em;
        margin-bottom: 0;
      }
      mat-card-subtitle {
        text-align: center;
        font-family: "Roboto Mono Light";
        font-size: 12pt;
        line-height: 1.2em;
        margin-bottom: 0;
      }
      .descriptionHtml {
        display: flex;
        flex: 1;
        flex-direction: column;
      }
      .descriptionHtml * {
        flex: 0;
      }
      /deep/.descriptionHtml .descriptionIO {
        margin-top: auto;
      }
    }
  `],
})
export class ProblemsViewComponent implements OnInit, OnDestroy {

  problems: Problem[];

  competitionStateSubscription: Subscription;
  problemSubscription: Subscription;

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
    });
  }

  ngOnDestroy(): void {
    this.competitionStateSubscription.unsubscribe();
    this.problemSubscription.unsubscribe();
  }
}
