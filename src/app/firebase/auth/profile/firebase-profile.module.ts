import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { ComponentsModule } from "../../../components/components.module";
import { AuthGuard } from "../auth.guard";
import { NoProfileGuard } from "../no-profile.guard";
import { FirebaseProfilePage } from "./firebase-profile.page";
import { ProfileEditPageModule } from "./profile-edit/profile-edit.module";
import { FirebaseProfileResolver } from "./firebase-profile.resolver";
import { SharedModule } from "../../../shared/shared.module";
import { ProfileGuard } from "../profile.guard";
import { PopoverComponent } from "./popover/popover.component";
import { DeleteModalComponent } from "./delete-modal/delete-modal.component";
import { ChangePasswordModalComponent } from "./change-password-modal/change-password-modal.component";
import { PictureModalComponent } from "./picture-modal/picture-modal.component";
import { AutoSignOutGuard } from "../auto-sign-out.guard";

const routes: Routes = [
	{
		path: "",
		component: FirebaseProfilePage,
		canActivate: [ProfileGuard, AutoSignOutGuard],
		resolve: {
			data: FirebaseProfileResolver,
		},
	},
	{
		path: "create",
		loadChildren: () =>
			import(
				"./firebase-profile-create/firebase-profile-create.module"
			).then((m) => m.FirebaseProfileCreatePageModule),
		canActivate: [NoProfileGuard, AutoSignOutGuard],
	},
	{
		path: "edit",
		loadChildren: () =>
			import("./profile-edit/profile-edit.module").then(
				(m) => m.ProfileEditPageModule
			),
		canActivate: [ProfileGuard, AutoSignOutGuard],
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
	entryComponents: [
		PopoverComponent,
		DeleteModalComponent,
		ChangePasswordModalComponent,
		PictureModalComponent,
	],
	declarations: [
		FirebaseProfilePage,
		PopoverComponent,
		DeleteModalComponent,
		ChangePasswordModalComponent,
		PictureModalComponent,
	],
	providers: [AuthGuard, FirebaseProfileResolver],
})
export class FirebaseProfilePageModule {}
