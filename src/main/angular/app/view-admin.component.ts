import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AdminStatusBoardComponent} from "./admin-statusboard.component";

@Component({
  selector: 'app-admin-view',
  entryComponents: [AdminStatusBoardComponent],
  template: `
    <div id="admin-wrapper">
      <mat-card>
        <mat-card-content>
          <app-admin-statusboard></app-admin-statusboard>

          <mat-card>
            <mat-checkbox [(ngModel)]="unlock">Unlock Admin Features</mat-checkbox>
            <button mat-raised-button [disabled]="!unlock" (click)="start()" color="primary">
              Start Competition
            </button>
            <button mat-raised-button [disabled]="!unlock" (click)="reset()" color="primary">
              Reset Competition
            </button>
            <button mat-raised-button [disabled]="!unlock" (click)="stop()" color="primary">
              Stop Competition
            </button>
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

  unlock = false;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
  }

  start(): void {
    this.httpClient.get('/api/a/start').subscribe();
    this.unlock = false;
  }

  stop(): void {
    this.httpClient.get('/api/a/stop').subscribe();
    this.unlock = false;
  }

  reset(): void {
    this.httpClient.get('/api/a/reset').subscribe();
    this.unlock = false;
  }

}
