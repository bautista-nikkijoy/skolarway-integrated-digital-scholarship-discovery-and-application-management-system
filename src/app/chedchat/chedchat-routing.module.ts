import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChedchatPage } from './chedchat.page';

const routes: Routes = [
  {
    path: '',
    component: ChedchatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChedchatPageRoutingModule {}
