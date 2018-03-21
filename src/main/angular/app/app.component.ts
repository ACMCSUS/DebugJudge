import {Component} from '@angular/core';
import {ScoreboardComponent} from './scoreboard.component';
import {TeamComponent} from './view-team.component';
import {JudgeComponent} from './view-judge.component';
import {AdminComponent} from './view-admin.component';

@Component({
  selector: 'app-root',
  template: `
    <div id="app-wrap">
      <mat-toolbar color="primary">
        <mat-toolbar-row color="gray">
          <span style="margin-right:5px">ACM CSUS Debugging Competition</span>
        </mat-toolbar-row>
      </mat-toolbar>
      <mat-tab-group>
        <mat-tab label="Team">
          <app-team-view></app-team-view>
        </mat-tab>
        <mat-tab label="Judge">
          <app-judge-view></app-judge-view>
        </mat-tab>
        <mat-tab label="Admin">
          <app-admin-view></app-admin-view>
        </mat-tab>
        <mat-tab label="Scoreboard">
          <app-scoreboard></app-scoreboard>
        </mat-tab>
      </mat-tab-group>
    </div>
  `,
  entryComponents: [
    TeamComponent,
    JudgeComponent,
    AdminComponent,
    ScoreboardComponent,
  ],
  styles: [`
    #app-wrap {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: stretch;
    }
    /deep/mat-tab-group {
      flex: 1 1 auto !important;
      display: flex;
      flex-direction: column;
      align-items: stretch;
    }
    /deep/.mat-tab-body-wrapper {
      flex: 1 1 auto !important;
    }
    /deep/.mat-tab-body-content {
      overflow-y: scroll !important;
    }
  `],
})
export class AppComponent {
}
