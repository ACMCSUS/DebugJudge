import {Component, Inject, OnDestroy, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ApiTeamService} from "./api-team.service";
import {Subscription} from "rxjs/Subscription";
import {acmcsus} from 'proto';
import Submission = acmcsus.debugjudge.Submission;

@Component({
  selector: 'app-submissions-view',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Submissions</mat-card-title>
        <mat-card-content>
          <h1 *ngIf="!(submissions && submissions.length)">No Submissions Yet! Get Coding!</h1>
          <h1 *ngFor="let submission of submissions">{{submission.time}}</h1>
        </mat-card-content>
      </mat-card-header>
    </mat-card>
  `,
  styles: [`
    mat-card {
      margin: 10px;
    }
  `],
})
export class SubmissionsViewComponent implements OnInit, OnDestroy {

  submissions: Submission[];

  private submissionsSubscription: Subscription;

  constructor(@Inject(HttpClient) private httpClient: HttpClient,
              @Inject("ApiTeamService") private apiTeam: ApiTeamService) {
  }

  ngOnInit(): void {
    this.submissionsSubscription = this.apiTeam.submissions.subscribe(
      (subs) => console.log(this.submissions = subs));
  }

  ngOnDestroy(): void {
    this.submissionsSubscription.unsubscribe();
  }
}
