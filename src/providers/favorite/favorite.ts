import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FavoriteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoriteProvider {
  favorites: Array<any>;
  constructor(public http: HttpClient) {
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
}
