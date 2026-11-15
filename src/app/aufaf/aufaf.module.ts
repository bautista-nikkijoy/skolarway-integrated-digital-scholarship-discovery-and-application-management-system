import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AufafPageRoutingModule } from './aufaf-routing.module';

import { AufafPage } from './aufaf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule, // ✅ Add this line
    AufafPageRoutingModule
  ],
  declarations: [AufafPage]
})
export class AufafPageModule {}
