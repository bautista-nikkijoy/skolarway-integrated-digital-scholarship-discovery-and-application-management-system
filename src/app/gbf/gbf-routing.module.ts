import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GbfPage } from './gbf.page';

const routes: Routes = [
  {
    path: '',
    component: GbfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GbfPageRoutingModule {}
