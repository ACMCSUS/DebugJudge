import {Component, OnInit} from '@angular/core';
import {ApiService} from "./api";
import {Submission} from "./models/submission";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-root',
  templateUrl: './judge.component.html',
  styleUrls: ['./judge.component.css']
})
export class JudgeComponent implements OnInit {
  title = 'app works!';
  submissions: Submission[] = [];

  constructor(private apiService: ApiService){}

  ngOnInit() {
    this.getSubmissions()
  }

  getSubmissions() {
    this.apiService.getSubmissions().forEach(submissions => { this.submissions = submissions});
  }

  public accept(submission : Submission) {
    this.apiService.accept(submission).subscribe();
  }

  public reject(submission : Submission) {
    this.apiService.reject(submission).subscribe();
  }

  public isNullOrUndefined(something : any) : boolean {
    return isNullOrUndefined(something);
  }
}
