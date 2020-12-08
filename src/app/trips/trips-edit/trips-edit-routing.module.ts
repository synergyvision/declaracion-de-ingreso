import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripsEditPage } from './trips-edit.page';

const routes: Routes = [
  {
    path: '',
    component: TripsEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TripsEditPageRoutingModule {}
