import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Http, Response} from "@angular/http";
import {baseUrl} from "../../shared/baseUrl";
import {ProcessHttpmsgProvider} from "../process-httpmsg/process-httpmsg"
import {Promotion} from "../../shared/promotion";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
/*
  Generated class for the PromotionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PromotionProvider {

  constructor(public http: HttpClient,
              private processHttpmsgService: ProcessHttpmsgProvider) {
    console.log('Hello PromotionProvider Provider');
  }

  getPromotions(): Observable<Promotion[]> {
    return this.http.get(baseUrl + '/promotions')
      .map(res => this.processHttpmsgService.extractData(res))
      .catch(err => this.processHttpmsgService.handleError(err))
  }

  getPromotion(id: number): Observable<Promotion> {
    return this.http.get(baseUrl + '/promotions/' + id)
      .map(res => this.processHttpmsgService.extractData(res))
      .catch(err => this.processHttpmsgService.handleError(err))
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.http.get(baseUrl + '/promotions/?featured=true')
      .map(res => this.processHttpmsgService.extractData(res)[0])
      .catch(err => this.processHttpmsgService.handleError(err))
  }

}
