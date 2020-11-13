import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";
import { FirebaseSignUpPage } from "./firebase-sign-up.page";
import { ComponentsModule } from "../../../components/components.module";
import { SharedModule } from "../../../shared/shared.module";
import { TermsOfServicePage } from "../../../terms-of-service/terms-of-service.page";
import { PrivacyPolicyPage } from "../../../privacy-policy/privacy-policy.page";

const routes: Routes = [
	{
		path: "",
		component: FirebaseSignUpPage,
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
	declarations: [FirebaseSignUpPage, TermsOfServicePage, PrivacyPolicyPage],
})
export class FirebaseSignUpPageModule {}
