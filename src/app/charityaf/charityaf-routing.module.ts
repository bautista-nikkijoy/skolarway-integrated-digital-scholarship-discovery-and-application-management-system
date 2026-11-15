import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharityafPage } from './charityaf.page';

const routes: Routes = [
  {
    path: '',
    component: CharityafPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharityafPageRoutingModule {}
