import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UaPage } from './ua.page';

const routes: Routes = [
  {
    path: '',
    component: UaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UaPageRoutingModule {}
