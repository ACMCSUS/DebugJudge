import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatRipple} from '@angular/material';

@Component({
  selector: 'app-team-view',
  template: `
    <div id="team-wrapper">
      <mat-card id="left" style="padding: 0">
        <mat-card-content style="display: flex; flex-direction: column;">
          <span *ngFor="let item of [0,1,2]; let isLast=last">
            <button mat-button (click)="problemClicked(item)">Problem {{item}}</button>
            <mat-divider *ngIf="!isLast"></mat-divider>
          </span>
        </mat-card-content>
      </mat-card>

      <mat-card id="right">
        <mat-card-title *ngIf="problemIdx>=0">{{problems[problemIdx].title}}</mat-card-title>
        <mat-card-content *ngIf="problemIdx>=0">
          <p>{{problems[problemIdx].description}}</p>
        </mat-card-content>
        <mat-card-content *ngIf="problemIdx<0">
          Loading...
        </mat-card-content>
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

  problems = [
    {
      title: 'Hello World',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque turpis sed sapien molestie, nec feugiat est condimentum. Aliquam quis enim sed velit fringilla venenatis. Nam a cursus nibh. Suspendisse non bibendum dui. Etiam interdum dignissim nulla id malesuada. Pellentesque lorem ante, pellentesque a justo ut, porttitor viverra metus. Vivamus semper risus velit, quis eleifend odio fermentum eu. Maecenas mi neque, tempor vitae porttitor id, ornare vel est. Aliquam tincidunt tristique orci, quis sagittis neque ultricies sed. Donec consectetur ante a tortor condimentum, non iaculis felis congue. Aliquam a egestas leo. Integer euismod nisi id lorem placerat dictum. Fusce ac porttitor diam. Aenean elementum eros laoreet consequat scelerisque.\n' +
      '\n',
    },
    {
      title: 'Echo Echo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque turpis sed sapien molestie, nec feugiat est condimentum. Aliquam quis enim sed velit fringilla venenatis. Nam a cursus nibh. Suspendisse non bibendum dui. Etiam interdum dignissim nulla id malesuada. Pellentesque lorem ante, pellentesque a justo ut, porttitor viverra metus. Vivamus semper risus velit, quis eleifend odio fermentum eu. Maecenas mi neque, tempor vitae porttitor id, ornare vel est. Aliquam tincidunt tristique orci, quis sagittis neque ultricies sed. Donec consectetur ante a tortor condimentum, non iaculis felis congue. Aliquam a egestas leo. Integer euismod nisi id lorem placerat dictum. Fusce ac porttitor diam. Aenean elementum eros laoreet consequat scelerisque.\n' +
      '\n',
    },
    {
      title: 'Tic Tac Toe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque turpis sed sapien molestie, nec feugiat est condimentum. Aliquam quis enim sed velit fringilla venenatis. Nam a cursus nibh. Suspendisse non bibendum dui. Etiam interdum dignissim nulla id malesuada. Pellentesque lorem ante, pellentesque a justo ut, porttitor viverra metus. Vivamus semper risus velit, quis eleifend odio fermentum eu. Maecenas mi neque, tempor vitae porttitor id, ornare vel est. Aliquam tincidunt tristique orci, quis sagittis neque ultricies sed. Donec consectetur ante a tortor condimentum, non iaculis felis congue. Aliquam a egestas leo. Integer euismod nisi id lorem placerat dictum. Fusce ac porttitor diam. Aenean elementum eros laoreet consequat scelerisque.\n' +
      '\n',
    },
  ];
  problemIdx = 0;

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
