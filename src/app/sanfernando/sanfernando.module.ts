import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SanfernandoPageRoutingModule } from './sanfernando-routing.module';

import { SanfernandoPage } from './sanfernando.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SanfernandoPageRoutingModule
  ],
  declarations: [SanfernandoPage]
})
export class SanfernandoPageModule {}
