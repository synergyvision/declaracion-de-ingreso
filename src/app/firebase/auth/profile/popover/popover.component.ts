import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
	selector: "app-popover",
	templateUrl: "./popover.component.html",
	styleUrls: ["./popover.component.scss"],
})
export class PopoverComponent implements OnInit {
	constructor(
		private popoverCtrl: PopoverController,
		private router: Router
	) {}

	editProfile() {
		this.router.navigate(["auth/profile/edit"]);
		this.popoverCtrl.dismiss();
	}

	ngOnInit() {}
}
