import {Component, Inject, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiTeamService} from "./api-team.service";
import {CodeEditorComponent} from "./codeeditor.component";
import {acmcsus} from "./proto/dbgjdg_pb";
import Submission = acmcsus.debugjudge.Submission;
import Problem = acmcsus.debugjudge.Problem;

@Component({
  selector: 'app-problem-algorithm',
  entryComponents: [],
  template: `
    <mat-card>
      <mat-card-title>
        {{problem.title}}
        <span *ngIf="solved" style="color: green">SOLVED!</span>
      </mat-card-title>

      <mat-card-content>
        <div id="descriptionHtml" class="descriptionHtml"
             [innerHtml]="problem.descriptionText"></div>

        <mat-label>
          Upload Source File (Not "executable" file):
          <input #fileSelector type="file" (change)="uploaded($event.target.files)">
        </mat-label>

        <select id="langSelect" placeholder="Select Language" [(ngModel)]="language">
          <option [value]="undefined" disabled>Select Language</option>
          <option value="java">java</option>
          <option value="python2">python2</option>
          <option value="python3">python3</option>
          <option value="c">c</option>
          <option value="c++">c++</option>
          <option value="rust">rust</option>
        </select>
      </mat-card-content>


      <mat-card-actions>
        <button mat-button (click)="submit();"
                [disabled]="!(uploadedFile && language && sourceCode)">Submit</button>
        <button mat-button (click)="reset();">Reset</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [`
    input {
      display: block;
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
    
    #langSelect {
      margin: 1em 0;
      padding: 2px;
      box-shadow: #666666 2px 2px 5px;
    }

    form {
      display: flex;
      flex-direction: column;
    }

    form > * {
      margin: 1em 0;
    }
  `],
})
export class AlgorithmicCardComponent implements OnInit, OnDestroy {

  @Input("problem")
  problem: Problem;

  @Input("solved")
  solved = false;

  @ViewChild('fileSelector')
  fileSelector: any;

  uploadedFile: File = undefined;
  language: string = undefined;
  sourceCode: string = undefined;

  constructor(@Inject(HttpClient) private http: HttpClient,
              @Inject("ApiTeamService") private apiTeam: ApiTeamService) {
  }

  ngOnInit() {
    this.reset();
  }

  ngOnDestroy() {
  }

  submit(): void {
    this.apiTeam.submit(new Submission({
      problemId: this.problem.id,
      algorithmicSubmission: {
        fileName: this.uploadedFile.name,
        sourceCode: this.sourceCode,
        language: this.language,
      }
    }));

    this.reset();
  }

  uploaded(files: FileList): void {
    this.uploadedFile = files[0];
    alert(this.uploadedFile.size);

    let reader = new FileReader();
    reader.onload = () => {
      this.sourceCode = reader.result;
      console.log(this.sourceCode);
    };
    reader.readAsText(this.uploadedFile);
  }

  debug(): void {
    console.log(this.uploadedFile);
    console.log(this.language);
    console.log(this.sourceCode);
  }

  reset(): void {
    this.fileSelector.nativeElement.value = "";
    this.uploadedFile = undefined;
    this.language = undefined;
    this.sourceCode = undefined;
  }
}
