import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VideogameDetailsPage } from './videogame-details.page';

const routes: Routes = [
  {
    path: '',
    component: VideogameDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VideogameDetailsPage]
})
export class VideogameDetailsPageModule {}
