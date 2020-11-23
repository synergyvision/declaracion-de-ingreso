import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

import es from "./world-countries/data/es/countries.json";
import en from "./world-countries/data/en/countries.json";

@Injectable({
	providedIn: "root",
})
export class CountryService {
	constructor(private translate: TranslateService) {}

	getCountries() {
		const { currentLang } = this.translate;
		switch (currentLang) {
			case "es":
				return es;
				break;

			case "en":
				return en;
				break;

			default:
				return es;
				break;
		}
	}

	getCountryName(alpha3: string): string {
		const country = this.getCountries().find(
			(country) => country.alpha3 === alpha3
		);
		if (country === undefined) {
			return "N/A";
		}
		return country.name;
	}
}
