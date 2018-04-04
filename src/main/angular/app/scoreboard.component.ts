import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {acmcsus} from "./proto/dbgjdg_pb";
import {ApiWebSocketService} from "./api-ws.service";
import Scoreboard = acmcsus.debugjudge.Scoreboard;
import * as Long from "long";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import Problem = acmcsus.debugjudge.Problem;

@Component({
  selector: 'app-scoreboard',
  template: `
    <mat-card>
      <mat-card-title>Team Standings</mat-card-title>

      <mat-card-content>
        <table border="1" *ngIf="scoreboard && scoreboard.row.length">
          <thead>
            <tr>
              <td colspan="4"></td>
              <td colSpan="{{problems && problems.length}}">Problems (hover)</td>
            </tr>
            <tr>
              <td>Place</td>
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
      </mat-card-content>

      <span>During the competition, this scoreboard will be updated every 30 seconds.</span>
      <span *ngIf="!(scoreboard && scoreboard.row.length)">Problems and team standings will be visible here shortly after the competition begins.</span>
      <span *ngIf="scoreboard">The last scoreboard update was at {{lastUpdateString}}</span>

    </mat-card>
  `,
  styles: [`
    mat-card {
      margin: 15px;
    }
    .green {
      background-color: #aeb;
    }
  `],
})
export class ScoreboardComponent implements OnInit, OnDestroy {

  scoreboard: Scoreboard;
  problems: Problem[];

  lastUpdateString: string;

  s2cSubscription: Subscription;

  constructor(@Inject("ApiWebSocketService") private apiWs: ApiWebSocketService) {}

  ngOnInit() {
    this.s2cSubscription = this.apiWs.s2cMessages.subscribe((s2cMessage) => {
      if (s2cMessage.value === "scoreboardUpdateMessage") {
        this.scoreboard = Scoreboard.create(s2cMessage.scoreboardUpdateMessage.scoreboard);

        let d = new Date();
        d.setUTCMilliseconds(Long.fromValue(this.scoreboard.updateTimeMillis).toNumber());
        this.lastUpdateString = d.toTimeString();
      }
      else if (s2cMessage.value == "reloadProblemsMessage") {
        this.problems = s2cMessage.reloadProblemsMessage.problems.value.map(Problem.create);
        this.problems.sort((a, b) => a.orderIndex - b.orderIndex)
      }
    });
  }

  ngOnDestroy() {
    this.s2cSubscription.unsubscribe();
  }
}
