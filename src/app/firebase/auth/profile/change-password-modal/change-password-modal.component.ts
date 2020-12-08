import { Component, OnInit } from "@angular/core";
import { LoadingController, ModalController } from "@ionic/angular";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { PasswordValidator } from "../../../../validators/password.validator";
import { SharedService } from "../../../../shared/shared.service";
import { FirebaseAuthService } from "../../firebase-auth.service";
import { Subscription, from } from "rxjs";
import { switchMap } from "rxjs/operators";
import { User } from "firebase";

@Component({
	selector: "app-change-password-modal",
	templateUrl: "./change-password-modal.component.html",
	styleUrls: ["./change-password-modal.component.scss"],
})
export class ChangePasswordModalComponent implements OnInit {
	changePasswordForm: FormGroup;
	matchingPasswordForm: FormGroup;
	currentUser: User;
	subscriptions: Subscription;

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
		newPassword: [
			{
				type: "required",
				message: this.shared.translateText("validation.REQUIRED", {
					text: this.shared.translateText("fields.NEW_PW"),
				}),
			},
			{
				type: "minlength",
				message: this.shared.translateText("validation.MIN_LEN", {
					text: this.shared.translateText("fields.NEW_PW"),
					value: this.shared.validation.password.MIN_LENGTH.toString(),
				}),
			},
		],
		confirmNewPassword: [
			{
				type: "required",
				message: this.shared.translateText("validation.REQUIRED", {
					text: this.shared.translateText("fields.CONFIRM_PW"),
				}),
			},
		],
		matchingPasswords: [
			{
				type: "areNotEqual",
				message: this.shared.translateText(
					"validation.password.NOT_EQUAL"
				),
			},
		],
	};

	constructor(
		private modalCtrl: ModalController,
		private shared: SharedService,
		private authService: FirebaseAuthService,
		private loadCtrl: LoadingController
	) {
		this.matchingPasswordForm = new FormGroup(
			{
				newPassword: new FormControl(
					"",
					Validators.compose([
						Validators.minLength(
							this.shared.validation.password.MIN_LENGTH
						),
						Validators.required,
					])
				),
				confirmNewPassword: new FormControl("", Validators.required),
			},
			(formGroup: FormGroup) => {
				return PasswordValidator.areNotEqual(formGroup);
			}
		);

		this.changePasswordForm = new FormGroup({
			currentPassword: new FormControl(
				"",
				Validators.compose([
					Validators.minLength(
						this.shared.validation.password.MIN_LENGTH
					),
					Validators.required,
				])
			),
			matchingPasswords: this.matchingPasswordForm,
		});

		this.subscriptions = this.authService.currentUser.subscribe((user) => {
			this.currentUser = user;
		});
	}

	onCancel() {
		this.modalCtrl.dismiss(null, "cancel");
	}

	onChangePassword() {
		const values = this.changePasswordForm.value;
		const credential = this.authService.getUserCredential(
			values.currentPassword
		);
		this.loadCtrl
			.create({
				keyboardClose: true,
				message: this.shared.translateText("profile.CHANGING_PW"),
			})
			.then((loadEl) => {
				loadEl.present();
				this.authService
					.getUserCredential(values.currentPassword)
					.pipe(
						switchMap((credential) => {
							return from(
								this.currentUser.reauthenticateWithCredential(
									credential
								)
							);
						}),
						switchMap((user) => {
							return from(
								this.currentUser.updatePassword(
									values.matchingPasswords.newPassword
								)
							);
						})
					)
					.subscribe(
						() => {
							loadEl.dismiss();
							this.modalCtrl.dismiss(null, "changePassword");
						},
						(error) => {
							loadEl.dismiss();
							let message: string;
							switch (error.code) {
								case "auth/wrong-password":
									message = "error.UNEXPECTED";
									break;

								case "auth/weak-password":
									message = "error.WEAK_PW";
									break;

								default:
									console.warn(error);
									message = "error.UNKNOWN";
									break;
							}
							this.shared.showAlert(
								this.shared.translateText("error.ERROR"),
								this.shared.translateText(message)
							);
						}
					);
			});
	}

	ngOnInit() {}
}
