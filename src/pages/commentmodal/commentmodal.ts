import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the CommentmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-commentmodal',
  templateUrl: 'commentmodal.html',
})
export class CommentmodalPage {
  commentForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private viewCtrl: ViewController,
              private formBilder: FormBuilder) {

    this.commentForm = this.formBilder.group({
      author:['',Validators.required],
      rating:2,
      comment: ['', Validators.required]
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentmodalPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  submitComment(){
    this.viewCtrl.dismiss(this.commentForm.value)
  }

}
