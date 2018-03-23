import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-view',
  template: `
    <div id="admin-wrapper">
      <mat-card>
        <mat-card-content>
          
          <mat-card>
            <mat-checkbox [(ngModel)]="unlock">Unlock Admin Features</mat-checkbox>
            <button mat-raised-button [disabled]="!unlock" color="primary">Start Competition</button>
            <button mat-raised-button [disabled]="!unlock" color="primary">Stop Competition</button>
          </mat-card>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    #admin-wrapper {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
    }

    mat-card {
      display: inline-block;
      margin: 10px;
    }
    mat-checkbox {
      display: block;
    }
  `],
})
export class AdminComponent implements OnInit {

  unlock: false;

  ngOnInit(): void {
    console.log('Hello Admin!');
  }

}
