import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChedafPage } from './chedaf.page';

const routes: Routes = [
  {
    path: '',
    component: ChedafPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChedafPageRoutingModule {}
