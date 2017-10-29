import {Component, OnInit, OnDestroy, Inject} from '@angular/core';
import {ApiService} from 'lib/api.service';
import {Submission} from 'lib/models/submission';
import {Subscription} from 'rxjs/Subscription';
import {Problem} from 'lib/models/problem';

@Component({
  selector: 'dbgjdg-judge-view',
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

  constructor(@Inject('ApiService') private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.judgingApi.startSession();

    this.apiService.getProblems()
      .then((problems) => {
        this.problems = problems;
        for (const problem of problems) {
          this.problemPreferences[problem.id] = true;
        }
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
