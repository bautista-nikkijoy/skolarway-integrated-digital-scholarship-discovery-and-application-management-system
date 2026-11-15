import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChamberafPage } from './chamberaf.page';

const routes: Routes = [
  {
    path: '',
    component: ChamberafPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChamberafPageRoutingModule {}
