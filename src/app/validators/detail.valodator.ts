import { ValidatorFn, FormGroup } from "@angular/forms";

export class DetailValidator {
	static checkDetail() {
		const validator: ValidatorFn = (formGroup: FormGroup) => {
			let allFilled = Object.values(formGroup.value).every((value) => {
				return value != "" && value != null;
			});
			let allEmpty = Object.values(formGroup.value).every((value) => {
				return value == "" || value == null;
			});
			return allEmpty || allFilled ? null : { missingInfo: true };
		};
		return validator;
	}
}
