import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";

/*
  Generated class for the ProcessHttpmsgProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProcessHttpmsgProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProcessHttpmsgProvider Provider');
  }

  public extractData(res: any){
    return res || {};
  }

  public handleError(error: any) {
    let errorMsg: string;
    if(error){
      const body = error.json();
      const err = body.error || JSON.stringify(body);
      errorMsg = `${err.status} - ${err.statusText || ''} ${err}`
    } else {
      errorMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errorMsg);
  }

}
