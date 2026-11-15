import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UaafPageRoutingModule } from './uaaf-routing.module';

import { UaafPage } from './uaaf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule, // ✅ Add this line
    UaafPageRoutingModule
  ],
  declarations: [UaafPage]
})
export class UaafPageModule {}
