import * as Long from 'long';

export class Profile {
  constructor(public id?: Long,
              public name?: string,
              public isTeam?: boolean,
              public isJudge?: boolean,
              public isAdmin?: boolean) {}
}

export class Problem {
  constructor(public id?: Long,
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
