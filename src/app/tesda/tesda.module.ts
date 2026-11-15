import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TesdaPageRoutingModule } from './tesda-routing.module';

import { TesdaPage } from './tesda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TesdaPageRoutingModule
  ],
  declarations: [TesdaPage]
})
export class TesdaPageModule {}
