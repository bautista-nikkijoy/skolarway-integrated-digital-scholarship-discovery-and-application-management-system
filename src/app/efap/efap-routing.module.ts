import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EfapPage } from './efap.page';

const routes: Routes = [
  {
    path: '',
    component: EfapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EfapPageRoutingModule {}
