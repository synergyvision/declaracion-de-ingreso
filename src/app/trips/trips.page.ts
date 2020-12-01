import { Component, OnInit } from "@angular/core";
import { SharedService } from "../shared/shared.service";
import {
	LoadingController,
	MenuController,
	ModalController,
} from "@ionic/angular";
import { TripsModel, States } from "./trips.model";
import { CountryService } from "../country/country.service";
import { Subscription } from "rxjs";
import { TripsService } from "./trips.service";

@Component({
	selector: "app-trips",
	templateUrl: "./trips.page.html",
	styleUrls: ["./trips.page.scss"],
})
export class TripsPage implements OnInit {
	constructor(
		private shared: SharedService,
		private countryService: CountryService,
		private tripsService: TripsService,
		private modalCtrl: ModalController,
		private menuController: MenuController,
		private loadCtrl: LoadingController
	) {
		this.tripsSubscription = this.tripsService.trips.subscribe((trips) => {
			this.trips = trips;
		});
	}

	statesEnum = States;

	tripsSubscription: Subscription;
	trips: TripsModel[] = [
		{
			id: "a",
			flights: [
				{
					from: {
						country: "usa",
						city: "Miami",
						date: new Date("11-01-2020"),
					},
					to: {
						country: "ven",
						city: "Caracas",
						date: new Date("11-01-2020"),
					},
					airline: "Copa Airlines",
					flightNumber: "VEN-001",
				},
			],
			state: "finalizado",
		},
		{
			id: "b",
			flights: [
				{
					from: {
						country: "ven",
						city: "Caracas",
						date: new Date(),
					},
					to: {
						country: "usa",
						city: "Miami",
						date: new Date(),
					},
					airline: "Copa Airlines",
					flightNumber: "MIA-001",
				},
				{
					from: {
						country: "usa",
						city: "Miami",
						date: new Date("12-01-2020"),
					},
					to: {
						country: "ven",
						city: "Caracas",
						date: new Date("12-01-2020"),
					},
					airline: "Copa Airlines",
					flightNumber: "VEN-002",
				},
			],
			state: "pendiente",
		},
		{
			id: "c",
			flights: [
				{
					from: {
						country: "ven",
						city: "Caracas",
						date: new Date("01-10-2019"),
					},
					to: {
						country: "usa",
						city: "Houston",
						date: new Date("01-10-2019"),
					},
					airline: "America Airlines",
					flightNumber: "HOU-001",
				},
				{
					from: {
						country: "usa",
						city: "Houston",
						date: new Date("01-12-2019"),
					},
					to: {
						country: "can",
						city: "Montreal",
						date: new Date("01-12-2019"),
					},
					airline: "Copa Airlines",
					flightNumber: "MON-001",
				},
				{
					from: {
						country: "can",
						city: "Montreal",
						date: new Date("01-15-2020"),
					},
					to: {
						country: "ven",
						city: "Caracas",
						date: new Date("01-15-2020"),
					},
					airline: "Copa Airlines",
					flightNumber: "VEN-003",
				},
			],
			state: "pendiente",
		},
	];

	ngOnInit() {}

	ionViewWillEnter() {
		this.menuController.enable(true);
	}

	onChangeFilter() {}

	getDestinations(trip: TripsModel) {
		let flightString: string = "";
		trip.flights.forEach((flight, index) => {
			if (index > 0) {
				flightString += ", ";
			}
			flightString += `${this.countryService.getCountryName(
				flight.to.country
			)} (${flight.to.city})`;
		});
		return flightString;
	}

	getLengthOfTrip(trip: TripsModel) {
		let firstDate = this.getFirstDate(trip);
		let lastDate = this.getLastDate(trip);

		if (
			firstDate.getDate() === lastDate.getDate() &&
			firstDate.getMonth() === lastDate.getMonth() &&
			firstDate.getFullYear() === lastDate.getFullYear()
		) {
			return `${this.shared.formatDateShort(firstDate.toString())}`;
		} else {
			return `${this.shared.formatDateShort(
				firstDate.toString()
			)} - ${this.shared.formatDateShort(lastDate.toString())}`;
		}
	}

	getFirstDate(trip: TripsModel) {
		let firstDate: Date;
		trip.flights.forEach((flight, index) => {
			if (index === 0) {
				firstDate = new Date(flight.from.date);
			} else if (new Date(flight.from.date) < firstDate) {
				firstDate = new Date(flight.from.date);
			}
		});
		return firstDate;
	}

	getLastDate(trip: TripsModel) {
		let lastDate: Date;
		trip.flights.forEach((flight, index) => {
			if (index === 0) {
				lastDate = new Date(flight.to.date);
			} else if (new Date(flight.to.date) > lastDate) {
				lastDate = new Date(flight.to.date);
			}
		});
		return lastDate;
	}
}
