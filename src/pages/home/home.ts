import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {DishProvider} from '../../providers/dish/dish';
import {Dish} from '../../shared/dish';
import {LeaderProvider} from '../../providers/leader/leader';
import {Leader} from '../../shared/leader';
import {PromotionProvider} from '../../providers/promotion/promotion';
import {Promotion} from '../../shared/promotion';
import {Inject} from "@angular/core";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  dishErrMsg: string;
  leaderErrMsg: string;
  promotionErrMsg: string;

  constructor(public navCtrl: NavController,
              private dishServiceProvider: DishProvider ,
              private leaderServiceProvider: LeaderProvider,
              private promotionServiceProvider: PromotionProvider,
              @Inject('BaseURL') private BaseURL) {

  }

  ngOnInit(){
    this.dishServiceProvider.getFeaturedDish()
      .subscribe(
        dish => this.dish = dish,
        err => this.dishErrMsg = err
      );

    this.leaderServiceProvider.getFeaturedLeader()
      .subscribe(
        leader => this.leader = leader,
        err => this.leaderErrMsg = err
      );

    this.promotionServiceProvider.getFeaturedPromotion()
      .subscribe(
        promotion => this.promotion = promotion,
        err => this.promotionErrMsg = err
      );
  }

}
