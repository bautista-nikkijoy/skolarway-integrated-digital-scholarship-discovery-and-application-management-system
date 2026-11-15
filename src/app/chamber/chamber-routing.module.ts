import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChamberPage } from './chamber.page';

const routes: Routes = [
  {
    path: '',
    component: ChamberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChamberPageRoutingModule {}
