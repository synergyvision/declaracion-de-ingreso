import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-change-password-modal',
  templateUrl: './change-password-modal.component.html',
  styleUrls: ['./change-password-modal.component.scss'],
})
export class ChangePasswordModalComponent implements OnInit {
	constructor(private modalCtrl: ModalController) {}

	onCancel() {
		this.modalCtrl.dismiss(null, "cancel");
	}

	onChangePassword() {
		this.modalCtrl.dismiss(null, "changePassword");
	}

	ngOnInit() {}
}
