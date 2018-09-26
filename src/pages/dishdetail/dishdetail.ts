import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,ActionSheetController, ModalController } from 'ionic-angular';
import { Dish } from '../../shared/dish';
import { FavoriteProvider } from '../../providers/favorite/favorite'
import {CommentmodalPage} from "../commentmodal/commentmodal";

/**
 * Generated class for the DishdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dishdetail',
  templateUrl: 'dishdetail.html',
})
export class DishdetailPage {
  dish: Dish;
  errorMessage: string;
  avgstars: string;
  numcomments: number;
  favorite: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private favoriteService: FavoriteProvider,
              private toastCtrl: ToastController,
              private actionSheetCtrl: ActionSheetController,
              private modalCtrl: ModalController,
              @Inject('BaseURL') private BaseURL) {
    this.dish = navParams.get('dish');
    this.numcomments = this.dish.comments.length;
    this.favorite = this.favoriteService.isFavoriteDish(this.dish.id);
    let total = 0;
    this.dish.comments.forEach(comment => total += comment.rating);
    this.avgstars = (total/this.numcomments).toFixed(2);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DishdetailPage');
  }

  addToFavoriteDish(){
    this.favorite = this.favoriteService.addFavorites(this.dish.id);
    this.toastCtrl.create({
      message: `Dish  ${this.dish.id} is added into favorites`,
      duration: 3000,
      position: 'middle',
    }).present();
  }

  showActionSheet(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Actions',
      buttons: [
        {
          text: 'Add to Favorites',
          handler: () => {
            this.addToFavoriteDish();
          }
        },
        {
          text: 'Add Comments',
          handler: () => {
            this.openCommentModal();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
        }
      ]
    });

    actionSheet.present();
  }

  openCommentModal() {
    let modal = this.modalCtrl.create(CommentmodalPage);
    modal.present();
    modal.onDidDismiss(data => {
      data.date = new Date();
      this.dish.comments.push(data);
      this.numcomments = this.dish.comments.length
    })
  }
}
