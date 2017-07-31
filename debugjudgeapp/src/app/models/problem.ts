export class Problem {
  constructor(public id: number,
              public orderIndex: number,
              public title: string,
              public description: string,
              public language: string,
              public precode: string,
              public code: string,
              public postcode: string,
              public answer: string) {}
}
