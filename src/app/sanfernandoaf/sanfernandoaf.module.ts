import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SanfernandoafPageRoutingModule } from './sanfernandoaf-routing.module';

import { SanfernandoafPage } from './sanfernandoaf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // ✅ Add this line
    IonicModule,
    SanfernandoafPageRoutingModule
  ],
  declarations: [SanfernandoafPage]
})
export class SanfernandoafPageModule {}
