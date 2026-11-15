import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChedPageRoutingModule } from './ched-routing.module';

import { ChedPage } from './ched.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChedPageRoutingModule
  ],
  declarations: [ChedPage]
})
export class ChedPageModule {}
