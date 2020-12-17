import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
	selector: "app-tax-delete-modal",
	templateUrl: "./tax-delete-modal.component.html",
	styleUrls: ["./tax-delete-modal.component.scss"],
})
export class TaxDeleteModalComponent implements OnInit {
	constructor(private modalCtrl: ModalController) {}

	onCancel() {
		this.modalCtrl.dismiss(null, "cancel");
	}

	onDelete() {
		this.modalCtrl.dismiss(null, "delete");
	}

	ngOnInit() {}
}
