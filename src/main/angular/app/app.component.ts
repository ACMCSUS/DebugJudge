import {Component} from '@angular/core';
import {ScoreboardComponent} from './scoreboard.component';
import {TeamComponent} from './view-team.component';
import {JudgeComponent} from './view-judge.component';
import {AdminComponent} from './view-admin.component';
import {HttpClient} from '@angular/common/http';
import {acmcsus} from "./proto/dbgjdg_pb";
import Profile = acmcsus.debugjudge.Profile;

@Component({
  selector: 'app-root',
  template: `
    <div id="app-wrap">
      <mat-toolbar color="primary">
        <mat-toolbar-row color="gray">
          <span style="margin-right:5px">CSUS ICPC Spring 2018 | ACM@CSUS</span>
        </mat-toolbar-row>
      </mat-toolbar>
      <mat-progress-spinner [mode]="'indeterminate'" *ngIf="!profile"></mat-progress-spinner>
      <app-resolver-viewer
          *ngIf="profile && profile.profileType === RESOLVER_VIEWER"></app-resolver-viewer>
      <div id="tabWrap" *ngIf="profile && profile.profileType !== RESOLVER_VIEWER">
        <mat-tab-group>
          <mat-tab label="Team" *ngIf="profile.profileType === TEAM">
            <app-team-view></app-team-view>
          </mat-tab>
          <mat-tab label="Judge" *ngIf="profile.profileType === JUDGE">
            <app-judge-view></app-judge-view>
          </mat-tab>
          <mat-tab label="Admin" *ngIf="profile.profileType === ADMIN">
            <app-admin-view></app-admin-view>
          </mat-tab>
          <mat-tab label="Balloons" *ngIf="profile.profileType === BALLOON_RUNNER">
            <app-balloon-view></app-balloon-view>
          </mat-tab>
          <mat-tab label="Submissions"
                   *ngIf="[TEAM, JUDGE, ADMIN].indexOf(profile.profileType)>=0">
            <app-submissions-view></app-submissions-view>
          </mat-tab>
          <mat-tab label="Scoreboard">
            <app-scoreboard></app-scoreboard>
          </mat-tab>
          <mat-tab label="Problems">
            <app-problems-view></app-problems-view>
          </mat-tab>
        </mat-tab-group>
      </div>
      <app-submissions-bar></app-submissions-bar>
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
      height: 100% !important;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: stretch;
    }

    #tabWrap {
      flex-grow: 1;
      overflow: auto;
    }

    @media print {
      #app-wrap {
        height: auto;
      }

      /deep/ .mat-tab-body-content, /deep/ .mat-tab-body {
        /*position: absolute;*/
        /*top: 0;*/
        /*left: 0;*/
        width: auto;
        height: auto;
        float: none;
        overflow-y: visible !important;
      }
    }

    mat-progress-spinner {
      margin: auto;
    }
  `],
})
export class AppComponent {

  TEAM = Profile.ProfileType.TEAM;
  JUDGE = Profile.ProfileType.JUDGE;
  ADMIN = Profile.ProfileType.ADMIN;
  BALLOON_RUNNER = Profile.ProfileType.BALLOON_RUNNER;
  RESOLVER_VIEWER = Profile.ProfileType.RESOLVER_VIEWER;

  profile: Profile;

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<Profile>('/api/profile')
        .subscribe(p => {
          this.profile = p;
          console.log(p)
        });
  }

}
