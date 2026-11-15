import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaverdadPageRoutingModule } from './laverdad-routing.module';

import { LaverdadPage } from './laverdad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaverdadPageRoutingModule
  ],
  declarations: [LaverdadPage]
})
export class LaverdadPageModule {}
