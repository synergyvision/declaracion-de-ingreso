import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaxEditPage } from './tax-edit.page';

const routes: Routes = [
  {
    path: '',
    component: TaxEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaxEditPageRoutingModule {}
