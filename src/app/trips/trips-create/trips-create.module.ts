import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";

import { IonicModule } from "@ionic/angular";

import { TripsCreatePageRoutingModule } from "./trips-create-routing.module";

import { TripsCreatePage } from "./trips-create.page";

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		IonicModule,
		SharedModule,
		TripsCreatePageRoutingModule,
	],
	declarations: [TripsCreatePage],
})
export class TripsCreatePageModule {}
