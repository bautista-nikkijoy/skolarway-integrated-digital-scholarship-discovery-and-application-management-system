import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HauPageRoutingModule } from './hau-routing.module';

import { HauPage } from './hau.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HauPageRoutingModule
  ],
  declarations: [HauPage]
})
export class HauPageModule {}
