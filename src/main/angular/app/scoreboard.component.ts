import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {acmcsus} from "./proto/dbgjdg_pb";
import {ApiWebSocketService} from "./api-ws.service";
import Scoreboard = acmcsus.debugjudge.Scoreboard;
import * as Long from "long";

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
              <td class="problemName"
                  *ngFor="let problem of problems"
                  [title]="problem.title">
                {{problem.orderIndex}}
              </td>
              <td>Correct</td>
              <td>Penalty</td>
            </tr>
          </thead>
          <tr *ngFor="let row of scoreboard.row">
            <td>{{row.place}}</td>
            <td>{{row.profileName}}</td>
            <td [ngClass]="{'green':row.problemCompletions[problem.id]}"
                *ngFor="let problem of problems">
              {{row.problemAttempts[problem.id] || 0}}
            </td>
            <td>{{row.correct}}</td>
            <td>{{row.penalty}}</td>
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
  `],
})
export class ScoreboardComponent implements OnInit, OnDestroy {

  scoreboard: Scoreboard;
  lastUpdateString: string;

  s2cSubscription: Subscription;

  constructor(@Inject("ApiWebSocketService") private apiWs: ApiWebSocketService) {}

  ngOnInit() {
    this.s2cSubscription = this.apiWs.s2cMessages.subscribe((s2cMessage) => {
      if (s2cMessage.value === "scoreboardUpdateMessage") {
        this.scoreboard = Scoreboard.create(s2cMessage.scoreboardUpdateMessage.scoreboard);

        let d = new Date();
        console.log(this.scoreboard.updateTimeMillis);
        console.log(Long.fromValue(this.scoreboard.updateTimeMillis).toNumber());
        d.setUTCMilliseconds(Long.fromValue(this.scoreboard.updateTimeMillis).toNumber());
        this.lastUpdateString = d.toTimeString();
      }
    });
  }

  ngOnDestroy() {
    this.s2cSubscription.unsubscribe();
  }
}
