import {Problem} from "./problem";
import {ApiService} from "../api";
import {PROBLEMS} from "../api-mock";
import {isNull} from "util";
export class Submission {
  constructor(public id: number,
              public problem: Problem,
              public teamId: number,
              public submissionTime: Date,
              public code: string,
              public accepted: boolean) {
    if (isNull(accepted))
      this.accepted = undefined;
  }
}
