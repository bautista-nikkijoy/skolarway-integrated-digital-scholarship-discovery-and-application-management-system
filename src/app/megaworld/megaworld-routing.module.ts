import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MegaworldPage } from './megaworld.page';

const routes: Routes = [
  {
    path: '',
    component: MegaworldPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MegaworldPageRoutingModule {}
