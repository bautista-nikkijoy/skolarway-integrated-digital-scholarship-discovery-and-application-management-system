import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UaPageRoutingModule } from './ua-routing.module';

import { UaPage } from './ua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UaPageRoutingModule
  ],
  declarations: [UaPage]
})
export class UaPageModule {}
