import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AicsafPage } from './aicsaf.page';

const routes: Routes = [
  {
    path: '',
    component: AicsafPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AicsafPageRoutingModule {}
