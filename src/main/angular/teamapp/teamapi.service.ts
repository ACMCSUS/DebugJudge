import * as Rx from "rxjs/Rx";

import {ApiServiceImpl} from "lib/api.impl";
import {Submission} from "lib/models/submission";
import {acmcsus} from "proto/debugjudge_pb";
import {Problem} from "../lib/models/problem";

export interface TeamApiService {

  submissions: Rx.BehaviorSubject<Submission[]>;

  connectionSubscription: Rx.Subscription;

  handleMessage(s2tMessage: acmcsus.debugjudge.S2CMessage.S2TMessage): void;

  getSubmissions(): Promise<Submission[]>;

  submit(problem: Problem, code: String);

}
