import {Injectable} from "@angular/core";
import {Problem} from "./models/problem";
import {PROBLEMS, SUBMISSIONS} from "./api-mock";
import {Submission} from "./models/submission";

@Injectable()
export class ApiService {

  problems: Problem[] = PROBLEMS;

  getProblem(id: number): Problem {
    if (this.problems != null)
      return this.problems[id];
    return undefined;
  }

  getProblems(): Promise<Problem[]> {
    return Promise.resolve(PROBLEMS).then(problems => this.problems = problems);
  }

  getSubmissions(): Promise<Submission[]> {
    return Promise.resolve(SUBMISSIONS);
}
}
