import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
	selector: "app-delete-modal",
	templateUrl: "./delete-modal.component.html",
	styleUrls: ["./delete-modal.component.scss"],
})
export class DeleteModalComponent implements OnInit {
	constructor(private modalCtrl: ModalController) {}

	onCancel() {
		this.modalCtrl.dismiss(null, "cancel");
	}

	onDelete() {
		this.modalCtrl.dismiss(null, "delete");
	}

	ngOnInit() {}
}
