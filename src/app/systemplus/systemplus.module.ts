import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SystemplusPageRoutingModule } from './systemplus-routing.module';

import { SystemplusPage } from './systemplus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SystemplusPageRoutingModule
  ],
  declarations: [SystemplusPage]
})
export class SystemplusPageModule {}
