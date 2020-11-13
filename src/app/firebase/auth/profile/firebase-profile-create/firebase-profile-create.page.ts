import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { SharedService } from "../../../../shared/shared.service";
import { FirebaseAuthService } from "../../firebase-auth.service";
import { Router } from "@angular/router";
import { LoadingController } from "@ionic/angular";

@Component({
	selector: "app-firebase-profile-create",
	templateUrl: "./firebase-profile-create.page.html",
	styleUrls: ["./firebase-profile-create.page.scss"],
})
export class FirebaseProfileCreatePage implements OnInit {
	profileForm: FormGroup;

	validation_messages = {
		name: [
			{
				type: "required",
				message: this.shared.translateText("validation.REQUIRED", {
					text: this.shared.translateText("fields.NAME"),
				}),
			},
		],
		lastName: [
			{
				type: "required",
				message: this.shared.translateText("validation.REQUIRED", {
					text: this.shared.translateText("fields.LAST_NAME"),
				}),
			},
		],
		id: [
			{
				type: "required",
				message: this.shared.translateText("validation.REQUIRED", {
					text: this.shared.translateText("fields.ID"),
				}),
			},
		],
		passport: [
			{
				type: "required",
				message: this.shared.translateText("validation.REQUIRED", {
					text: this.shared.translateText("fields.PASSPORT"),
				}),
			},
		],
		nationality: [
			{
				type: "required",
				message: this.shared.translateText("validation.REQUIRED", {
					text: this.shared.translateText("fields.NATIONALITY"),
				}),
			},
		],
		address: [
			{
				type: "required",
				message: this.shared.translateText("validation.REQUIRED", {
					text: this.shared.translateText("fields.ADDRESS"),
				}),
			},
		],
		profession: [
			{
				type: "required",
				message: this.shared.translateText("validation.REQUIRED", {
					text: this.shared.translateText("fields.PROFESSION"),
				}),
			},
		],
		countryOfOrigin: [
			{
				type: "required",
				message: this.shared.translateText("validation.REQUIRED", {
					text: this.shared.translateText("fields.COUNTRY_OF_ORIGIN"),
				}),
			},
		],
		countryOfResidence: [
			{
				type: "required",
				message: this.shared.translateText("validation.REQUIRED", {
					text: this.shared.translateText(
						"fields.COUNTRY_OF_RESIDENCE"
					),
				}),
			},
		],
	};

	constructor(
		private shared: SharedService,
		private fireAuth: FirebaseAuthService,
		private router: Router,
		private loadCtrl: LoadingController
	) {}

	ngOnInit() {
		this.profileForm = new FormGroup({
			name: new FormControl(
				"",
				Validators.compose([Validators.required])
			),
			lastName: new FormControl(
				"",
				Validators.compose([Validators.required])
			),
			sex: new FormControl(
				"male",
				Validators.compose([Validators.required])
			),
			id: new FormControl("", Validators.compose([Validators.required])),
			passport: new FormControl(
				"",
				Validators.compose([Validators.required])
			),
			nationality: new FormControl(
				"",
				Validators.compose([Validators.required])
			),
			address: new FormControl(
				"",
				Validators.compose([Validators.required])
			),
			profession: new FormControl(
				"",
				Validators.compose([Validators.required])
			),
			countryOfOrigin: new FormControl(
				"",
				Validators.compose([Validators.required])
			),
			countryOfResidence: new FormControl(
				"",
				Validators.compose([Validators.required])
			),
		});
	}

	doCreateProfile() {
		this.loadCtrl
			.create({
				keyboardClose: true,
				message: this.shared.translateText("profile.CREATING"),
			})
			.then((loadEl) => {
				loadEl.present();
				this.fireAuth.createProfile(this.profileForm.value).subscribe({
					next: null,
					error: (err) => {
						console.error(err, "Error!");
						loadEl.dismiss();
						this.shared.showAlert(
							this.shared.translateText("error.ERROR"),
							this.shared.translateText("error.UNEXPECTED")
						);
					},
					complete: () => {
						loadEl.dismiss();
						this.router.navigate(["app/categories"]);
					},
				});
			});
	}
}
