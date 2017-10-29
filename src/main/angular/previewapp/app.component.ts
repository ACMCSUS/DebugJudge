import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'dbgjdg-app-root',
  templateUrl: './app.component.html',
  providers: [],
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {

  isTeam: boolean;
  isJudge: boolean;
  profileSubscription: Subscription;
  profile: any;

  constructor() {
    this.isTeam = false;
    this.isJudge = false;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.profileSubscription.unsubscribe();
  }

}
