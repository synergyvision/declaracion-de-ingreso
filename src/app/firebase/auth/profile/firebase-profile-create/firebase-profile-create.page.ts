import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { SharedService } from "../../../../shared/shared.service";
import { FirebaseAuthService } from "../../firebase-auth.service";
import { Router } from "@angular/router";
import { LoadingController } from "@ionic/angular";
import { CountryService } from "../../../../country/country.service";

@Component({
	selector: "app-firebase-profile-create",
	templateUrl: "./firebase-profile-create.page.html",
	styleUrls: ["./firebase-profile-create.page.scss"],
})
export class FirebaseProfileCreatePage implements OnInit {
	profileForm: FormGroup;

	validation_messages: any;

	countries = [];

	constructor(
		private shared: SharedService,
		private fireAuth: FirebaseAuthService,
		private router: Router,
		private loadCtrl: LoadingController,
		private countryService: CountryService
	) {
		this.countries = countryService.getCountries();
		this.validation_messages = this.shared.profileValidationMessages;
	}

	ionViewWillEnter() {
		this.countries = this.countryService.getCountries();
	}

	ngOnInit() {
		const validation = this.shared.validation;
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
			idType: new FormControl(
				"",
				Validators.compose([Validators.required])
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
						this.router.navigate(["trips"]);
					},
				});
			});
	}

	noDecimals(event: any) {
		const pattern = /[0-9]/;
		let inputChar = String.fromCharCode(event.charCode);

		if (!pattern.test(inputChar)) {
			event.preventDefault();
		}
	}
}
