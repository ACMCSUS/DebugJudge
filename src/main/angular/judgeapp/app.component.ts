import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from '@reactivex/rxjs';
import {ApiService} from 'lib/api';

@Component({
  selector: 'dbgjdg-app-root',
  templateUrl: './app.component.html',
  providers: [ ApiService ],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  isTeam: boolean;
  isJudge: boolean;
  profileSubscription: Subscription;
  profile: any;

  constructor(private apiService: ApiService) {
    this.isTeam = false;
    this.isJudge = false;
  }

  ngOnInit() {
    this.profileSubscription = this.apiService.profile.subscribe(profile => {
      this.profile = profile;
      if (this.profile) {
        this.isTeam = this.profile.type === 'team';
        this.isJudge = this.profile.type === 'judge';
      }
    });
  }
  ngOnDestroy() {
    this.profileSubscription.unsubscribe();
  }

}
