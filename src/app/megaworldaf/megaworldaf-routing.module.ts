import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MegaworldafPage } from './megaworldaf.page';

const routes: Routes = [
  {
    path: '',
    component: MegaworldafPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MegaworldafPageRoutingModule {}
