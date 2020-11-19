import { Component, OnInit } from "@angular/core";
import { SharedService } from "../../../../shared/shared.service";
import { FirebaseAuthService } from "../../firebase-auth.service";
import { Router } from "@angular/router";
import { LoadingController } from "@ionic/angular";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { take } from "rxjs/operators";
import { FirebaseProfileModel } from "../firebase-profile.model";

@Component({
	selector: "app-profile-edit",
	templateUrl: "./profile-edit.page.html",
	styleUrls: ["./profile-edit.page.scss"],
})
export class ProfileEditPage implements OnInit {
	profileForm: FormGroup;
	oldProfile: FirebaseProfileModel;

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
		dob: [
			{
				type: "required",
				message: this.shared.translateText("validation.REQUIRED", {
					text: this.shared.translateText("fields.DOB"),
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
		let profile: FirebaseProfileModel;
		this.profileForm = new FormGroup({
			name: new FormControl(
				"",
				Validators.compose([Validators.required])
			),
			lastName: new FormControl(
				"",
				Validators.compose([Validators.required])
			),
			dob: new FormControl("", Validators.compose([Validators.required])),
			sex: new FormControl("", Validators.compose([Validators.required])),
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
		this.loadCtrl
			.create({
				keyboardClose: true,
				message: this.shared.translateText("profile.RETRIEVING"),
			})
			.then((loadEl) => {
				loadEl.present();
				this.fireAuth
					.getProfileDataSource()
					.pipe(take(1))
					.subscribe((profile) => {
						this.oldProfile = profile;
						this.profileForm.setValue(profile);
						loadEl.dismiss();
					});
			});
	}

	doUpdateProfile() {
		this.loadCtrl
			.create({
				keyboardClose: true,
				message: this.shared.translateText("profile.UPDATING"),
			})
			.then((loadEl) => {
				loadEl.present();
				let differences: FirebaseProfileModel = {} as FirebaseProfileModel;
				for (var prop in this.profileForm.value) {
					if (this.profileForm.value.hasOwnProperty(prop)) {
						if (
							this.oldProfile[prop] !=
							this.profileForm.value[prop]
						) {
							differences[prop] = this.profileForm.value[prop];
						}
					}
				}
				this.fireAuth.updateProfile(differences).subscribe({
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
						this.router.navigate(["auth/profile"]);
					},
				});
			});
	}
}
