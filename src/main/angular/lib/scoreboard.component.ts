import {Component, OnDestroy, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {Observable, Subscription} from '@reactivex/rxjs';

@Component({
  selector: 'dbgjdg-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css'],
})
export class ScoreboardComponent implements OnInit, OnDestroy {

  problems: {}[];

  teams: {}[];
  teamSubmissionCounts: {};
  teamAcceptances: {};

  refreshSubscription: Subscription;

  constructor(private http: Http, private router: Router) {}

  ngOnInit() {
    this.refresh();
    this.refreshSubscription = Observable.interval(10000)
      .subscribe(() => this.refresh());
  }

  ngOnDestroy() {
    this.refreshSubscription.unsubscribe();
  }

  refresh(): void {
    this.http.get('/api/scoreboard').subscribe((res) => {
      const data = res.json();
      this.problems = data.problems;
      this.teams = data.teams;
      this.teamSubmissionCounts = data.teamSubmissionCounts;
      this.teamAcceptances = data.teamAcceptances;
    });
  }

}
