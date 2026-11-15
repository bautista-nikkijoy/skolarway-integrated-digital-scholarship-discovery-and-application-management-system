import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OwwaPageRoutingModule } from './owwa-routing.module';

import { OwwaPage } from './owwa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OwwaPageRoutingModule
  ],
  declarations: [OwwaPage]
})
export class OwwaPageModule {}
