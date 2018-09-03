import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavortiesPage } from './favorties';

@NgModule({
  declarations: [
    FavortiesPage,
  ],
  imports: [
    IonicPageModule.forChild(FavortiesPage),
  ],
})
export class FavortiesPageModule {}
