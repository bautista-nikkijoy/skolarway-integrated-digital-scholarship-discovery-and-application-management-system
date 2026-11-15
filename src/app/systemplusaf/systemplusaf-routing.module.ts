import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemplusafPage } from './systemplusaf.page';

const routes: Routes = [
  {
    path: '',
    component: SystemplusafPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemplusafPageRoutingModule {}
