import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmafPageRoutingModule } from './smaf-routing.module';

import { SmafPage } from './smaf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule, // ✅ Add this line
    SmafPageRoutingModule
  ],
  declarations: [SmafPage]
})
export class SmafPageModule {}
