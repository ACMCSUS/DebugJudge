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

  template: `

<div id="problemCards">
  <div *ngIf="problems.length == 0">
    <md-card>
      <md-card-title>Problems will appear here.</md-card-title>
      <md-card-subtitle>Problem language will appear here</md-card-subtitle>
      <code-editor
        [precode]="'// Uneditable code section'"
        [postcode]="'// Uneditable code section'"
        [code]="'// This is where the broken code appears'"></code-editor>
    </md-card>
  </div>
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
}
