import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { FirebaseProfileCreatePageRoutingModule } from "./firebase-profile-create-routing.module";

import { FirebaseProfileCreatePage } from "./firebase-profile-create.page";
import { SharedModule } from "../../../../shared/shared.module";

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		IonicModule,
		SharedModule,
		FirebaseProfileCreatePageRoutingModule,
	],
	declarations: [FirebaseProfileCreatePage],
})
export class FirebaseProfileCreatePageModule {}
