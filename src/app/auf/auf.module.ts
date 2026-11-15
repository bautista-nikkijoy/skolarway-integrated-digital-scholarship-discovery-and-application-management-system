import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AufPageRoutingModule } from './auf-routing.module';

import { AufPage } from './auf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AufPageRoutingModule
  ],
  declarations: [AufPage]
})
export class AufPageModule {}
