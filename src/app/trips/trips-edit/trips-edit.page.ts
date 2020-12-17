import { Component, OnInit } from "@angular/core";
import {
	AbstractControl,
	FormArray,
	FormControl,
	FormGroup,
	Validators,
} from "@angular/forms";
import { SharedService } from "../../shared/shared.service";
import { CountryService } from "../../country/country.service";
import { LoadingController } from "@ionic/angular";
import { ActivatedRoute, Router } from "@angular/router";
import { TripsService } from "../trips.service";
import { FlightDatesValidator } from "../../validators/flight-dates.validator";
import { States, TripsModel, FlightModel } from "../trips.model";
import { Subscription } from "rxjs";
import { map, skipWhile, switchMap, tap } from "rxjs/operators";

@Component({
	selector: "app-trips-edit",
	templateUrl: "./trips-edit.page.html",
	styleUrls: ["./trips-edit.page.scss"],
})
export class TripsEditPage implements OnInit {
	tripsEditForm: FormGroup;
	subscriptions: Subscription;
	oldTrip: TripsModel;

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
		flights: [
			{
				type: "incongruentDate",
				message: this.shared.translateText(
					"validation.INCONGRUENT_DATES"
				),
			},
		],
	};

	countries = [];

	constructor(
		private shared: SharedService,
		private countryService: CountryService,
		private loadCtrl: LoadingController,
		private router: Router,
		private route: ActivatedRoute,
		private tripsService: TripsService
	) {
		this.tripsEditForm = new FormGroup({
			flights: new FormArray([], [FlightDatesValidator.checkDates()]),
		});
		this.loadCtrl
			.create({
				keyboardClose: true,
				message: this.shared.translateText("trips.GETTING"),
			})
			.then((loadEl) => {
				loadEl.present();
				this.subscriptions = this.initForm().subscribe((trip) => {
					trip.flights.forEach((flight, index) => {
						this.flightArray.push(
							this.newFlight(flight.returnFlight, flight)
						);
					});
					loadEl.dismiss();
				});
			});
		this.countries = countryService.getCountries();
	}

	ionViewWillEnter() {
		this.countries = this.countryService.getCountries();
	}

	initForm() {
		let id: string;
		return this.route.queryParams.pipe(
			switchMap((params) => {
				id = params["id"];
				return this.tripsService.trips;
			}),
			skipWhile((trips) => trips === null),
			map((trips) => {
				const trip = trips.find((trip) => trip.id === id);
				this.oldTrip = trip;
				return trip;
			})
		);
	}

	ngOnInit() {}

	newFlight(returnFlight: boolean, oldFlight?: FlightModel) {
		return new FormGroup({
			to: new FormGroup({
				country: new FormControl(
					oldFlight?.to.country,
					Validators.required
				),
				city: new FormControl(oldFlight?.to.city, Validators.required),
				date: new FormControl(oldFlight?.to.date, Validators.required),
			}),
			from: new FormGroup({
				country: new FormControl(
					oldFlight?.from.country,
					Validators.required
				),
				city: new FormControl(
					oldFlight?.from.city,
					Validators.required
				),
				date: new FormControl(
					oldFlight?.from.date,
					Validators.required
				),
			}),
			airline: new FormControl(oldFlight?.airline, Validators.required),
			flightNumber: new FormControl(
				oldFlight?.flightNumber,
				Validators.required
			),
			returnFlight: new FormControl(returnFlight),
		});
	}

	get flightArray() {
		return this.tripsEditForm.controls.flights as FormArray;
	}

	getFlightGroup(index: number) {
		return this.flightArray.controls[index] as FormGroup;
	}

	getFlightLengthWithoutReturn() {
		const flights = this.flightArray.value.filter(
			(flight) => !flight.returnFlight
		);
		return flights.length;
	}

	addFlight(returnFlight: boolean) {
		this.flightArray.push(this.newFlight(returnFlight));
	}

	removeFlight(index: number) {
		this.flightArray.removeAt(index);
	}

	hasReturnFlight() {
		return this.flightArray.value.some((flight) => flight.returnFlight);
	}

	getFlightLength() {
		return this.flightArray.value.some((flight) => flight.returnFlight)
			? this.flightArray.length - 1
			: this.flightArray.length;
	}

	isRemovingDisabled(flight: AbstractControl): boolean {
		if (flight.get("returnFlight").value) {
			return false;
		} else {
			return this.getFlightLengthWithoutReturn() <= 1;
		}
	}

	doEditTrip() {
		this.loadCtrl
			.create({
				keyboardClose: true,
				message: this.shared.translateText("trips.EDITTING"),
			})
			.then((loadEl) => {
				loadEl.present();
				this.tripsService
					.updateTrip(this.oldTrip.id, this.tripsEditForm.value)
					.subscribe(() => {
						loadEl.dismiss();
						this.router.navigate(["/trips/detail"], {
							replaceUrl: true,
							queryParams: { id: this.oldTrip.id },
						});
					});
			});
	}
}
