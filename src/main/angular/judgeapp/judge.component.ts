import {Component, OnInit, OnDestroy} from "@angular/core";
import {ApiService} from "lib/api";
import {Submission} from "lib/models/submission";
import {Subscription} from "@reactivex/rxjs";
import {Problem} from "lib/models/problem";

@Component({
  selector: 'judge-view',
  templateUrl: './judge.component.html',
  styleUrls: ['./judge.component.css']
})
export class JudgeComponent implements OnInit, OnDestroy {

  submission: Submission;
  submissionSubscription: Subscription;

  statusMessage: string;
  statusMessageSubscription: Subscription;

  problems: Problem[] = [];
  problemPreferences: {} = {};

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.judgingApi.startSession();

    this.apiService.getProblems()
      .then((problems) => {
        this.problems = problems;
        for (let problem of problems)
          this.problemPreferences[problem.id] = true;
        console.log(this.problems);
    });

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
    this.apiService.accept(submission);
  }
  public reject(submission: Submission) {
    this.apiService.reject(submission);
  }
  public defer(submission: Submission) {
    this.apiService.judgingApi.defer(submission);
  }

  public updatePreferences() {
    this.apiService.judgingApi.preferences(this.problemPreferences);
  }
}
