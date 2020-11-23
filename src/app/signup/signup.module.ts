import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";
import { ComponentsModule } from "../components/components.module";

import { SignupPage } from "./signup.page";
import { TermsOfServicePage } from "../terms-of-service/terms-of-service.page";
import { PrivacyPolicyPage } from "../privacy-policy/privacy-policy.page";

import { SharedModule } from "../shared/shared.module";

const routes: Routes = [
  {
    path: "",
    component: SignupPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes),
    ComponentsModule,
  ],
  entryComponents: [TermsOfServicePage, PrivacyPolicyPage],
  declarations: [SignupPage, TermsOfServicePage, PrivacyPolicyPage],
})
export class SignupPageModule {}
