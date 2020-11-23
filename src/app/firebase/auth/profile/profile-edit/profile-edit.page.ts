import { Component, OnInit } from "@angular/core";
import { SharedService } from "../../../../shared/shared.service";
import { FirebaseAuthService } from "../../firebase-auth.service";
import { Router } from "@angular/router";
import { LoadingController } from "@ionic/angular";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { take } from "rxjs/operators";
import { FirebaseProfileModel } from "../firebase-profile.model";
import { CountryService } from "../../../../country/country.service";

@Component({
	selector: "app-profile-edit",
	templateUrl: "./profile-edit.page.html",
	styleUrls: ["./profile-edit.page.scss"],
})
export class ProfileEditPage implements OnInit {
	profileForm: FormGroup;
	oldProfile: FirebaseProfileModel;

	validation_messages = this.shared.profileValidationMessages;

	countries = [];

	constructor(
		private shared: SharedService,
		private fireAuth: FirebaseAuthService,
		private router: Router,
		private loadCtrl: LoadingController,
		private countryService: CountryService
	) {
		this.countries = countryService.getCountries();
	}

	ionViewWillEnter() {
		this.countries = this.countryService.getCountries();
	}

	ngOnInit() {
		let profile: FirebaseProfileModel;
		let validation = this.shared.validation;
		this.profileForm = new FormGroup({
			name: new FormControl(
				"",
				Validators.compose([
					Validators.required,
					Validators.maxLength(validation.name.MAX_LENGTH),
					Validators.pattern(validation.pattern.names),
				])
			),
			lastName: new FormControl(
				"",
				Validators.compose([
					Validators.required,
					Validators.maxLength(validation.lastName.MAX_LENGTH),
					Validators.pattern(validation.pattern.names),
				])
			),
			dob: new FormControl("", Validators.compose([Validators.required])),
			sex: new FormControl("", Validators.compose([Validators.required])),
			id: new FormControl(
				"",
				Validators.compose([
					Validators.required,
					Validators.maxLength(validation.id.MAX_LENGTH),
					Validators.pattern(validation.pattern.numbers),
				])
			),
			passport: new FormControl(
				"",
				Validators.compose([
					Validators.required,
					Validators.minLength(validation.passport.MIN_LENGTH),
					Validators.maxLength(validation.passport.MAX_LENGTH),
					Validators.pattern(validation.pattern.passports),
				])
			),
			nationality: new FormControl(
				"",
				Validators.compose([
					Validators.required,
					Validators.maxLength(validation.nationality.MAX_LENGTH),
					Validators.pattern(validation.pattern.names),
				])
			),
			address: new FormControl(
				"",
				Validators.compose([
					Validators.required,
					Validators.maxLength(validation.address.MAX_LENGTH),
					Validators.pattern(validation.pattern.specialChar),
				])
			),
			profession: new FormControl(
				"",
				Validators.compose([
					Validators.required,
					Validators.maxLength(validation.profession.MAX_LENGTH),
					Validators.pattern(validation.pattern.names),
				])
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

	noDecimals(event: any) {
		const pattern = /[.,]/;
		let inputChar = String.fromCharCode(event.charCode);

		if (pattern.test(inputChar)) {
			event.preventDefault();
		}
	}
}
