import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DostPageRoutingModule } from './dost-routing.module';

import { DostPage } from './dost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DostPageRoutingModule
  ],
  declarations: [DostPage]
})
export class DostPageModule {}
