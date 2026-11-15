import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { IonicModule } from '@ionic/angular';

import { PshsafPageRoutingModule } from './pshsaf-routing.module';

import { PshsafPage } from './pshsaf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule, // ✅ Add this line
    PshsafPageRoutingModule
  ],
  declarations: [PshsafPage]
})
export class PshsafPageModule {}
