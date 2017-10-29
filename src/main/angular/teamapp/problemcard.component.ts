import {
  Component,
  animate,
  transition,
  style,
  state,
  trigger,
  ViewChild,
  OnInit,
  OnDestroy, Input, Inject,
} from '@angular/core';
import {CodeEditorComponent} from 'lib/codeeditor.component';
import {Problem} from 'lib/models/problem';
import {Submission} from 'lib/models/submission';
import {ApiService} from 'lib/api.service';
import {Subscription} from 'rxjs/Rx';
import {ApiServiceImpl} from 'lib/api.impl';

@Component({
  selector: 'dbgjdg-problem-card',
  templateUrl: './problemcard.component.html',
  styleUrls: ['./problemcard.component.css'],
  entryComponents: [CodeEditorComponent],
  providers: [],
  animations: [
    trigger('openClose', [
      state('collapsed, void', style({height: '0px'})),
      state('expanded', style({height: '*'})),
      transition(
        'collapsed <=> expanded', [animate('300ms ease'), animate('300ms ease')]),
    ]),
  ],
})
export class ProblemCardComponent implements OnInit, OnDestroy {

  stateExpression: string;
  notify: boolean;

  @Input()
  problem: Problem;
  submissions: Submission[] = [];
  problemSolved: boolean;
  @ViewChild(CodeEditorComponent) editor: CodeEditorComponent;

  submissionSubscription: Subscription;

  constructor(@Inject('ApiService') private apiService: ApiService) {
    this.collapse();
    this.notify = false;
  }

  expand() {
    this.stateExpression = 'expanded';
    this.notify = false;
  }

  collapse() { this.stateExpression = 'collapsed'; }

  ngOnInit() {
    this.submissionSubscription = this.apiService.submissions.asObservable()
      .filter(submissions => submissions !== undefined)
      .map(submissions => submissions.filter(
        submission => submission.problem.id === this.problem.id))
      .subscribe(submissions => {
        if (this.submissions && this.submissions.length === submissions.length) {
          if (!ApiServiceImpl.arraysEqual(this.submissions, submissions)) {
            this.notify = true;
          }
        }
        this.submissions = submissions;
        this.problemSolved = this.submissions.some(submission => submission.accepted);
      });
  }

  ngOnDestroy() {
    this.submissionSubscription.unsubscribe();
  }

  submit() {
    this.apiService.submit(this.problem, this.editor.code);
  }

  reset() {
    this.editor.code = this.problem.code;
  }

}
