import { Component, OnInit } from "@angular/core";
import { SharedService } from "../shared/shared.service";
import { LoadingController, ModalController } from "@ionic/angular";
import { TripsModel, States } from "./trips.model";
import { CountryService } from "../country/country.service";

@Component({
	selector: "app-trips",
	templateUrl: "./trips.page.html",
	styleUrls: ["./trips.page.scss"],
})
export class TripsPage implements OnInit {
	constructor(
		private shared: SharedService,
		private countryService: CountryService,
		private modalCtrl: ModalController,
		private loadCtrl: LoadingController
	) {}

	statesEnum = States;

	trips: TripsModel[] = [
		{
			id: 1,
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
			id: 2,
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
			id: 3,
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

	ngOnInit() {
		console.log(this.trips);
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
				firstDate = flight.from.date;
			} else if (flight.from.date < firstDate) {
				firstDate = flight.from.date;
			}
		});
		return firstDate;
	}

	getLastDate(trip: TripsModel) {
		let lastDate: Date;
		trip.flights.forEach((flight, index) => {
			if (index === 0) {
				lastDate = flight.to.date;
			} else if (flight.to.date > lastDate) {
				lastDate = flight.to.date;
			}
		});
		return lastDate;
	}
}
