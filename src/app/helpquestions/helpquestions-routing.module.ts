import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpquestionsPage } from './helpquestions.page';

const routes: Routes = [
  {
    path: '',
    component: HelpquestionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpquestionsPageRoutingModule {}
