import {Component, animate, transition, style, state, trigger, ViewChild, OnInit, OnDestroy} from "@angular/core";
import {CodeEditorComponent} from "./codeeditor.component";
import {Problem} from "./models/problem";
import {Submission} from "./models/submission";
import {ApiService} from "./api";
import {Subscription} from "@reactivex/rxjs";

@Component({
  selector: 'problem-card',
  templateUrl: './problemcard.component.html',
  styleUrls: ['./problemcard.component.css'],
  inputs: [ 'problem' ],
  entryComponents: [ CodeEditorComponent ],
  providers: [],
  animations: [
    trigger('openClose', [
      state('collapsed, void', style({height: '0px'})),
      state('expanded', style({height: '*'})),
      transition(
        'collapsed <=> expanded', [animate('300ms ease'), animate('300ms ease')])
    ])
  ]
})
export class ProblemCardComponent implements OnInit, OnDestroy {

  stateExpression: string;

  problem: Problem;
  submissions: Submission[] = [];
  problemSolved: boolean;
  @ViewChild(CodeEditorComponent) editor :CodeEditorComponent;

  submissionSubscription : Subscription;

  constructor(private apiService: ApiService){
    this.collapse();
  }

  expand() { this.stateExpression = 'expanded'; }
  collapse() { this.stateExpression = 'collapsed'; }

  ngOnInit() {
    this.submissionSubscription = this.apiService.submissions.asObservable()
      .filter(submissions => submissions !== undefined)
      .map(submissions => submissions.filter(
        submission => submission.problem.id == this.problem.id))
      .subscribe(submissions => {
        this.submissions = submissions;
        this.problemSolved = this.submissions.some(submission => submission.accepted);
      });
  }
  ngOnDestroy() {
    this.submissionSubscription.unsubscribe();
  }

  submit() {
    console.log("Submitting");
    this.apiService.submit(this.problem, this.editor.code);
  }

}
