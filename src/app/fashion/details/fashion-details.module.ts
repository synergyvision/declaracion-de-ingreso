import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../components/components.module';

import { FashionService } from '../fashion.service';
import { FashionDetailsPage } from './fashion-details.page';
import { FashionDetailsResolver } from './fashion-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: FashionDetailsPage,
    resolve: {
      data: FashionDetailsResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    HttpClientModule
  ],
  declarations: [
    FashionDetailsPage
  ],
  providers: [
    FashionDetailsResolver,
    FashionService
  ]
})
export class FashionDetailsPageModule {}
