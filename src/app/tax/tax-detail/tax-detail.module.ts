import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { TaxDetailPageRoutingModule } from "./tax-detail-routing.module";

import { TaxDetailPage } from "./tax-detail.page";
import { SharedModule } from "../../shared/shared.module";

import { TaxDeleteModalComponent } from "../tax-delete-modal/tax-delete-modal.component";

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		SharedModule,
		IonicModule,
		TaxDetailPageRoutingModule,
	],
	entryComponents: [TaxDeleteModalComponent],
	declarations: [TaxDetailPage, TaxDeleteModalComponent],
})
export class TaxDetailPageModule {}
