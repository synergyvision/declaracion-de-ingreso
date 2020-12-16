import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { TaxDetailPageRoutingModule } from "./tax-detail-routing.module";

import { TaxDetailPage } from "./tax-detail.page";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		SharedModule,
		IonicModule,
		TaxDetailPageRoutingModule,
	],
	declarations: [TaxDetailPage],
})
export class TaxDetailPageModule {}
