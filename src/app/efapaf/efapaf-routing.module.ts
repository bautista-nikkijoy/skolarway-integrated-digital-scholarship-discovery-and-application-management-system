import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EfapafPage } from './efapaf.page';

const routes: Routes = [
  {
    path: '',
    component: EfapafPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EfapafPageRoutingModule {}
