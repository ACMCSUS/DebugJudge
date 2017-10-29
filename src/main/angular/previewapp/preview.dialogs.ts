import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'dbgjdg-preview-upload-dialog',
  template: `
    <h1 mat-dialog-title>Upload Session:</h1>
    <div mat-dialog-content>
      <mat-form-field>
        <textarea matInput tabindex="1" [(ngModel)]="data.serialized">
        </textarea>
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button [mat-dialog-close]="data.serialized" tabindex="2">Ok</button>
      <button mat-button (click)="onNoClick()" tabindex="-1">No Thanks</button>
    </div>
  `,
})
export class PreviewUploadDialog {

  constructor(
    public dialogRef: MatDialogRef<PreviewUploadDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'dbgjdg-preview-download-dialog',
  template: `
    <h1 mat-dialog-title>Current Session:</h1>
    <div mat-dialog-content>
      <mat-form-field>
        <textarea matInput tabindex="1" [readonly]="true" [(ngModel)]="data.serialized">
        </textarea>
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onOkClick()" tabindex="2">Ok</button>
    </div>
  `,
})
export class PreviewDownloadDialog {

  constructor(
    public dialogRef: MatDialogRef<PreviewUploadDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onOkClick(): void {
    this.dialogRef.close();
  }

}
