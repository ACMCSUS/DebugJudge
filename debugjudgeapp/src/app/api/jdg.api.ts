import {WebSocketSubject} from "@reactivex/rxjs/dist/cjs/observable/dom/WebSocketSubject";
import {Subscription, BehaviorSubject} from "@reactivex/rxjs";
import {ApiService} from "../api";
import {Submission} from "../models/submission";

export class JudgingApi {
  public submission: BehaviorSubject<Submission>;
  public statusMessage: BehaviorSubject<string>;

  private static waitingMessage: string = 'Waiting for submission...';

  constructor(private apiService: ApiService, private socket: WebSocketSubject<any>){
    this.submission = new BehaviorSubject(undefined);
    this.statusMessage = new BehaviorSubject(JudgingApi.waitingMessage);
  }

  private sessionSubscription: Subscription = null;

  public startSession() {
    if (this.sessionSubscription !== null) {
      throw new Error('Judging session already in progress!');
    }

    this.sessionSubscription = this.socket.asObservable()
      .filter(msg => msg.who === 'jdg')
      .subscribe((msg) => this.handleMessage(msg));

    this.socket.next('jdg:start');
  }

  public stopSession() {
    if (this.sessionSubscription)
      this.sessionSubscription.unsubscribe();
    this.submission.next(undefined);
    this.statusMessage.next('Judging Session Ended');
    this.sessionSubscription = null;
    this.socket.next('jdg:stop');
  }

  private handleMessage(msg: any) {
    if (msg.what == 'kick') {
      this.submission.next(undefined);
      this.statusMessage.next(msg.why);
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

}
