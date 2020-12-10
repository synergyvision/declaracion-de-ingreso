import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SettingsPageRoutingModule } from "./settings-routing.module";

import { ChangePasswordModalComponent } from "./change-password-modal/change-password-modal.component";

import { SettingsPage } from "./settings.page";
import { SharedModule } from "../shared/shared.module";
import { ComponentsModule } from "../components/components.module";
import { TripsFilterModalComponent } from "../trips/trips-filter-modal/trips-filter-modal.component";

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		IonicModule,
		SharedModule,
		SettingsPageRoutingModule,
		ComponentsModule,
	],
	entryComponents: [ChangePasswordModalComponent, TripsFilterModalComponent],
	declarations: [SettingsPage, ChangePasswordModalComponent],
})
export class SettingsPageModule {}
