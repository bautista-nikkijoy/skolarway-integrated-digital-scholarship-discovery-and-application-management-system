import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TesdaafPage } from './tesdaaf.page';

const routes: Routes = [
  {
    path: '',
    component: TesdaafPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TesdaafPageRoutingModule {}
