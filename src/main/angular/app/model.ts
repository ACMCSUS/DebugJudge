export class Problem {
  constructor(public id?: number,
              public title?: string,
              public description?: string,
              public solved?: boolean,
              public problemType?: string,
              public debuggingProblem?: DebuggingProblem) {}

}
export class DebuggingProblem {
  constructor(public precode?: string,
              public code?: string,
              public postcode?: string,
              public answer?: string) {}
}
