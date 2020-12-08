import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
	selector: "app-trips-delete-modal",
	templateUrl: "./trips-delete-modal.component.html",
	styleUrls: ["./trips-delete-modal.component.scss"],
})
export class TripsDeleteModalComponent implements OnInit {
	constructor(private modalCtrl: ModalController) {}

	onCancel() {
		this.modalCtrl.dismiss(null, "cancel");
	}

	onDelete() {
		this.modalCtrl.dismiss(null, "delete");
	}

	ngOnInit() {}
}
