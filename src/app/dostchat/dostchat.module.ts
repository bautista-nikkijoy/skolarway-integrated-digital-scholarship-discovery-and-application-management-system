import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DostchatPageRoutingModule } from './dostchat-routing.module';

import { DostchatPage } from './dostchat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DostchatPageRoutingModule
  ],
  declarations: [DostchatPage]
})
export class DostchatPageModule {}
