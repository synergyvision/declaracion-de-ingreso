import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TripsPage } from "./trips.page";

const routes: Routes = [
	{
		path: "",
		component: TripsPage,
	},
	{
		path: "create",
		loadChildren: () =>
			import("./trips-create/trips-create.module").then(
				(m) => m.TripsCreatePageModule
			),
	},
	{
		path: "detail",
		loadChildren: () =>
			import("./trips-detail/trips-detail.module").then(
				(m) => m.TripsDetailPageModule
			),
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TripsPageRoutingModule {}
