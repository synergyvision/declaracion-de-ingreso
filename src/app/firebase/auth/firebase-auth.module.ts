import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { ComponentsModule } from "../../components/components.module";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireModule } from "@angular/fire";
import { environment } from "../../../environments/environment";
import { FirebaseAuthService } from "./firebase-auth.service";
import { NoAuthGuard } from "./no-auth.guard";
import { AuthGuard } from "./auth.guard";
import { AutoSignOutGuard } from "./auto-sign-out.guard";
import { TranslateModule } from "@ngx-translate/core";

const routes: Routes = [
	{
		path: "login",
		loadChildren: () =>
			import("./sign-in/firebase-sign-in.module").then(
				(m) => m.FirebaseSignInPageModule
			),
		canActivate: [NoAuthGuard],
	},
	{
		path: "signup",
		loadChildren: () =>
			import("./sign-up/firebase-sign-up.module").then(
				(m) => m.FirebaseSignUpPageModule
			),
		canActivate: [NoAuthGuard],
	},
	{
		path: "profile",
		loadChildren: () =>
			import("./profile/firebase-profile.module").then(
				(m) => m.FirebaseProfilePageModule
			),
		canActivate: [AuthGuard, AutoSignOutGuard],
	},
];

@NgModule({
	imports: [
		CommonModule,
		IonicModule,
		ComponentsModule,
		RouterModule.forChild(routes),
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireAuthModule,
		TranslateModule,
	],
})
export class FirebaseAuthModule {}
