import {Component, Inject, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {Dish} from "../../shared/dish";
import {DishProvider} from "../../providers/dish/dish";
import {FavoriteProvider} from "../../providers/favorite/favorite";
import {DishdetailPage} from "../dishdetail/dishdetail";

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage implements OnInit{
  dishes: Dish[];
  errorMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private dishService: DishProvider,
              private favoriteService: FavoriteProvider,
              private toastCtrl: ToastController,
              @Inject('BaseURL') private BaseURL) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  ngOnInit(){
    this.dishService.getDishes()
      .subscribe(
        dishes => this.dishes = dishes,
        err => this.errorMessage = err
      )
  }
  dishSelected(event, dish){
    this.navCtrl.push(DishdetailPage, {
      dish: dish
    })
  }

  addToFavoriteDish(id: number){
    this.favoriteService.addFavorites(id);
    this.toastCtrl.create({
      message: `Dish  ${id} is added into favorites`,
      duration: 3000,
      position: 'middle',
    }).present();
  }

}
