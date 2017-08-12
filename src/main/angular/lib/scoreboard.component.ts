import {Component, OnDestroy, OnInit} from "@angular/core";
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {Observable, Subscription} from "@reactivex/rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit, OnDestroy {
  constructor(private http: Http, private router: Router) {}

  problems: {}[];

  teams: {}[];
  teamSubmissionCounts: {};
  teamAcceptances: {};

  refreshSubscription: Subscription;

  ngOnInit() {
    this.refresh();
    this.refreshSubscription = Observable.interval(10000)
      .subscribe(() => this.refresh());
  }

  ngOnDestroy() {
    this.refreshSubscription.unsubscribe();
  }

  refresh():void {
    this.http.get("/api/scoreboard").subscribe((res) => {
      let data = res.json();
      this.problems = data.problems;
      this.teams = data.teams;
      this.teamSubmissionCounts = data.teamSubmissionCounts;
      this.teamAcceptances = data.teamAcceptances;
    });
  }

}
