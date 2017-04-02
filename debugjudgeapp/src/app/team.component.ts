import {Component, OnInit, OnDestroy} from '@angular/core';

import {ApiService} from './api';
import {Submission} from "./models/submission";
import {Problem} from "./models/problem";
import {ProblemCardComponent} from "./problemcard.component";
import {Subscription} from "@reactivex/rxjs";

@Component({
  selector: 'team-view',
  styleUrls: ['./team.component.css'],
  entryComponents: [ ProblemCardComponent ],

  template: `<div id="problemCards">
  <div class="problemcardWrapper" *ngFor="let problem of problems">
    <problem-card [problem]="problem"></problem-card>
  </div>
</div>`,
})
export class TeamComponent implements OnInit, OnDestroy {

  problems: Problem[] = [];
  submissions: Submission[] = [];

  problemSubscription : Subscription;
  submissionSubscription : Subscription;

  constructor(private apiService: ApiService) {
    this.problemSubscription = this.apiService.problems.asObservable()
      .subscribe(problems => this.problems = problems);

    this.submissionSubscription = this.apiService.submissions.asObservable()
      .subscribe(submissions => this.submissions = submissions);
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.problemSubscription.unsubscribe();
    this.submissionSubscription.unsubscribe();
  }
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
