import * as Rx from 'rxjs/Rx';
import {ApiService} from 'lib/api.service';
import {Submission} from 'lib/models/submission';
import {RxWebSocketSubject} from 'lib/api/RxWebSocketSubject';

export class JudgingApi {

  private static connectingMessage = 'Connecting...';
  private static waitingMessage = 'Waiting for submission...';

  public submission: Rx.BehaviorSubject<Submission>;
  public statusMessage: Rx.BehaviorSubject<string>;

  public connectionSubscription: Rx.Subscription;
  private sessionSubscription: Rx.Subscription = null;

  constructor(private apiService: ApiService, private socket: RxWebSocketSubject<any>) {
    this.submission = new Rx.BehaviorSubject(undefined);
    this.statusMessage = new Rx.BehaviorSubject(JudgingApi.connectingMessage);
    this.connectionSubscription = null;
  }

  public startSession() {
    if (this.connectionSubscription !== null || this.sessionSubscription !== null) {
      throw new Error('Judging session already in progress!');
    }

    this.sessionSubscription = this.socket.asObservable()
      .filter(msg => msg.who === 'jdg')
      .subscribe((msg) => this.handleMessage(msg));

    this.connectionSubscription = this.apiService.loggedInStatus
      .subscribe((connected) => {
        console.log('Connection Status:', connected);
        if (connected) {
          this.socket.send({who: 'jdg', what: 'start'});
          this.statusMessage.next(JudgingApi.waitingMessage);
        }
        else {
          this.submission.next(undefined);
          this.statusMessage.next(JudgingApi.connectingMessage);
        }
      });
  }

  public stopSession() {
    if (this.connectionSubscription) {
      this.connectionSubscription.unsubscribe();
    }
    if (this.sessionSubscription) {
      this.sessionSubscription.unsubscribe();
    }

    this.submission.next(undefined);
    this.statusMessage.next('Judging Session Ended');

    this.connectionSubscription = null;
    this.sessionSubscription = null;

    this.socket.send({who: 'jdg', what: 'stop'});
  }

  private handleMessage(msg: any) {
    if (msg.what === 'kick') {
      this.submission.next(undefined);
      this.statusMessage.next(msg.data);
    }
    else if (msg.what === 'set') {
      if (msg.data == null) {
        this.submission.next(undefined);
        this.statusMessage.next(JudgingApi.waitingMessage);
      }
      else {
        this.setSubmissionById(msg.data);
      }
    }
  }

  private setSubmissionById(id: number) {
    this.apiService.getSubmission(id)
      .then((submission: Submission) => this.submission.next(submission));
  }

  public defer(submission: Submission) {
    this.socket.send({who: 'jdg', what: 'defer', data: submission.id})
  }

  preferences(problemPreferences: {}) {
    this.socket.send({who: 'jdg', what: 'pref', data: problemPreferences})
  }
}
