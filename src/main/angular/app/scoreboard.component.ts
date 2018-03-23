import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {HttpClient} from '@angular/common/http';
import {IntervalObservable} from 'rxjs/observable/IntervalObservable';

@Component({
  selector: 'app-scoreboard',
  template: `
    <mat-card>
      <mat-card-title>Team Standings</mat-card-title>
      
      <span *ngIf="!(problems && problems.length)">Problems and team standings will be visible here when the competition begins.</span>

      <mat-card-content>
        <table border="1" *ngIf="problems">
          <thead>
            <tr>
              <td colspan="4"></td>
              <td colSpan="{{problems.length}}">Problems (hover)</td>
            </tr>
            <tr>
              <td>Place</td>
              <td>Correct</td>
              <td>Penalty</td>
              <td>Team</td>
              <td class="problemName"
                  *ngFor="let problem of problems"
                  [title]="problem.title">
                {{problem.orderIndex}}
              </td>
            </tr>
          </thead>
          <tr *ngFor="let team of teams">
            <td>{{team.place}}</td>
            <td>{{team.score.correct}}</td>
            <td>{{team.score.penalty}}</td>
            <td>{{team.name}}</td>
            <td [ngClass]="{'green':(teamAcceptances[team.id]||{})[problem.id]}"
                *ngFor="let problem of problems">
              {{(teamSubmissionCounts[team.id] || {})[problem.id] || 0}}
            </td>
          </tr>
        </table>
      </mat-card-content>

      <mat-card-actions>
        <button mat-button (click)="refresh();">Refresh</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [`
    mat-card {
      margin: 15px;
    }
  `],
})
export class ScoreboardComponent implements OnInit, OnDestroy {
  problems: {}[];

  teams: {}[];
  teamSubmissionCounts: {};
  teamAcceptances: {};

  refreshSubscription: Subscription;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.refresh();
    this.refreshSubscription = IntervalObservable
      .create(10000)
      .subscribe(() => this.refresh());
  }

  ngOnDestroy() {
    this.refreshSubscription.unsubscribe();
  }

  refresh(): void {
    this.http.get<{}>('/api/scoreboard').subscribe((data) => {
      this.problems = data['problems'];
      this.teams = data['teams'];
      this.teamSubmissionCounts = data['teamSubmissionCounts'];
      this.teamAcceptances = data['teamAcceptances'];
    });
  }
}
