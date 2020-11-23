import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { take } from "rxjs/operators";
import { AlertController } from "@ionic/angular";

@Injectable({
	providedIn: "root",
})
export class SharedService {
	constructor(
		private translate: TranslateService,
		private alertCtrl: AlertController
	) {}

	public validation = {
		pattern: {
			names: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/,
			emails: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
			numbers: /^[0-9]+$/,
			passports: /^(?!^0+$)[a-zA-Z0-9]+$/,
			specialChar: /^[0-9a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/,
		},
		password: {
			MIN_LENGTH: 5,
		},
		name: {
			MAX_LENGTH: 25,
		},
		lastName: {
			MAX_LENGTH: 25,
		},
		id: {
			MAX_LENGTH: 9,
		},
		passport: {
			MIN_LENGTH: 3,
			MAX_LENGTH: 20,
		},
		nationality: {
			MAX_LENGTH: 20,
		},
		address: {
			MAX_LENGTH: 200,
		},
		profession: {
			MAX_LENGTH: 20,
		},
	};

	public profileValidationMessages = {
		name: [
			{
				type: "required",
				message: this.translateText("validation.REQUIRED", {
					text: this.translateText("fields.NAME"),
				}),
			},
			{
				type: "maxlength",
				message: this.translateText("validation.MAX_LEN", {
					text: this.translateText("fields.NAME"),
					value: this.validation.name.MAX_LENGTH.toString(),
				}),
			},
			{
				type: "pattern",
				message: this.translateText("validation.NAMES", {
					text: this.translateText("fields.NAME"),
				}),
			},
		],
		lastName: [
			{
				type: "required",
				message: this.translateText("validation.REQUIRED", {
					text: this.translateText("fields.LAST_NAME"),
				}),
			},
			{
				type: "maxlength",
				message: this.translateText("validation.MAX_LEN", {
					text: this.translateText("fields.LAST_NAME"),
					value: this.validation.lastName.MAX_LENGTH.toString(),
				}),
			},
			{
				type: "pattern",
				message: this.translateText("validation.NAMES", {
					text: this.translateText("fields.LAST_NAME"),
				}),
			},
		],
		dob: [
			{
				type: "required",
				message: this.translateText("validation.REQUIRED", {
					text: this.translateText("fields.DOB"),
				}),
			},
		],
		id: [
			{
				type: "required",
				message: this.translateText("validation.REQUIRED", {
					text: this.translateText("fields.ID"),
				}),
			},
			{
				type: "maxlength",
				message: this.translateText("validation.MAX_LEN", {
					text: this.translateText("fields.ID"),
					value: this.validation.id.MAX_LENGTH.toString(),
				}),
			},
			{
				type: "pattern",
				message: this.translateText("validation.NUMBERS", {
					text: this.translateText("fields.ID"),
				}),
			},
		],
		passport: [
			{
				type: "required",
				message: this.translateText("validation.REQUIRED", {
					text: this.translateText("fields.PASSPORT"),
				}),
			},
			{
				type: "minlength",
				message: this.translateText("validation.MIN_LEN", {
					text: this.translateText("fields.PASSPORT"),
					value: this.validation.passport.MIN_LENGTH.toString(),
				}),
			},
			{
				type: "maxlength",
				message: this.translateText("validation.MAX_LEN", {
					text: this.translateText("fields.PASSPORT"),
					value: this.validation.passport.MAX_LENGTH.toString(),
				}),
			},
			{
				type: "pattern",
				message: this.translateText("validation.passport.PATTERN", {
					text: this.translateText("fields.PASSPORT"),
				}),
			},
		],
		nationality: [
			{
				type: "required",
				message: this.translateText("validation.REQUIRED", {
					text: this.translateText("fields.NATIONALITY"),
				}),
			},
			{
				type: "maxlength",
				message: this.translateText("validation.MAX_LEN", {
					text: this.translateText("fields.NATIONALITY"),
					value: this.validation.nationality.MAX_LENGTH.toString(),
				}),
			},
			{
				type: "pattern",
				message: this.translateText("validation.NAMES", {
					text: this.translateText("fields.NATIONALITY"),
				}),
			},
		],
		address: [
			{
				type: "required",
				message: this.translateText("validation.REQUIRED", {
					text: this.translateText("fields.ADDRESS"),
				}),
			},
			{
				type: "maxlength",
				message: this.translateText("validation.MAX_LEN", {
					text: this.translateText("fields.ADDRESS"),
					value: this.validation.address.MAX_LENGTH.toString(),
				}),
			},
			{
				type: "pattern",
				message: this.translateText("validation.SPECIAL_CHAR", {
					text: this.translateText("fields.ADDRESS"),
				}),
			},
		],
		profession: [
			{
				type: "required",
				message: this.translateText("validation.REQUIRED", {
					text: this.translateText("fields.PROFESSION"),
				}),
			},
			{
				type: "maxlength",
				message: this.translateText("validation.MAX_LEN", {
					text: this.translateText("fields.PROFESSION"),
					value: this.validation.profession.MAX_LENGTH.toString(),
				}),
			},
			{
				type: "pattern",
				message: this.translateText("validation.NAMES", {
					text: this.translateText("fields.PROFESSION"),
				}),
			},
		],
		countryOfOrigin: [
			{
				type: "required",
				message: this.translateText("validation.REQUIRED", {
					text: this.translateText("fields.COUNTRY_OF_ORIGIN"),
				}),
			},
		],
		countryOfResidence: [
			{
				type: "required",
				message: this.translateText("validation.REQUIRED", {
					text: this.translateText("fields.COUNTRY_OF_RESIDENCE"),
				}),
			},
		],
	};

	translateText(text: string, param?: { [key: string]: string }): string {
		let translatedText: string;
		this.translate
			.get(text, param)
			.pipe(take(1))
			.subscribe((value) => {
				translatedText = value;
			});
		return translatedText;
	}

	showAlert(header: string, message: string) {
		this.alertCtrl
			.create({
				header,
				message,
				buttons: ["Ok"],
			})
			.then((alertEl) => {
				alertEl.present();
			});
	}
}
