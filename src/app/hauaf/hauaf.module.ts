import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HauafPageRoutingModule } from './hauaf-routing.module';

import { HauafPage } from './hauaf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule, // ✅ Add this line
    HauafPageRoutingModule
  ],
  declarations: [HauafPage]
})
export class HauafPageModule {}
