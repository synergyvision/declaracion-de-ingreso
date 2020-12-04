import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TripsDetailPage } from "./trips-detail.page";

const routes: Routes = [
	{
		path: "",
		component: TripsDetailPage,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TripsDetailPageRoutingModule {}
