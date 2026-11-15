import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmafPage } from './smaf.page';

const routes: Routes = [
  {
    path: '',
    component: SmafPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmafPageRoutingModule {}
