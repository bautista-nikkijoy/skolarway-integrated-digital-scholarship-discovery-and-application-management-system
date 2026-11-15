import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AicsPage } from './aics.page';

const routes: Routes = [
  {
    path: '',
    component: AicsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AicsPageRoutingModule {}
