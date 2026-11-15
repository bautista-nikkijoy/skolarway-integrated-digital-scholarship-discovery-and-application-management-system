import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { IonicModule } from '@ionic/angular';

import { LaverdadafPageRoutingModule } from './laverdadaf-routing.module';

import { LaverdadafPage } from './laverdadaf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // ✅ Add this line
    IonicModule,
    LaverdadafPageRoutingModule
  ],
  declarations: [LaverdadafPage]
})
export class LaverdadafPageModule {}
