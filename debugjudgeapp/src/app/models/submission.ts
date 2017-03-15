import {Problem} from "./problem";
import {ApiService} from "../api";
import {PROBLEMS} from "../api-mock";
export class Submission {
  constructor(public id: number,
              public problemId: number,
              public teamId: number,
              public submissionTime: Date,
              public code: string,
              public judgeRuling: boolean) {}

  getProblem() : Problem {
    return PROBLEMS.filter(problem => problem.id == this.problemId)[0];
  }
}
