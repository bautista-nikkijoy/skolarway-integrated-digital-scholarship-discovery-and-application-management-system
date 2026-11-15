import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DostchatPage } from './dostchat.page';

const routes: Routes = [
  {
    path: '',
    component: DostchatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DostchatPageRoutingModule {}
