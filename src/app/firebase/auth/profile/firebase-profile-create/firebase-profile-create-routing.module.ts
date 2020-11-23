import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirebaseProfileCreatePage } from './firebase-profile-create.page';

const routes: Routes = [
  {
    path: '',
    component: FirebaseProfileCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirebaseProfileCreatePageRoutingModule {}
