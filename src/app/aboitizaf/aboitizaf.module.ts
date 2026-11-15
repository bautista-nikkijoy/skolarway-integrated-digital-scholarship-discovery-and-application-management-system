import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { IonicModule } from '@ionic/angular';

import { AboitizafPageRoutingModule } from './aboitizaf-routing.module';

import { AboitizafPage } from './aboitizaf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule, // ✅ Add this line
    AboitizafPageRoutingModule
  ],
  declarations: [AboitizafPage]
})
export class AboitizafPageModule {}
