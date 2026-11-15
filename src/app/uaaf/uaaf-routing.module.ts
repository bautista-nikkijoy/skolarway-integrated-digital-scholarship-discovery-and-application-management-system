import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UaafPage } from './uaaf.page';

const routes: Routes = [
  {
    path: '',
    component: UaafPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UaafPageRoutingModule {}
