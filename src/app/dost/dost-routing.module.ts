import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DostPage } from './dost.page';

const routes: Routes = [
  {
    path: '',
    component: DostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DostPageRoutingModule {}
