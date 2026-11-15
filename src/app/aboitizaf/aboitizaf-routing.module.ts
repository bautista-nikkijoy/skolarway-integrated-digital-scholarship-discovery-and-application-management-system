import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboitizafPage } from './aboitizaf.page';

const routes: Routes = [
  {
    path: '',
    component: AboitizafPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboitizafPageRoutingModule {}
