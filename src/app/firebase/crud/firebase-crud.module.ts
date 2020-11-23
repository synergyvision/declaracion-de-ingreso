import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { ComponentsModule } from '../../components/components.module';
import { environment } from '../../../environments/environment';
import { SelectUserImageModal } from './user/select-image/select-user-image.modal';

const firebaseRoutes: Routes = [
  {
    path: 'listing',
    loadChildren: () => import('./../crud/listing/firebase-listing.module').then(m => m.FirebaseListingPageModule)
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./../crud/user/firebase-user-details.module').then(m => m.FirebaseUserDetailsPageModule)
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(firebaseRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  declarations: [SelectUserImageModal],
  exports: [SelectUserImageModal]
})
export class FirebaseCrudModule {}
