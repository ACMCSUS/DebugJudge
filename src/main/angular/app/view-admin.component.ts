import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AdminStatusBoardComponent} from "./admin-statusboard.component";
import {ApiAdminService} from "./api-admin.service";
import {acmcsus} from "./proto/dbgjdg_pb";
import CompetitionState = acmcsus.debugjudge.CompetitionState;

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
            <button mat-raised-button [disabled]="!unlock" (click)="stop()" color="primary">
              Stop Competition
            </button>
            <button mat-raised-button [disabled]="!unlock" (click)="reset()" color="primary">
              Pause Competition
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

  constructor(@Inject('ApiAdminService') private apiAdmin: ApiAdminService) {
  }

  ngOnInit(): void {
  }

  start(): void {
    this.apiAdmin.changeCompetitionState(CompetitionState.STARTED);
    this.unlock = false;
  }

  stop(): void {
    this.apiAdmin.changeCompetitionState(CompetitionState.STOPPED);
    this.unlock = false;
  }

  pause(): void {
    this.apiAdmin.changeCompetitionState(CompetitionState.PAUSED);
    this.unlock = false;
  }

  reset(): void {
    this.apiAdmin.changeCompetitionState(CompetitionState.WAITING);
    this.unlock = false;
  }

}
