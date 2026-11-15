import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SanfernandoPage } from './sanfernando.page';

const routes: Routes = [
  {
    path: '',
    component: SanfernandoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SanfernandoPageRoutingModule {}
