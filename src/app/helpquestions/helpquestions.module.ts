import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelpquestionsPageRoutingModule } from './helpquestions-routing.module';

import { HelpquestionsPage } from './helpquestions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelpquestionsPageRoutingModule
  ],
  declarations: [HelpquestionsPage]
})
export class HelpquestionsPageModule {}
