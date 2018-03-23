import {Problem} from './model';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

export interface ApiTeamService {

  getProblems(): Observable<Problem[]>;

}

@Injectable()
export class ApiTeamServiceImpl {

  problemsUrl = '/api/problems';

  constructor(private http: HttpClient) {
  }

  getProblems(): Observable<Problem[]> {
    return this.http.get<Problem[]>(this.problemsUrl);
  }

}
