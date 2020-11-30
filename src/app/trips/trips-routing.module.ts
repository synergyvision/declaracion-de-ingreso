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
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TripsPageRoutingModule {}
