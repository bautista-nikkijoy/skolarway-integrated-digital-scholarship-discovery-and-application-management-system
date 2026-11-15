import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GbfafPage } from './gbfaf.page';

const routes: Routes = [
  {
    path: '',
    component: GbfafPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GbfafPageRoutingModule {}
