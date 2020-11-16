import { ShellModel } from "../../../shell/data-store";

export class FirebaseProfileModel extends ShellModel {
	name: string;
	lastName: string;
	dob: string;
	sex: string;
	id: string;
	passport: string;
	nationality: string;
	address: string;
	profession: string;
	countryOfOrigin: string;
	countryOfResidence: string;

	constructor() {
		super();
	}
}
