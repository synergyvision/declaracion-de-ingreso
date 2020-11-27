import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { TripsPageRoutingModule } from "./trips-routing.module";

import { TripsPage } from "./trips.page";
import { SharedModule } from "../shared/shared.module";

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		IonicModule,
		SharedModule,
		TripsPageRoutingModule,
	],
	declarations: [TripsPage],
})
export class TripsPageModule {}
