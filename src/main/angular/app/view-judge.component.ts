import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-judge-view',
  template: `
    <h1>Hello Judge!</h1>
    <mat-drawer-container>
      <mat-drawer>ASDFASDFASDF</mat-drawer>
      <mat-drawer-content></mat-drawer-content>
    </mat-drawer-container>
  `,
  styles: [],
})
export class JudgeComponent implements OnInit {

  ngOnInit(): void {
    console.log("Hello Judge!");
  }

}
