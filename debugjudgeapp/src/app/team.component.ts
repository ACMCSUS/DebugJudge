import {Component, OnInit} from '@angular/core';

import {ApiService} from './api';
import {Submission} from "./models/submission";
import {Problem} from "./models/problem";
import {ProblemCardComponent} from "./problemcard.component";

@Component({
  selector: 'team-view',
  styleUrls: ['./team.component.css'],
  entryComponents: [ ProblemCardComponent ],
  providers: [ ApiService ],

  template: `<div id="problemCards">
  <div class="problemcardWrapper" *ngFor="let problem of problems">
    <problem-card [problem]="problem"></problem-card>
  </div>
</div>`,
})
export class TeamComponent implements OnInit {

  problems: Problem[] = [];
  submissions: Submission[] = [];

  constructor(private apiService: ApiService){}

  ngOnInit() {
    this.getProblems();
    this.getSubmissions()
  }

  getProblems() {
    this.apiService.getProblems().then(problems => { this.problems = problems});
  }
  getSubmissions() {
    this.apiService.getSubmissions().then(submissions => { this.submissions = submissions});
  }

}
