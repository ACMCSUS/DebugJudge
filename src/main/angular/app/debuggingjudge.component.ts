import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CodeEditorComponent} from "./codeeditor.component";
import {acmcsus} from "./proto/dbgjdg_pb";
import Submission = acmcsus.debugjudge.Submission;
import Problem = acmcsus.debugjudge.Problem;

@Component({
  selector: 'app-judge-debug',
  entryComponents: [CodeEditorComponent],
  template: `
    <div id="sideBySide">
      <div>
        <mat-card-subtitle>Original</mat-card-subtitle>
        <app-code-editor
            [precode]="problem.debuggingProblem.precode"
            [code]="problem.debuggingProblem.code"
            [postcode]="problem.debuggingProblem.postcode"
            [readonly]="true"></app-code-editor>
      </div>
      <div>
        <mat-card-subtitle>Submission</mat-card-subtitle>
        <app-code-editor
            [precode]="problem.debuggingProblem.precode"
            [code]="submission.debuggingSubmission.code"
            [postcode]="problem.debuggingProblem.postcode"
            [readonly]="true"></app-code-editor>
      </div>
      <div>
        <mat-card-subtitle>Answer</mat-card-subtitle>
        <app-code-editor
            [precode]="problem.debuggingProblem.precode"
            [code]="problem.debuggingProblem.answer"
            [postcode]="problem.debuggingProblem.postcode"
            [readonly]="true"></app-code-editor>
      </div>
    </div>

    <div id="sideBySide">
      <div>
        <mat-card-subtitle>Original vs Submission</mat-card-subtitle>
        <app-diff [oldString]="problem.debuggingProblem.code"
                  [newString]="submission.debuggingSubmission.code"></app-diff>
      </div>
      <div>
        <mat-card-subtitle>Original vs Answer</mat-card-subtitle>
        <app-diff [oldString]="problem.debuggingProblem.code"
                  [newString]="problem.debuggingProblem.answer"></app-diff>
      </div>
    </div>
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
export class DebuggingJudgeComponent implements OnInit, OnDestroy {

  @Input("problem")
  problem: Problem;

  @Input("submission")
  submission: Submission;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
