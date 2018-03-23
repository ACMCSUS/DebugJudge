import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatRipple} from '@angular/material';
import {ApiTeamService} from './api-team.service';
import {Problem} from './model';
import {CodeEditorComponent} from './codeeditor.component';

@Component({
  selector: 'app-team-view',
  entryComponents: [CodeEditorComponent],
  template: `
    <div id="team-wrapper">
      <mat-card id="left" style="padding: 0">
        <mat-card-content style="display: flex; flex-direction: column;" *ngIf="problems&&problems.length">
          <span *ngFor="let problem of problems; let idx = index; let isLast=last">
            <button mat-button (click)="problemClicked(idx)">{{problem.title}}</button>
            <mat-divider *ngIf="!isLast"></mat-divider>
          </span>
        </mat-card-content>
        <mat-card-content *ngIf="!(problems && problems.length)">
          <button mat-button [disabled]="true">Loading</button>
        </mat-card-content>
      </mat-card>
      <mat-card id="right" *ngIf="problems && problems.length">
        <mat-card-title>{{problems[problemIdx].title}}</mat-card-title>
        <mat-card-content>
          
          <p>{{problems[problemIdx].description}}</p>
          
          <app-code-editor
            [precode]="problems[problemIdx].debuggingProblem.precode"
            [code]="problems[problemIdx].debuggingProblem.code"
            [postcode]="problems[problemIdx].debuggingProblem.postcode"
          ></app-code-editor>
          
        </mat-card-content>
        <mat-card-content *ngIf="!(problems && problems.length)">
          Loading...
        </mat-card-content>
      </mat-card>
      <mat-card id="right" *ngIf="!(problems && problems.length)">
        <mat-card-title >Loading...</mat-card-title>
      </mat-card>
    </div>
    <div id="backRipple" matRipple [matRippleColor]="'#acb'"
         [ngStyle]="{'background-color':bkgdColor}"></div>
  `,
  styles: [`
    #team-wrapper {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      width: 100%;
      height: 100%;
    }

    #left {
      /*width: 200px;*/
      max-width: 30%;
    }

    /deep/ .mat-button-wrapper, /deep/ .mat-button {
      white-space: normal !important;
      line-height: 1rem !important;
      padding: .5rem !important;
    }

    #right {
      flex: 1;
    }

    mat-card {
      display: inline-block;
      margin: 10px;
    }

    #backRipple {
      z-index: -99 !important;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 50px;
    }
  `],
})
export class TeamComponent implements OnInit, AfterViewInit {

  static colorFail = '#caa';
  static colorSuccess = '#acb';

  @ViewChild(MatRipple) ripple: MatRipple;

  bkgdColor = '#fff';

  problems: Problem[];
  problemIdx = 0;

  constructor(@Inject('ApiTeamService') api: ApiTeamService) {
    api.getProblems().subscribe((problems) => this.problems = problems);
  }

  ngOnInit(): void {
    console.log('Hello Team!');
  }

  ngAfterViewInit(): void {
    this.problemClicked(0);
  }

  problemClicked(problem: number): void {
    this.problemIdx = problem;
    const colors = ['#abc', '#caa', '#aca'];
    const rippleRef = this.ripple.launch(0, 0, {
      persistent: false,
      color: colors[(problem % 3)],
    });
    setTimeout(() => {
      this.bkgdColor = colors[(problem % 3)];
      rippleRef.fadeOut();
    }, 500);
  }
}
