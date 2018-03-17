import * as Rx from "rxjs/Rx";

import {ApiServiceImpl} from "lib/api.impl";
import {Submission} from "lib/models/submission";
import {acmcsus} from "proto/debugjudge_pb";

export interface JudgeApiService {

  submission: Rx.BehaviorSubject<Submission>;
  statusMessage: Rx.BehaviorSubject<string>;

  connectionSubscription: Rx.Subscription;

  startSession();
  stopSession();

  defer(submission: Submission);
  accept(submission: Submission);
  reject(submission: Submission);

  preferences(problemPreferences: {});

  handleMessage(s2jMessage: acmcsus.debugjudge.S2CMessage.S2JMessage): void;

}
