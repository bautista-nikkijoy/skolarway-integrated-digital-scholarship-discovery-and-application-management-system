import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemplusPage } from './systemplus.page';

const routes: Routes = [
  {
    path: '',
    component: SystemplusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemplusPageRoutingModule {}
