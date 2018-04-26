import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CodeEditorComponent} from "./codeeditor.component";
import {acmcsus} from "./proto/dbgjdg_pb";
import Submission = acmcsus.debugjudge.Submission;
import SubmissionJudgement = acmcsus.debugjudge.SubmissionJudgement;
import Problem = acmcsus.debugjudge.Problem;

@Component({
  selector: 'app-judge-algorithm',
  entryComponents: [CodeEditorComponent],
  template: `
      <span *ngIf="compileError">Compile Error!</span>
      <span *ngIf="submission.algorithmicSubmission.preliminaryJudgement">
        Prelim:
        {{judgementNames[submission.algorithmicSubmission.preliminaryJudgement]}}
        {{submission.algorithmicSubmission.preliminaryJudgementMessage}}</span>
     <mat-tab-group *ngIf="!compileError">
      <mat-tab *ngFor="let testCase of problem.algorithmicProblem.testCase; let idx = index;"
               label="Case {{idx}}">
        <div id="sideBySide">
          <div>
            <mat-card-subtitle>Input</mat-card-subtitle>
            <app-code-editor
                [precode]="''"
                [code]="testCase.input"
                [postcode]="''"
                [readonly]="true"></app-code-editor>
          </div>
          <div>
            <mat-card-subtitle>Expected</mat-card-subtitle>
            <app-code-editor
                [precode]="''"
                [code]="testCase.expected"
                [postcode]="''"
                [readonly]="true"></app-code-editor>
          </div>
          <div>
            <mat-card-subtitle>Result Out</mat-card-subtitle>
            <app-code-editor
              [precode]="''"
              [code]="submission.algorithmicSubmission.caseResults[idx].resultOut"
              [postcode]="''"
              [readonly]="true">
            </app-code-editor>
          </div>
          <div>
            <mat-card-subtitle>Result Err</mat-card-subtitle>
            <app-code-editor
                [precode]="''"
                [code]="submission.algorithmicSubmission.caseResults[idx].resultErr"
                [postcode]="''"
                [readonly]="true"></app-code-editor>
          </div>
        </div>
        <div>
          <mat-card-subtitle>Expected vs Actual</mat-card-subtitle>
          <app-diff [oldString]="testCase.expected"
                    [newString]="submission.algorithmicSubmission.caseResults[idx].resultOut">
          </app-diff>
        </div>
      </mat-tab>
    </mat-tab-group>
  `,
  styles: [`
    #sideBySide {
      display: flex;
      flex-direction: row;
      align-content: stretch;
    }

    #sideBySide div {
      flex: 1;
    }

    mat-card-subtitle {
      margin-bottom: 0;
    }
  `],
})
export class AlgorithmicJudgeComponent implements OnInit, OnDestroy {

  readonly judgementNames = SubmissionJudgement;

  _problem: Problem;

  _submission: Submission;

  compileError: boolean;

  constructor() {
  }

  @Input("problem")
  set problem(problem: Problem) {
    this._problem = problem;
  }

  get problem(): Problem {
    return this._problem;
  }

  @Input("submission")
  set submission(submission: Submission) {
    this._submission = submission;
    this.update();
  }

  get submission(): Submission {
    return this._submission;
  }

  update() {
    this.compileError = false;
    for (let idx = 0; idx < this._problem.algorithmicProblem.testCase.length; idx++) {
      if (!this._submission || !this._submission.algorithmicSubmission.caseResults[idx]) {
        this.compileError = true;
        break;
      }
    }
  }

  ngOnInit() {

  }

  ngOnDestroy() {
  }

}
