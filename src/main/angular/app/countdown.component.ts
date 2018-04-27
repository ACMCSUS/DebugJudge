import {Component, Input, OnDestroy, OnInit, Inject} from '@angular/core';
import * as JsDiff from 'diff';
import {ApiWebSocketService} from "./api-ws.service";
import * as Long from "long";
import {acmcsus} from './proto/dbgjdg_pb';
import CompetitionState = acmcsus.debugjudge.CompetitionState;
import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";
import {interval} from "rxjs/observable/interval";

@Component({
  selector: 'app-countdown',
  entryComponents: [],
  template: `
    <span style="margin-left: auto">Competition Time:
      <span *ngIf="competitionSeconds !== null">
        {{relativeDate.toTimeString().split(' ')[0]}}
      </span>
    </span>
  `,
  styles: [`
    div {
      margin: 4px 0;
      border: inset 1px white;
      font-size: .9em;
      font-family: "Roboto Mono", "Monospaced", monospace !important;
    }
    pre {
      margin: 0;
      font-size: 12px;
      font-family: "Roboto Mono", "Monospaced", monospace !important;
    }
  `],
})
export class CountdownComponent implements OnInit, OnDestroy {

  state: CompetitionState;
  lastUpdateTime: number;

  competitionSeconds: number = null;
  relativeDate = new Date(0, 0, 0, 0, 0, 0);

  constructor(@Inject('ApiWebSocketService') private api: ApiWebSocketService) {
  }

  ngOnInit() {
    this.api.s2cMessages.subscribe(s2c => {
      if (s2c.value === 'competitionStateChangedMessage') {
        this.state = s2c.competitionStateChangedMessage.state;
        this.lastUpdateTime = Long.fromValue(
            s2c.competitionStateChangedMessage.timeMillis).toNumber();
        this.competitionSeconds = Long.fromValue(
            s2c.competitionStateChangedMessage.competitionSeconds).toNumber();
        //
        // if (this.state === CompetitionState.STARTED) {
        //   let now = new Date();
        //   let then = new Date(0);
        //   then.setUTCMilliseconds(this.lastUpdateTime);
        //   this.competitionSeconds += (now.getTime() - then.getTime()) / 1000;
        // }

        console.log(this);
        console.log('woot competition')
      }
    });

    interval(1000).subscribe((time) => {
      let seconds = this.competitionSeconds;
      if (this.state === CompetitionState.STARTED) {
        // this.competitionSeconds += 1;
        let now = new Date();
        let then = new Date(0);
        then.setUTCMilliseconds(this.lastUpdateTime);
        seconds += (now.getTime() - then.getTime()) / 1000;
      }
      this.relativeDate = new Date(0, 0, 0, 0, 0, seconds);
    });
  }

  ngOnDestroy() {
  }

}
