import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MegaworldPageRoutingModule } from './megaworld-routing.module';

import { MegaworldPage } from './megaworld.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MegaworldPageRoutingModule
  ],
  declarations: [MegaworldPage]
})
export class MegaworldPageModule {}
