import { ValidatorFn, FormArray } from "@angular/forms";

export class FlightDatesValidator {
	static checkDates() {
		const validator: ValidatorFn = (formArray: FormArray) => {
			let incongruentDate = formArray.controls.some(
				(flight, index, flights) => {
					if (index < flights.length - 1) {
						return (
							flight.get("to").get("date").value >
							flights[index + 1].get("from").get("date").value
						);
					} else {
						return false;
					}
				}
			);
			if (incongruentDate) {
				return { incongruentDate: true };
			} else {
				return null;
			}
		};
		return validator;
	}
}
