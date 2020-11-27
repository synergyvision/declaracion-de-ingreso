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
			return: {
				arrival: new Date("11-01-2020"),
				airline: "Copa Airlines",
				flightNumber: "VEN-001",
			},
			state: "finalizado",
		},
		{
			id: 2,
			destinations: [
				{
					country: "usa",
					city: "Miami",
					arrival: new Date(),
					departure: new Date("12-01-2020"),
					airline: "Copa Airlines",
					flightNumber: "MIA-001",
				},
			],
			return: {
				arrival: new Date("12-01-2020"),
				airline: "Copa Airlines",
				flightNumber: "VEN-001",
			},
			state: "pendiente",
		},
		{
			id: 3,
			destinations: [
				{
					country: "usa",
					city: "Houston",
					arrival: new Date("01-10-2019"),
					departure: new Date("01-12-2019"),
					airline: "America Airlines",
					flightNumber: "HOU-001",
				},
				{
					country: "can",
					city: "Montreal",
					arrival: new Date("01-12-2019"),
					departure: new Date("01-15-2019"),
					airline: "Canada Airlines",
					flightNumber: "MON-001",
				},
			],
			return: {
				arrival: new Date("01-15-2020"),
				airline: "Copa Airlines",
				flightNumber: "VEN-001",
			},
			state: "pendiente",
		},
	];

	ngOnInit() {
		console.log(this.trips);
	}

	onAddTrip() {}

	onChangeFilter() {}

	getDestinations(trip: TripsModel) {
		if (!trip.destinations || trip.destinations.length == 0) {
			return "Venezuela";
		}
		let destinationsString: string = "";
		trip.destinations.forEach((destination, index) => {
			if (index > 0) {
				destinationsString += ", ";
			}
			destinationsString += `${this.countryService.getCountryName(
				destination.country
			)} (${destination.city})`;
		});
		return destinationsString;
	}

	getLengthOfTrip(trip: TripsModel) {
		let tripLengthString = "";
	}
}
