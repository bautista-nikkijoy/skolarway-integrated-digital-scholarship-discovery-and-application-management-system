import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MegaworldafPageRoutingModule } from './megaworldaf-routing.module';

import { MegaworldafPage } from './megaworldaf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule, // ✅ Add this line
    MegaworldafPageRoutingModule
  ],
  declarations: [MegaworldafPage]
})
export class MegaworldafPageModule {}
