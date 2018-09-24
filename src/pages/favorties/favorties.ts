import {Component, Inject, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, ItemSliding, ToastController, LoadingController, AlertController} from 'ionic-angular';
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
              private toastCtrl: ToastController,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController,
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
    let loading = this.loadingCtrl.create({
      content : 'Deleting ...'
    });

    let toast = this.toastCtrl.create({
      message: `Dish with id ${id} is deleted succesfully`,
      duration: 3000
    });

    let alert = this.alertCtrl.create({
      title: 'Confirm Title',
      message: `Do you want to delete favorite with id ${id}`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Delete cancelled')
          }
        },
        {
          text: 'Delete',
          handler: () => {
            loading.present();
            this.favoriteService.deleteFavorite(id)
              .subscribe(
                favorites => {this.favorites = favorites, loading.dismiss(), toast.present()},
                errMessage => {this.errMessage = errMessage, loading.dismiss(); }
              );
          }
        }
      ]
    });
    console.log('delete : ', id);
    alert.present();
    item.close();
  }

}
