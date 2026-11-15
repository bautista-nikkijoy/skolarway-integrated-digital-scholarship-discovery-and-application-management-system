import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChamberPageRoutingModule } from './chamber-routing.module';

import { ChamberPage } from './chamber.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChamberPageRoutingModule
  ],
  declarations: [ChamberPage]
})
export class ChamberPageModule {}
