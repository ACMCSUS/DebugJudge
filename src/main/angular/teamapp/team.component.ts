import {Component, OnInit, OnDestroy, Inject} from '@angular/core';

import {ApiService} from 'lib/api.service';
import {Submission} from 'lib/models/submission';
import {Problem} from 'lib/models/problem';
import {ProblemCardComponent} from 'teamapp/problemcard.component';
import {Subscription} from 'rxjs/Rx';

@Component({
  selector: 'dbgjdg-team-view',
  styleUrls: ['./team.component.css'],
  entryComponents: [ProblemCardComponent],

  template: `
<div id="problemCards">
  <div *ngIf="problems.length == 0">
    <mat-card>
      <mat-card-title>Problems will appear here.</mat-card-title>
      <mat-card-subtitle>Problem language will appear here</mat-card-subtitle>
      <dbgjdg-code-editor
        [precode]="'// Uneditable code section'"
        [postcode]="'// Uneditable code section'"
        [code]="'// This is where the broken code appears'"></dbgjdg-code-editor>
    </mat-card>
  </div>
  <div class="problemcardWrapper" *ngFor="let problem of problems">
    <dbgjdg-problem-card [problem]="problem"></dbgjdg-problem-card>
  </div>
</div>`,
})
export class TeamComponent implements OnInit, OnDestroy {

  problems: Problem[] = [];
  submissions: Submission[] = [];

  problemSubscription: Subscription;
  submissionSubscription: Subscription;

  constructor(@Inject('ApiService') private apiService: ApiService) {
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
