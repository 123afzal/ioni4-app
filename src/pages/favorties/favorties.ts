import {Component, Inject, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, ItemSliding} from 'ionic-angular';
import {Dish} from '../../shared/dish';
import { FavoriteProvider } from '../../providers/favorite/favorite'

/**
 * Generated class for the FavortiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorties',
  templateUrl: 'favorties.html',
})
export class FavortiesPage implements OnInit{
  favorites: Dish[];
  errMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private favoriteService: FavoriteProvider,
              @Inject('BaseURL') private BaseURL) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavortiesPage');
  }

  ngOnInit(){
    this.favoriteService.getFavortieDishes()
      .subscribe(
        favorites => this.favorites = favorites,
        errMessage => this.errMessage = errMessage
      )
  }

  onDeleteFavoriteDish(item: ItemSliding, id: number){
    console.log('delete : ', id);
    this.favoriteService.deleteFavorite(id)
      .subscribe(
        favorites => this.favorites = favorites,
        errMessage => this.errMessage = errMessage
      );
    item.close();
  }

}
