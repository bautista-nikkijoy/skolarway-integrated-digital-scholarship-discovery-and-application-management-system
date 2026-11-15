import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AufafPage } from './aufaf.page';

const routes: Routes = [
  {
    path: '',
    component: AufafPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AufafPageRoutingModule {}
