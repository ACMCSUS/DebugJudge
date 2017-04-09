import {Component, OnInit, OnDestroy} from "@angular/core";
import {ApiService} from "./api";
import {Submission} from "./models/submission";
import {Subscription} from "@reactivex/rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './judge.component.html',
  styleUrls: ['./judge.component.css']
})
export class JudgeComponent implements OnInit, OnDestroy {

  submission: Submission;
  submissionSubscription: Subscription;

  statusMessage: string;
  statusMessageSubscription: Subscription;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.judgingApi.startSession();

    this.submissionSubscription = this.apiService.judgingApi.submission
      .subscribe((submission) => this.submission = submission);
    this.statusMessageSubscription = this.apiService.judgingApi.statusMessage
      .subscribe((statusMessage) => this.statusMessage = statusMessage);
  }

  ngOnDestroy() {
    this.submissionSubscription.unsubscribe();
    this.statusMessageSubscription.unsubscribe();
    this.apiService.judgingApi.stopSession();
  }

  public accept(submission: Submission) {
    this.apiService.accept(submission).subscribe();
  }
  public reject(submission: Submission) {
    this.apiService.reject(submission).subscribe();
  }
}
