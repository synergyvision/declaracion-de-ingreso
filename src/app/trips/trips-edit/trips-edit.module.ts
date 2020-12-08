import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { TripsEditPageRoutingModule } from "./trips-edit-routing.module";

import { TripsEditPage } from "./trips-edit.page";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		SharedModule,
		IonicModule,
		TripsEditPageRoutingModule,
	],
	declarations: [TripsEditPage],
})
export class TripsEditPageModule {}
