import {BehaviorSubject, Subscription} from "@reactivex/rxjs";
import {ApiService} from "../api";
import {Submission} from "../models/submission";
import {RxWebSocketSubject} from "./RxWebSocketSubject";

export class JudgingApi {
  public submission: BehaviorSubject<Submission>;
  public statusMessage: BehaviorSubject<string>;

  private static connectingMessage: string = 'Connecting...';
  private static waitingMessage: string = 'Waiting for submission...';

  public connectionSubscription: Subscription;
  private sessionSubscription: Subscription = null;

  constructor(private apiService: ApiService, private socket: RxWebSocketSubject<any>) {
    this.submission = new BehaviorSubject(undefined);
    this.statusMessage = new BehaviorSubject(JudgingApi.connectingMessage);
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
          this.socket.send({who:'jdg', what:'start'});
          this.statusMessage.next(JudgingApi.waitingMessage);
        }
        else {
          this.submission.next(undefined);
          this.statusMessage.next(JudgingApi.connectingMessage);
        }
      });
  }

  public stopSession() {
    if (this.connectionSubscription) this.connectionSubscription.unsubscribe();
    if (this.sessionSubscription) this.sessionSubscription.unsubscribe();

    this.submission.next(undefined);
    this.statusMessage.next('Judging Session Ended');

    this.connectionSubscription = null;
    this.sessionSubscription = null;

    this.socket.send({who:'jdg', what:'stop'});
  }

  private handleMessage(msg: any) {
    if (msg.what == 'kick') {
      this.submission.next(undefined);
      this.statusMessage.next(msg.data);
    }
    else if (msg.what == 'set') {
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
    this.socket.send({who:'jdg', what:'defer', data:submission.id})
  }

  preferences(problemPreferences: {}) {
    this.socket.send({who:'jdg', what:'pref', data: problemPreferences})
  }
}
