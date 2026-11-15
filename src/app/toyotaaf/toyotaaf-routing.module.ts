import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToyotaafPage } from './toyotaaf.page';

const routes: Routes = [
  {
    path: '',
    component: ToyotaafPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToyotaafPageRoutingModule {}
