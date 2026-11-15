import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboitizPage } from './aboitiz.page';

const routes: Routes = [
  {
    path: '',
    component: AboitizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboitizPageRoutingModule {}
