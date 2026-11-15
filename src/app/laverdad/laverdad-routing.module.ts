import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaverdadPage } from './laverdad.page';

const routes: Routes = [
  {
    path: '',
    component: LaverdadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaverdadPageRoutingModule {}
