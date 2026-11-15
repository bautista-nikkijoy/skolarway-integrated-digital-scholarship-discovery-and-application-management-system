import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChedchatPageRoutingModule } from './chedchat-routing.module';

import { ChedchatPage } from './chedchat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChedchatPageRoutingModule
  ],
  declarations: [ChedchatPage]
})
export class ChedchatPageModule {}
