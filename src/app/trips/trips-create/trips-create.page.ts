import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { SharedService } from "../../shared/shared.service";

@Component({
	selector: "app-trips-create",
	templateUrl: "./trips-create.page.html",
	styleUrls: ["./trips-create.page.scss"],
})
export class TripsCreatePage implements OnInit {
	tripsForm: FormGroup;

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
		date: [
			{
				type: "required",
				message: this.shared.translateText("validation.REQUIRED", {
					text: this.shared.translateText("fields.DATE"),
				}),
			},
		],
		airline: [
			{
				type: "required",
				message: this.shared.translateText("validation.REQUIRED", {
					text: this.shared.translateText("fields.AIRLINE"),
				}),
			},
		],
		flightNumber: [
			{
				type: "required",
				message: this.shared.translateText("validation.REQUIRED", {
					text: this.shared.translateText("fields.FLIGHT_NUMBER"),
				}),
			},
		],
	};

	constructor(private shared: SharedService) {
		this.tripsForm = new FormGroup({
			flights: new FormArray([]),
		});
		this.addFlight();
	}

	ngOnInit() {}

	newFlight() {
		return new FormGroup({
			to: new FormGroup({
				country: new FormControl("", Validators.required),
				city: new FormControl("", Validators.required),
				date: new FormControl("", Validators.required),
			}),
			from: new FormGroup({
				country: new FormControl("", Validators.required),
				city: new FormControl("", Validators.required),
				date: new FormControl("", Validators.required),
			}),
			airline: new FormControl("", Validators.required),
			flightNumber: new FormControl("", Validators.required),
		});
	}

	get flightArray() {
		return this.tripsForm.controls.flights as FormArray;
	}

	addFlight() {
		this.flightArray.push(this.newFlight());
	}

	removeFlight(index: number) {
		this.flightArray.removeAt(index);
	}

	doCreateTrip() {}
}
