import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./firebase/auth/auth.guard";
import { ProfileGuard } from "./firebase/auth/profile.guard";
import { AutoSignOutGuard } from "./firebase/auth/auto-sign-out.guard";

const routes: Routes = [
	{
		path: "",
		redirectTo: "trips",
		pathMatch: "full",
	},
	{
		path: "auth",
		loadChildren: () =>
			import("./firebase/auth/firebase-auth.module").then(
				(m) => m.FirebaseAuthModule
			),
	},
	{
		path: "page-not-found",
		loadChildren: () =>
			import("./page-not-found/page-not-found.module").then(
				(m) => m.PageNotFoundModule
			),
	},
	{
		path: "auth/forgot-password",
		loadChildren: () =>
			import("./forgot-password/forgot-password.module").then(
				(m) => m.ForgotPasswordPageModule
			),
	},
	{
		path: "trips",
		loadChildren: () =>
			import("./trips/trips.module").then((m) => m.TripsPageModule),
		canActivate: [AuthGuard, ProfileGuard, AutoSignOutGuard],
	},
	{
		path: "settings",
		loadChildren: () =>
			import("./settings/settings.module").then(
				(m) => m.SettingsPageModule
			),
	},
	{
		path: "**",
		redirectTo: "page-not-found",
	},
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
