import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { IonicModule } from '@ionic/angular';

import { ToyotaafPageRoutingModule } from './toyotaaf-routing.module';

import { ToyotaafPage } from './toyotaaf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule, // ✅ Add this line
    ToyotaafPageRoutingModule
  ],
  declarations: [ToyotaafPage]
})
export class ToyotaafPageModule {}
