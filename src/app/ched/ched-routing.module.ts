import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChedPage } from './ched.page';

const routes: Routes = [
  {
    path: '',
    component: ChedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChedPageRoutingModule {}
