import {Component, OnInit, OnDestroy} from "@angular/core";
import {Subscription} from "@reactivex/rxjs";
import {ApiService} from "./api";

@Component({
  selector: 'working-view',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, OnDestroy {

  isTeam: boolean;
  isJudge: boolean;
  profileSubscription: Subscription;
  profile: any;

  constructor(private apiService : ApiService) {
    this.isTeam = false;
    this.isJudge = false;
  }

  ngOnInit() {
    setTimeout(() => {
      console.log('a');
      this.profileSubscription = this.apiService.profile.subscribe(profile => {
        this.profile = profile;
        if (this.profile) {
          this.isTeam = this.profile.type === 'team';
          this.isJudge = this.profile.type === 'judge';
        }
      });
    }, 500);
  }
  ngOnDestroy() {
    if (this.profileSubscription)
      this.profileSubscription.unsubscribe();
  }
}
