import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { CountryService } from "../../country/country.service";
import { SharedService } from "../../shared/shared.service";

@Component({
	selector: "app-city-selector",
	templateUrl: "./city-selector.component.html",
	styleUrls: ["./city-selector.component.scss"],
})
export class CitySelectorComponent implements OnInit {
	@Input() parentForm: FormGroup;

	validation_messages = {
		country: [
			{
				type: "required",
				message: this.shared.translateText("validation.REQUIRED", {
					text: this.shared.translateText("fields.COUNTRY"),
				}),
			},
		],
		city: [
			{
				type: "required",
				message: this.shared.translateText("validation.REQUIRED", {
					text: this.shared.translateText("fields.CITY"),
				}),
			},
		],
	};

	countries = [];

	constructor(
		private countryService: CountryService,
		private shared: SharedService
	) {
		this.countries = countryService.getCountries();
	}

	get cities() {
		const alpha3 = this.parentForm.controls["country"].value;
		const cities = this.countryService.getCities(alpha3);
		if (cities != undefined) {
			return cities;
		} else {
			return [this.countryService.getCountryName(alpha3)];
		}
	}

	ngOnInit() {}
}
