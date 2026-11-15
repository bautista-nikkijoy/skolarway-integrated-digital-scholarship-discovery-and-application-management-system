import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmchatPage } from './smchat.page';

const routes: Routes = [
  {
    path: '',
    component: SmchatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmchatPageRoutingModule {}
