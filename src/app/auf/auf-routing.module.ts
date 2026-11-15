import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AufPage } from './auf.page';

const routes: Routes = [
  {
    path: '',
    component: AufPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AufPageRoutingModule {}
