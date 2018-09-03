import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DishProvider } from '../dish/dish';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {Dish} from "../../shared/dish";
/*
  Generated class for the FavoriteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoriteProvider {

  favorites: Array<any>;

  constructor(public http: HttpClient,
              private dishService: DishProvider) {
    console.log('Hello FavoriteProvider Provider');
    this.favorites = [];
  }

  addFavorites(id: number): boolean{
    this.favorites.push(id);
    return true;
  }

  isFavoriteDish(id: number): boolean{
    return this.favorites.some(el => el === id)
  }

  getFavortieDishes(): Observable<Dish[]>{
    return this.dishService.getDishes()
      .map(dishes => dishes.filter(dish => this.favorites.some(el => el === dish.id)))
  }

  deleteFavorite(id: number): Observable<Dish[]> {
    let index = this.favorites.indexOf(id);
    if(index >= 0){
      this.favorites.splice(index, 1);
      return this.getFavortieDishes()
    } else {
      return Observable.throw('Deleting non-existing favorite '+ id)
    }
  }
}
