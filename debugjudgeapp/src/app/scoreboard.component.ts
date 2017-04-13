import {Component} from "@angular/core";
import {Http} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent {

  problems: {}[];

  teams: {}[];
  teamSubmissionCounts: {};
  teamAcceptances: {};

  constructor(private http: Http) {
    this.refresh();
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
