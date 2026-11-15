import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AicsPageRoutingModule } from './aics-routing.module';

import { AicsPage } from './aics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AicsPageRoutingModule
  ],
  declarations: [AicsPage]
})
export class AicsPageModule {}
