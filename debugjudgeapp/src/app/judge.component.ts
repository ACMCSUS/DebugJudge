import {Component, OnInit, OnDestroy} from '@angular/core';
import {ApiService} from "./api";
import {Submission} from "./models/submission";
import {isNullOrUndefined} from "util";
import {Subscription} from "@reactivex/rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './judge.component.html',
  styleUrls: ['./judge.component.css']
})
export class JudgeComponent implements OnInit, OnDestroy {

  submissions: Submission[] = [];
  submissionSubscription: Subscription;

  constructor(private apiService: ApiService) {
    this.submissionSubscription = this.apiService.submissions.asObservable()
      .subscribe(submissions => this.submissions = submissions);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.submissionSubscription.unsubscribe();
  }

  public accept(submission: Submission) {
    this.apiService.accept(submission).subscribe();
  }

  public reject(submission: Submission) {
    this.apiService.reject(submission).subscribe();
  }
}
