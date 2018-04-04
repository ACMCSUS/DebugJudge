import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {WebSocketSubject} from 'rxjs/observable/dom/WebSocketSubject';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import {acmcsus} from "./proto/dbgjdg_pb";
import S2CMessage = acmcsus.debugjudge.S2CMessage;
import S2TMessage = acmcsus.debugjudge.S2CMessage.S2TMessage;
import S2JMessage = acmcsus.debugjudge.S2CMessage.S2JMessage;
import C2SMessage = acmcsus.debugjudge.C2SMessage;
import {environment} from "../environments/environment";

export interface ApiWebSocketService {

  webSocket: Observable<S2CMessage>;

  competitionState: Observable<acmcsus.debugjudge.CompetitionState>;
  loggedInStatus: Observable<boolean>;

  s2cMessages: Observable<S2CMessage>;
  s2tMessages: Observable<S2TMessage>;
  s2jMessages: Observable<S2JMessage>;

  sendMessage(C2SMessage): void;

}

@Injectable()
export class ApiWebSocketServiceImpl implements ApiWebSocketService {

  private static nonceUrl = '/ws/nonce';
  private static wsUrl = 'ws://' + window.location.host + '/ws/connect';

  webSocket: WebSocketSubject<S2CMessage>;

  competitionState: BehaviorSubject<acmcsus.debugjudge.CompetitionState>;
  loggedInStatus: BehaviorSubject<boolean>;

  s2cMessages: ReplaySubject<S2CMessage>;
  s2tMessages: ReplaySubject<S2TMessage>;
  s2jMessages: ReplaySubject<S2JMessage>;

  constructor(private httpClient: HttpClient) {
    this.s2cMessages = new ReplaySubject<S2CMessage>(16);
    this.s2tMessages = new ReplaySubject<S2TMessage>(16);
    this.s2jMessages = new ReplaySubject<S2JMessage>(16);

    this.competitionState = new BehaviorSubject(acmcsus.debugjudge.CompetitionState.WAITING);
    this.loggedInStatus = new BehaviorSubject(false);

    // noinspection JSUnusedGlobalSymbols
    this.webSocket = new WebSocketSubject<S2CMessage>({
      url: ApiWebSocketServiceImpl.wsUrl,
      binaryType: 'arraybuffer',

      openObserver: {
        next: (event: Event) => {
          this.httpClient.get(ApiWebSocketServiceImpl.nonceUrl, {responseType: 'text'})
            .subscribe((response) => {
              let msg = C2SMessage.create({
                loginMessage: {
                  nonce: response,
                },
              });
              this.sendMessage(msg);
            })
        },
      },
      resultSelector: (e: MessageEvent) => {
        // I am the greatest hacker. Rxjs has a weird type check that this bypasses.
        // If you find a way to bypass this hack, go for it.
        return S2CMessage.decode.apply(this, [new Uint8Array(e.data)]);
      },
    });

    this.setUpSocket();
  }

  public sendMessage(msg: C2SMessage) {
    this.webSocket.socket.send(C2SMessage.encode(msg).finish());
  }

  private setUpSocket() {
    this.webSocket.subscribe(msg => {
      if (msg === undefined) {
        return
      }

      switch (msg.value) {
        case'debugMessage': {
          console.debug('WS_DBG:', msg.debugMessage.message);
          break;
        }
        case 'alertMessage': {
          alert(msg.alertMessage.message);
          break;
        }
        case 'loginResultMessage': {
          if (msg.loginResultMessage.value == S2CMessage.LoginResultMessage.LoginResult.SUCCESS) {
            this.loggedInStatus.next(true);
          }
          else {
            this.loggedInStatus.next(false);
          }
          break;
        }
        case 'competitionStateChangedMessage': {
          // TODO: Fancy stuff with the state and time like a countdown in the titlebar
          let state = msg.competitionStateChangedMessage.state;
          // let time = msg.competitionStateChangedMessage.timeMillis;

          this.competitionState.next(state);
          break;
        }
        case 'notificationMessage': {
          // TODO: Notification logic
          console.log('WS: Notification: "' + msg.notificationMessage.message + '"');
          break;
        }
        case 's2tMessage': {
          this.s2tMessages.next(S2TMessage.create(msg.s2tMessage));
          break;
        }
        case 's2jMessage': {
          this.s2jMessages.next(S2JMessage.create(msg.s2jMessage));
          break;
        }
        default: {
          console.error("WS: I didn't know how to act on msg:", msg.value,
            "Either this message is not supported in frontend or someone forgot a 'break'.");
        }
        // We know someone else takes care of these:
        case 'scoreboardUpdateMessage': break;
        case 'reloadProblemsMessage': break;
      }

      this.s2cMessages.next(msg);
    });
    //
    // this.getProfile().then((profile) => this.profile.next(profile));
    // this.getProblems().then((problems) => this.problems.next(problems));
  }

}
