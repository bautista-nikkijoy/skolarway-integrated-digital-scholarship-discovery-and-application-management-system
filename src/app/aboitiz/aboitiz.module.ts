import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboitizPageRoutingModule } from './aboitiz-routing.module';

import { AboitizPage } from './aboitiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboitizPageRoutingModule
  ],
  declarations: [AboitizPage]
})
export class AboitizPageModule {}
