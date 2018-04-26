import {AfterViewInit, Component, Inject, Input, OnDestroy} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ApiTeamService} from "./api-team.service";

import {acmcsus} from "./proto/dbgjdg_pb";
import Submission = acmcsus.debugjudge.Submission;
import Clarification = acmcsus.debugjudge.Clarification;
import C2SMessage = acmcsus.debugjudge.C2SMessage;
import {ApiWebSocketService} from "./api-ws.service";

@Component({
  selector: 'app-clarifications-view',
  template: `
    <mat-card>
      <mat-card-title>Clarifications</mat-card-title>
      <mat-card-content>
        <table>
          <thead>
            <td>Team ID</td>
            <td>Problem Name</td>
            <td>Public</td>
            <td>Message</td>
            <td>Response</td>
            <td *ngIf="canEdit"></td>
          </thead>
          <tbody>
            <tr *ngFor="let clar of clars">
              <td>{{clar.teamId}}</td>
              <td>{{clar.problemName}}</td>
              <td><mat-checkbox (ngModel)="clar.public" [disabled]="true"></mat-checkbox></td>
              <td>{{clar.message}}</td>
              <td>{{clar.response}}</td>
              <td *ngIf="canEdit">
                <button (click)="editResponse(clar)">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </mat-card-content>
    </mat-card>
    
    <mat-card *ngIf="canEdit && clar">
      <textarea [(ngModel)]="clar.message" [readonly]="true"></textarea>
      <textarea [(ngModel)]="clar.response"></textarea>
      <mat-checkbox [(ngModel)]="clar.public"></mat-checkbox>
      <button (click)="submit(clar)">Submit</button>
    </mat-card>
    <mat-card *ngIf="canSubmit && newClar">
      <mat-card-subtitle>Submit New Clarification</mat-card-subtitle>
      <select required>
        <option>Global</option>
        <option *ngFor="let prob of (api.problems | async)||[]"
                [value]="prob.id"></option>
      </select>
      <br>
      <textarea [(ngModel)]="newClar.message"></textarea>
      <br>
      <button mat-button (click)="submit(newClar)">Submit</button>
    </mat-card>
  `,
  styles: [`
    mat-card {
      margin: 10px;
    }
  `],
})
export class ViewClarificationsComponent {

  @Input()
  canEdit = false;

  @Input()
  canSubmit = false;

  clars: Clarification[] = [];

  clar: Clarification;
  newClar = Clarification.create();

  constructor(@Inject(HttpClient) private httpClient: HttpClient,
              @Inject('ApiWebSocketService') private api: ApiWebSocketService) {
    api.s2cMessages.subscribe(
        msg => {
          if (msg.value === 'reloadClarificationMessage') {
            this.clars.push(Clarification.create(msg.reloadClarificationMessage.clarification));
          }
        });
  }

  submit(clar: Clarification) {
    this.api.sendMessage(C2SMessage.create({
      submitClarificationMessage: {
        clarification: clar,
      }
    }));
  }

}
