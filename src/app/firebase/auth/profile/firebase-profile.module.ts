import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { ComponentsModule } from "../../../components/components.module";
import { AuthGuard } from "../auth.guard";
import { FirebaseProfilePage } from "./firebase-profile.page";
import { FirebaseProfileResolver } from "./firebase-profile.resolver";
import { SharedModule } from "../../../shared/shared.module";

const routes: Routes = [
  {
    path: "",
    component: FirebaseProfilePage,
    canActivate: [AuthGuard],
    resolve: {
      data: FirebaseProfileResolver,
    },
  },
  {
    path: "create",
    loadChildren: () =>
      import("./firebase-profile-create/firebase-profile-create.module").then(
        (m) => m.FirebaseProfileCreatePageModule
      ),
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
  declarations: [FirebaseProfilePage],
  providers: [AuthGuard, FirebaseProfileResolver],
})
export class FirebaseProfilePageModule {}
