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
		path: "getting-started",
		loadChildren: () =>
			import("./getting-started/getting-started.module").then(
				(m) => m.GettingStartedPageModule
			),
	},
	{
		path: "auth",
		// loadChildren: () =>
		// 	import("./login/login.module").then((m) => m.LoginPageModule),
		loadChildren: () =>
			import("./firebase/auth/firebase-auth.module").then(
				(m) => m.FirebaseAuthModule
			),
	},
	// {
	// 	path: "auth/signup",
	// 	loadChildren: () =>
	// 		import("./signup/signup.module").then((m) => m.SignupPageModule),
	// },
	{
		path: "auth/forgot-password",
		loadChildren: () =>
			import("./forgot-password/forgot-password.module").then(
				(m) => m.ForgotPasswordPageModule
			),
	},
	{
		path: "app",
		loadChildren: () =>
			import("./tabs/tabs.module").then((m) => m.TabsPageModule),
		canActivate: [AuthGuard, ProfileGuard, AutoSignOutGuard],
	},
	{
		path: "contact-card",
		loadChildren: () =>
			import("./contact-card/contact-card.module").then(
				(m) => m.ContactCardPageModule
			),
	},
	{
		path: "forms-and-validations",
		loadChildren: () =>
			import("./forms/validations/forms-validations.module").then(
				(m) => m.FormsValidationsPageModule
			),
	},
	{
		path: "forms-filters",
		loadChildren: () =>
			import("./forms/filters/forms-filters.module").then(
				(m) => m.FormsFiltersPageModule
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
		path: "showcase",
		loadChildren: () =>
			import("./showcase/showcase.module").then(
				(m) => m.ShowcasePageModule
			),
	},
	{
		path: "firebase/crud",
		loadChildren: () =>
			import("./firebase/crud/firebase-crud.module").then(
				(m) => m.FirebaseCrudModule
			),
	},
	{
		path: "firebase/auth",
		loadChildren: () =>
			import("./firebase/auth/firebase-auth.module").then(
				(m) => m.FirebaseAuthModule
			),
	},
	{
		path: "maps",
		loadChildren: () =>
			import("./maps/maps.module").then((m) => m.MapsPageModule),
	},
	{
		path: "video-playlist",
		loadChildren: () =>
			import("./video-playlist/video-playlist.module").then(
				(m) => m.VideoPlaylistPageModule
			),
	},
	{
		path: "trips",
		loadChildren: () =>
			import("./trips/trips.module").then((m) => m.TripsPageModule),
		canActivate: [AuthGuard, ProfileGuard, AutoSignOutGuard],
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
