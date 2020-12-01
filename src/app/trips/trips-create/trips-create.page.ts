import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { SharedService } from "../../shared/shared.service";
import { CountryService } from "../../country/country.service";
import { TripsService } from "../trips.service";
import { States } from "../trips.model";
import { LoadingController } from "@ionic/angular";
import { Router } from "@angular/router";

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

	countries = [];

	constructor(
		private shared: SharedService,
		private countryService: CountryService,
		private loadCtrl: LoadingController,
		private router: Router,
		private tripsService: TripsService
	) {
		this.tripsForm = new FormGroup({
			flights: new FormArray([]),
		});
		this.addFlight();
		this.countries = countryService.getCountries();
	}

	ionViewWillEnter() {
		this.countries = this.countryService.getCountries();
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

	doCreateTrip() {
		this.loadCtrl
			.create({
				keyboardClose: true,
				message: this.shared.translateText("trips.CREATING"),
			})
			.then((loadEl) => {
				loadEl.present();
				this.tripsService
					.addTrip({
						...this.tripsForm.value,
						state: States.PENDIENTE,
					})
					.subscribe(() => {
						loadEl.dismiss();
						this.router.navigate(["/trips"], { replaceUrl: true });
					});
			});
	}
}
