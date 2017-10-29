import {Component, OnInit, OnDestroy, Inject} from '@angular/core';

import {Submission} from 'lib/models/submission';
import {Problem} from 'lib/models/problem';
import {ProblemCardComponent} from 'teamapp/problemcard.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {PreviewDownloadDialog, PreviewUploadDialog} from './preview.dialogs';

@Component({
  selector: 'dbgjdg-preview-view',
  styleUrls: ['./preview.component.css'],
  // entryComponents: [
  //   ProblemCardComponent,
  //   PreviewDownloadDialog,
  //   PreviewUploadDialog,
  // ],

  template: `
    <div id="problemCards">
      <mat-card>
        <mat-card-title>DebugJudge Problem Previewer</mat-card-title>
        <mat-card-actions>
          <button mat-raised-button color="primary" (click)="newProblem()">Add Problem</button>
          <button mat-raised-button (click)="download()">Download</button>
          <button mat-raised-button (click)="upload()">Upload</button>
        </mat-card-actions>
      </mat-card>
      <div class="problemcardWrapper" *ngFor="let problem of problems">
        <mat-card>
          <input class="mat-card-title" [(ngModel)]="problem.title">
          <input class="mat-card-subtitle" [(ngModel)]="problem.language">
          <textarea [(ngModel)]="problem.description"></textarea>
          <hr/>
          <textarea style="background-color:#ccc;display:block"
                    [(ngModel)]="problem.precode"></textarea>
          <textarea style="background-color:#fff;display:block"
                    [(ngModel)]="problem.code"></textarea>
          <textarea style="background-color:#ccc;display:block"
                    [(ngModel)]="problem.postcode"></textarea>
        </mat-card>
        <dbgjdg-problem-card [problem]="problem"></dbgjdg-problem-card>
      </div>
    </div>`,
})
export class PreviewComponent implements OnInit, OnDestroy {

  problems: Problem[] = [];
  submissions: Submission[] = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  newProblem() {
    this.problems.push(new Problem(
      undefined,
      -1,
      'Title Here',
      'Description',
      'Language',
      'Unmodifiable Pre-Code',
      'Modifiable Code',
      'Unmoditiable Post-Code',
      'Answer',
    ))
  }

  private upload(): void {
    let serialized = '';
    let dialogRef = this.dialog.open(PreviewUploadDialog, {
      width: '250px',
      data: { serialized: serialized }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.deserialize(serialized);
    });
  }

  private download() {
    let serialized = JSON.stringify(this.problems);
    let dialogRef = this.dialog.open(PreviewDownloadDialog, {
      width: '250px',
      data: { serialized: serialized }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.deserialize(serialized);
    });
  }

  private deserialize(serialized : string): void {
    console.log(serialized);
  }
}
