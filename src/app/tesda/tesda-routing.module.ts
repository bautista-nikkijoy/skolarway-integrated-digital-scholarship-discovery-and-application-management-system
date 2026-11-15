import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TesdaPage } from './tesda.page';

const routes: Routes = [
  {
    path: '',
    component: TesdaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TesdaPageRoutingModule {}
