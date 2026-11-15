import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { IonicModule } from '@ionic/angular';

import { AicsafPageRoutingModule } from './aicsaf-routing.module';

import { AicsafPage } from './aicsaf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule, // ✅ Add this line
    AicsafPageRoutingModule
  ],
  declarations: [AicsafPage]
})
export class AicsafPageModule {}
