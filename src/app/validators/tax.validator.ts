import { ValidatorFn, FormGroup } from "@angular/forms";

export class TaxValidator {
	static checkForInput() {
		const validator: ValidatorFn = (formGroup: FormGroup) => {
			const detailFilled = Object.values<{
				quantity: string;
				price: string;
			}>(formGroup.controls["details"].value).some((detail) => {
				const { quantity, price } = detail;
				return (
					quantity != "" &&
					quantity != null &&
					price != "" &&
					price != null
				);
			});
			const cashFilled =
				formGroup.controls["cash"].value != "" &&
				formGroup.controls["cash"].value != null;
			return detailFilled || cashFilled ? null : { formEmpty: true };
		};
		return validator;
	}
}
