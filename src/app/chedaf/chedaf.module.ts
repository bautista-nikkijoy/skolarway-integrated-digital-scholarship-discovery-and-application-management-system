import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // ✅ Added ReactiveFormsModule
import { IonicModule } from '@ionic/angular';

import { ChedafPageRoutingModule } from './chedaf-routing.module';
import { ChedafPage } from './chedaf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // ✅ Add this line
    IonicModule,
    ChedafPageRoutingModule
  ],
  declarations: [ChedafPage]
})
export class ChedafPageModule {}
