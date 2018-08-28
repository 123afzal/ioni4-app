import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {baseUrl} from "../../shared/baseUrl";
import {ProcessHttpmsgProvider} from "../process-httpmsg/process-httpmsg"
import {Leader} from "../../shared/leader";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
/*
  Generated class for the LeaderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LeaderProvider {

  constructor(public http: HttpClient,
              private processHttpmsgService: ProcessHttpmsgProvider) {
    console.log('Hello LeaderPrvider Provider');
  }

  getLeaders(): Observable<Leader[]> {
    return this.http.get(baseUrl + '/leaders')
      .map(res => this.processHttpmsgService.extractData(res))
      .catch(err => this.processHttpmsgService.handleError(err))
  }

  getLeader(id: number): Observable<Leader> {
    return this.http.get(baseUrl + '/leaders/' + id)
      .map(res => this.processHttpmsgService.extractData(res))
      .catch(err => this.processHttpmsgService.handleError(err))
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.http.get(baseUrl + '/leaders/?featured=true')
      .map(res => this.processHttpmsgService.extractData(res)[0])
      .catch(err => this.processHttpmsgService.handleError(err))
  }

}
