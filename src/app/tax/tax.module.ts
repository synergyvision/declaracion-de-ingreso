import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { TaxPageRoutingModule } from "./tax-routing.module";

import { TaxPage } from "./tax.page";
import { SharedModule } from "../shared/shared.module";

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		SharedModule,
		IonicModule,
		TaxPageRoutingModule,
	],
	declarations: [TaxPage],
})
export class TaxPageModule {}
