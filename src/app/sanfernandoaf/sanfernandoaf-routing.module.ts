import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SanfernandoafPage } from './sanfernandoaf.page';

const routes: Routes = [
  {
    path: '',
    component: SanfernandoafPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SanfernandoafPageRoutingModule {}
