import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Http, Response} from "@angular/http";
import {baseUrl} from "../../shared/baseUrl";
import {ProcessHttpmsgProvider} from "../process-httpmsg/process-httpmsg"
import {Dish} from "../../shared/dish";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
/*
  Generated class for the DishProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DishProvider {

  constructor(public http: HttpClient,
              private processHttpmsgService: ProcessHttpmsgProvider) {
    console.log('Hello DishProvider Provider');
  }

  getDishes(): Observable<Dish[]> {
    return this.http.get(baseUrl + '/dishes')
      .map(res => this.processHttpmsgService.extractData(res))
      .catch(err => this.processHttpmsgService.handleError(err))
  }

  getDish(id: number): Observable<Dish> {
    return this.http.get(baseUrl + '/dishes/' + id)
      .map(res => this.processHttpmsgService.extractData(res))
      .catch(err => this.processHttpmsgService.handleError(err))
  }

  getFeaturedDish(): Observable<Dish> {
    console.log(baseUrl);
    return this.http.get(baseUrl + '/dishes/?featured=true')
      .map(res => this.processHttpmsgService.extractData(res)[0])
      .catch(err => this.processHttpmsgService.handleError(err))
  }
}
