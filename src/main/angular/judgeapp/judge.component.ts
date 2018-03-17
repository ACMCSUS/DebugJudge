import {Component, OnInit, OnDestroy, Inject} from '@angular/core';
import {ApiService} from 'lib/api.service';
import {Submission} from 'lib/models/submission';
import {Subscription} from 'rxjs/Subscription';
import {Problem} from 'lib/models/problem';
import {JudgeApiService} from "./judgeapi.service";

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

  constructor(
    @Inject('ApiService') private apiService: ApiService,
    @Inject('JudgeApiService') private judgeApiService: JudgeApiService) {
  }

  ngOnInit() {
    this.judgeApiService.startSession();

    this.apiService.getProblems()
      .then((problems) => {
        this.problems = problems;
        for (const problem of problems) {
          this.problemPreferences[problem.id] = true;
        }
        console.log(this.problems);
    });

    this.submissionSubscription = this.judgeApiService.submission
      .subscribe((submission) => this.submission = submission);
    this.statusMessageSubscription = this.judgeApiService.statusMessage
      .subscribe((statusMessage) => this.statusMessage = statusMessage);
  }

  ngOnDestroy() {
    this.submissionSubscription.unsubscribe();
    this.statusMessageSubscription.unsubscribe();
    this.judgeApiService.stopSession();
  }

  public accept(submission: Submission) {
    this.judgeApiService.accept(submission);
  }
  public reject(submission: Submission) {
    this.judgeApiService.reject(submission);
  }
  public defer(submission: Submission) {
    this.judgeApiService.defer(submission);
  }

  public updatePreferences() {
    this.judgeApiService.preferences(this.problemPreferences);
  }
}
