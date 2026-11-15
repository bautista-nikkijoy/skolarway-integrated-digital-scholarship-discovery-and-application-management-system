import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { IonicModule } from '@ionic/angular';

import { EfapafPageRoutingModule } from './efapaf-routing.module';

import { EfapafPage } from './efapaf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule, // ✅ Add this line
    EfapafPageRoutingModule
  ],
  declarations: [EfapafPage]
})
export class EfapafPageModule {}
