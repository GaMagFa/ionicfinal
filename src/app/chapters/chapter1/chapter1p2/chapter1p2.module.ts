import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Chapter1p2Page } from './chapter1p2.page';

const routes: Routes = [
  {
    path: '',
    component: Chapter1p2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Chapter1p2Page]
})
export class Chapter1p2PageModule {}
