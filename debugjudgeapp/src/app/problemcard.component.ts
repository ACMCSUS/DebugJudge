import {Component, animate, transition, style, state, trigger} from "@angular/core";
import {CodeEditorComponent} from "./codeeditor.component";
import {Problem} from "./models/problem";
import {Submission} from "./models/submission";
import {ApiService} from "./api";

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
export class ProblemCardComponent {

  stateExpression: string;

  problem : Problem;
  submissions: Submission[] = [];

  constructor(private apiService: ApiService){
    this.collapse();
  }

  expand() { this.stateExpression = 'expanded'; }
  collapse() { this.stateExpression = 'collapsed'; }

  ngOnInit() {
    this.getSubmissions()
  }

  getSubmissions() {
    this.apiService.getSubmissions().then(submissions => { this.submissions = submissions});
  }

}
