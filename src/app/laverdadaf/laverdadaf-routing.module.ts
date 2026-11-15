import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaverdadafPage } from './laverdadaf.page';

const routes: Routes = [
  {
    path: '',
    component: LaverdadafPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaverdadafPageRoutingModule {}
