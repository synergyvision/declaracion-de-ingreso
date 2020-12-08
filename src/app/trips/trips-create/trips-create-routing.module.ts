import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripsCreatePage } from './trips-create.page';

const routes: Routes = [
  {
    path: '',
    component: TripsCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TripsCreatePageRoutingModule {}
