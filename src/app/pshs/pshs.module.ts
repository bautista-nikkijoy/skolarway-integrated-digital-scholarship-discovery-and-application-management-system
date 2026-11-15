import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PshsPageRoutingModule } from './pshs-routing.module';

import { PshsPage } from './pshs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PshsPageRoutingModule
  ],
  declarations: [PshsPage]
})
export class PshsPageModule {}
