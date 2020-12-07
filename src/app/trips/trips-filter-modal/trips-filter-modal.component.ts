import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";
import { LoadingController, ModalController } from "@ionic/angular";
import { SharedService } from "../../shared/shared.service";

@Component({
	selector: "app-trips-filter-modal",
	templateUrl: "./trips-filter-modal.component.html",
	styleUrls: ["./trips-filter-modal.component.scss"],
})
export class TripsFilterModalComponent implements OnInit {
	filterForm: FormGroup;
	currentFilter: any;
	subscriptions: Subscription;

	constructor(
		private modalCtrl: ModalController,
		private shared: SharedService,
		private loadCtrl: LoadingController
	) {
		this.filterForm;
	}

	onCancel() {
		this.modalCtrl.dismiss(null, "cancel");
	}

	onChangeFilter() {}

	ngOnInit() {}
}
