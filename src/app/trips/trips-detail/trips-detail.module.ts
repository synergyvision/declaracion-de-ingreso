import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { TripsDetailPageRoutingModule } from "./trips-detail-routing.module";

import { TripsDetailPage } from "./trips-detail.page";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		SharedModule,
		IonicModule,
		TripsDetailPageRoutingModule,
	],
	declarations: [TripsDetailPage],
})
export class TripsDetailPageModule {}
