import {Component, Inject, Input, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Problem} from "./model";
import {ApiTeamService} from "./api-team.service";
import {CodeEditorComponent} from "./codeeditor.component";
import {acmcsus} from 'proto';
import Submission = acmcsus.debugjudge.Submission;

@Component({
  selector: 'app-problem-debug',
  entryComponents: [CodeEditorComponent],
  template: `
    <mat-card>
      <mat-card-title>{{problem.title}}</mat-card-title>

      <mat-card-content>
        <p>{{problem.description}}</p>
        <app-code-editor
          [precode]="problem.debuggingProblem.precode"
          [code]="code"
          [postcode]="problem.debuggingProblem.postcode"
        ></app-code-editor>
      </mat-card-content>

      <mat-card-actions>
        <button mat-button (click)="submit();">Submit</button>
        <button mat-button (click)="reset();">Reset</button>
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

  code: string;

  constructor(@Inject(HttpClient) private http: HttpClient,
              @Inject("ApiTeamService") private apiTeam: ApiTeamService) {
  }

  ngOnInit() {
    // this.apiTeam.submissions.subscribe(
    //   subs => this.submissions = subs.filter(s => s.problemId === this.problem.id))
  }

  ngOnDestroy() {
  }

  submit(): void {
    this.apiTeam.submit(new Submission({
      problemId: this.problem.id,
      debuggingSubmission: {
        code: this.code,
      }
    }));
  }

  reset(): void {
    this.code = this.problem.debuggingProblem.code;
  }
}
