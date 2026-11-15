import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HauafPage } from './hauaf.page';

const routes: Routes = [
  {
    path: '',
    component: HauafPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HauafPageRoutingModule {}
