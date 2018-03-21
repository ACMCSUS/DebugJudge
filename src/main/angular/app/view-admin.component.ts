import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-view',
  template: `
    <h1>Hello Admin!</h1>
    <mat-drawer-container>
      <mat-drawer>ASDFASDFASDF</mat-drawer>
      <mat-drawer-content></mat-drawer-content>
    </mat-drawer-container>
  `,
  styles: [],
})
export class AdminComponent implements OnInit {

  ngOnInit(): void {
    console.log("Hello Admin!");
  }

}
