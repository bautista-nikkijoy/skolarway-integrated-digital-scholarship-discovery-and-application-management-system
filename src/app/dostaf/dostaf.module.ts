import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // ✅ Added ReactiveFormsModule
import { IonicModule } from '@ionic/angular';

import { DostafPageRoutingModule } from './dostaf-routing.module';

import { DostafPage } from './dostaf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // ✅ Add this line
    IonicModule,
    DostafPageRoutingModule
  ],
  declarations: [DostafPage]
})
export class DostafPageModule {}
