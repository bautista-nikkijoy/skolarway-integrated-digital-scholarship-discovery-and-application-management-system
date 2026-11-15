import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmchatPageRoutingModule } from './smchat-routing.module';

import { SmchatPage } from './smchat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmchatPageRoutingModule
  ],
  declarations: [SmchatPage]
})
export class SmchatPageModule {}
