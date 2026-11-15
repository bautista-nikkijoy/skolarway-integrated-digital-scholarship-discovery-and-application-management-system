import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { IonicModule } from '@ionic/angular';

import { GbfafPageRoutingModule } from './gbfaf-routing.module';

import { GbfafPage } from './gbfaf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // ✅ Add this line
    IonicModule,
    GbfafPageRoutingModule
  ],
  declarations: [GbfafPage]
})
export class GbfafPageModule {}
