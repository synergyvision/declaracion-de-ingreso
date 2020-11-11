import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../components/components.module';

import { FashionService } from '../fashion.service';
import { FashionListingPage } from './fashion-listing.page';
import { FashionListingResolver } from './fashion-listing.resolver';

const routes: Routes = [
  {
    path: '',
    component: FashionListingPage,
    resolve: {
      data: FashionListingResolver
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
  declarations: [FashionListingPage],
  providers: [
    FashionListingResolver,
    FashionService
  ]
})
export class FashionListingPageModule {}
