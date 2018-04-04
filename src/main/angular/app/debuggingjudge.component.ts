import {Component, Inject, Input, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiTeamService} from "./api-team.service";
import {CodeEditorComponent} from "./codeeditor.component";
import {acmcsus} from "./proto/dbgjdg_pb";
import Submission = acmcsus.debugjudge.Submission;
import Problem = acmcsus.debugjudge.Problem;

@Component({
  selector: 'app-judge-debug',
  entryComponents: [CodeEditorComponent],
  template: `
      <div id="sideBySide">
        <app-code-editor
            [precode]="problem.debuggingProblem.precode"
            [code]="problem.debuggingProblem.code"
            [postcode]="problem.debuggingProblem.postcode"
            [readonly]="true"></app-code-editor>
        <app-code-editor
            [precode]="problem.debuggingProblem.precode"
            [code]="submission.debuggingSubmission.code"
            [postcode]="problem.debuggingProblem.postcode"
            [readonly]="true"></app-code-editor>
        <app-code-editor
            [precode]="problem.debuggingProblem.precode"
            [code]="problem.debuggingProblem.answer"
            [postcode]="problem.debuggingProblem.postcode"
            [readonly]="true"></app-code-editor>
      </div>
  `,
  styles: [`
      #sideBySide {
        display: flex;
        flex-direction: row;
        align-content: stretch;
      }
      app-code-editor {
        flex: 1;
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
