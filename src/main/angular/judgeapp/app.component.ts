import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ApiService} from 'lib/api.service';

@Component({
  selector: 'dbgjdg-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  isTeam: boolean;
  isJudge: boolean;
  profileSubscription: Subscription;
  profile: any;

  constructor(@Inject('ApiService') private apiService: ApiService) {
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
