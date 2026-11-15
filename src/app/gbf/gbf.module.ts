import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GbfPageRoutingModule } from './gbf-routing.module';

import { GbfPage } from './gbf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GbfPageRoutingModule
  ],
  declarations: [GbfPage]
})
export class GbfPageModule {}
