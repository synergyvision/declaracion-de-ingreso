import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IonicModule } from "@ionic/angular";

import { TaxEditPageRoutingModule } from "./tax-edit-routing.module";

import { TaxEditPage } from "./tax-edit.page";
import { SharedModule } from "../../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		SharedModule,
		IonicModule,
		TaxEditPageRoutingModule,
	],
	declarations: [TaxEditPage],
})
export class TaxEditPageModule {}
