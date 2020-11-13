import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { FirebaseSignInPage } from "./firebase-sign-in.page";
import { ComponentsModule } from "../../../components/components.module";
import { SharedModule } from "../../../shared/shared.module";

const routes: Routes = [
  {
    path: "",
    component: FirebaseSignInPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
  ],
  declarations: [FirebaseSignInPage],
})
export class FirebaseSignInPageModule {}
