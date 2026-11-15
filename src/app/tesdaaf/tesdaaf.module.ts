import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TesdaafPageRoutingModule } from './tesdaaf-routing.module';

import { TesdaafPage } from './tesdaaf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // ✅ Add this line
    IonicModule,
    TesdaafPageRoutingModule
  ],
  declarations: [TesdaafPage]
})
export class TesdaafPageModule {}
