import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { IonicModule } from '@ionic/angular';

import { OwwaafPageRoutingModule } from './owwaaf-routing.module';

import { OwwaafPage } from './owwaaf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule, // ✅ Add this line
    OwwaafPageRoutingModule
  ],
  declarations: [OwwaafPage]
})
export class OwwaafPageModule {}
