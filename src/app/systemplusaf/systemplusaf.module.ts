import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SystemplusafPageRoutingModule } from './systemplusaf-routing.module';

import { SystemplusafPage } from './systemplusaf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule, // ✅ Add this line
    SystemplusafPageRoutingModule
  ],
  declarations: [SystemplusafPage]
})
export class SystemplusafPageModule {}
