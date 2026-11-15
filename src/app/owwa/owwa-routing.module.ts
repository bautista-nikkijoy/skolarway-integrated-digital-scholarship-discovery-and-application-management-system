import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwwaPage } from './owwa.page';

const routes: Routes = [
  {
    path: '',
    component: OwwaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwwaPageRoutingModule {}
