import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TaxPage } from "./tax.page";

const routes: Routes = [
  {
    path: "",
    component: TaxPage,
  },
  {
    path: "detail",
    loadChildren: () =>
      import("./tax-detail/tax-detail.module").then(
        (m) => m.TaxDetailPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaxPageRoutingModule {}
