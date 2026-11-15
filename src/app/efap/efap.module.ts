import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EfapPageRoutingModule } from './efap-routing.module';

import { EfapPage } from './efap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EfapPageRoutingModule
  ],
  declarations: [EfapPage]
})
export class EfapPageModule {}
