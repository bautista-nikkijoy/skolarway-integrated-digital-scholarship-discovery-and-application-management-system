import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PshsafPage } from './pshsaf.page';

const routes: Routes = [
  {
    path: '',
    component: PshsafPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PshsafPageRoutingModule {}
