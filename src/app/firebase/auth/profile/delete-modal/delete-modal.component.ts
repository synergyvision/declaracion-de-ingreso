import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { SharedService } from "../../../../shared/shared.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
	selector: "app-delete-modal",
	templateUrl: "./delete-modal.component.html",
	styleUrls: ["./delete-modal.component.scss"],
})
export class DeleteModalComponent implements OnInit {
	deleteForm: FormGroup;

	validation_messages = {
		currentPassword: [
			{
				type: "required",
				message: this.shared.translateText("validation.REQUIRED", {
					text: this.shared.translateText("fields.CURRENT_PW"),
				}),
			},
			{
				type: "minlength",
				message: this.shared.translateText("validation.MIN_LEN", {
					text: this.shared.translateText("fields.CURRENT_PW"),
					value: this.shared.validation.password.MIN_LENGTH.toString(),
				}),
			},
		],
	};
	constructor(
		private modalCtrl: ModalController,
		private shared: SharedService
	) {
		this.deleteForm = new FormGroup({
			currentPassword: new FormControl(
				"",
				Validators.compose([Validators.required])
			),
		});
	}

	onCancel() {
		this.modalCtrl.dismiss(null, "cancel");
	}

	onDelete() {
		this.modalCtrl.dismiss(
			this.deleteForm.controls["currentPassword"].value,
			"delete"
		);
	}

	ngOnInit() {}
}
