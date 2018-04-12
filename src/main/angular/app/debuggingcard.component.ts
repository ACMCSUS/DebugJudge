import {Component, Inject, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiTeamService} from "./api-team.service";
import {CodeEditorComponent} from "./codeeditor.component";
import {acmcsus} from "./proto/dbgjdg_pb";
import Submission = acmcsus.debugjudge.Submission;
import Problem = acmcsus.debugjudge.Problem;

@Component({
  selector: 'app-problem-debug',
  entryComponents: [CodeEditorComponent],
  template: `
    <mat-card>
      <mat-card-title>
        {{problem.title}}
        <span *ngIf="solved" style="color: green">SOLVED!</span>
      </mat-card-title>

      <mat-card-content>
        <div id="descriptionHtml" class="descriptionHtml"
             [innerHtml]="problem.descriptionText"></div>

        <mat-card-title
            style="font-size: 16px; margin-top: 15px; margin-bottom: 5px">
          Fix the code below:
        </mat-card-title>
        <mat-checkbox color="primary" [(ngModel)]="showDiff">Show Diff</mat-checkbox>

        <div class="sideBySide">
          <app-code-editor
              [readonly]="solved"
              [precode]="problem.debuggingProblem.precode"
              [postcode]="problem.debuggingProblem.postcode"
          ></app-code-editor>
          <app-diff *ngIf="showDiff"
                    [oldString]="problem.debuggingProblem.code"
                    [newString]="editor.code"></app-diff>
        </div>
      </mat-card-content>

      <mat-card-actions>
        <button mat-button (click)="submit();" [disabled]="solved">Submit</button>
        <button mat-button (click)="reset();" [disabled]="solved">Reset</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [`
    #submissionsCard {
      margin-bottom: 2em;
    }

    #submissionsCard #submissionsList {
      min-height: 0;
      max-height: 0;
      border: 0;
      overflow-x: auto;
      overflow-y: scroll;
      transition-property: min-height, max-height;
      transition-duration: .2s;
      transition-timing-function: ease;
    }

    #submissionsCard:hover #submissionsList {
      min-height: 6em;
      max-height: 12em;
    }

    #submissionsCard mat-card-subtitle {
      margin-bottom: 0;
      transition-property: margin-bottom;
      transition-duration: .1s;
      transition-timing-function: ease;
    }

    #submissionsCard:hover mat-card-subtitle {
      margin-bottom: inherit;
    }
  `],
})
export class DebuggingCardComponent implements OnInit, OnDestroy {

  @Input("problem")
  problem: Problem;

  @Input("solved")
  solved = false;

  @ViewChild(CodeEditorComponent)
  editor: CodeEditorComponent;

  showDiff = false;

  constructor(@Inject(HttpClient) private http: HttpClient,
              @Inject("ApiTeamService") private apiTeam: ApiTeamService) {
  }

  ngOnInit() {
    this.reset();
  }

  ngOnDestroy() {
  }

  submit(): void {
    console.log(this.editor.code);
    this.apiTeam.submit(new Submission({
      problemId: this.problem.id,
      debuggingSubmission: {
        code: this.editor.code,
      }
    }));
  }

  reset(): void {
    this.editor.code = "" + this.problem.debuggingProblem.code;
  }
}
