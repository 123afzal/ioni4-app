import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { MenuPage } from '../pages/menu/menu';
import {FavortiesPage} from "../pages/favorties/favorties";
import {ReservationPage} from "../pages/reservation/reservation";
import {LoginPage} from "../pages/login/login";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, icon:string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
              private modalCtrl: ModalController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', icon:'home', component: HomePage },
      { title: 'About', icon:'information-circle', component: AboutPage},
      { title: 'Contact', icon:'list-box', component: ContactPage },
      { title: 'Menu', icon:'contact', component: MenuPage },
      { title: 'My Favorites', icon:'heart', component: FavortiesPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  openReserve() {
    let modal = this.modalCtrl.create(ReservationPage);
    modal.present();
  }

  openLogin(){
    let modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }
}
