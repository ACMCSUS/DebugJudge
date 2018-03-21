import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  template: `
    <h1>Hello Scoreboard!</h1>
    <mat-drawer-container>
      <mat-drawer>ASDFASDFASDF</mat-drawer>
      <mat-drawer-content></mat-drawer-content>
    </mat-drawer-container>
  `,
  styles: [],
})
export class ScoreboardComponent implements OnInit {

  ngOnInit(): void {
    console.log("Hello Scoreboard!");
  }

}
