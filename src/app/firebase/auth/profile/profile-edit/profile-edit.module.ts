import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ProfileEditPageRoutingModule } from "./profile-edit-routing.module";

import { ProfileEditPage } from "./profile-edit.page";
import { SharedModule } from "../../../../shared/shared.module";

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		SharedModule,
		IonicModule,
		ProfileEditPageRoutingModule,
	],
	declarations: [ProfileEditPage],
})
export class ProfileEditPageModule {}
