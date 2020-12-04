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
import { ActivatedRoute, Router } from "@angular/router";

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
		private router: Router,
		private route: ActivatedRoute,
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

	getOriginFlag(trip: TripsModel) {
		return this.getCountryFlag(trip.flights[0].from.country);
	}

	getDestinationFlag(trip: TripsModel) {
		return this.getCountryFlag(
			trip.flights[trip.flights.length - 1].to.country
		);
	}

	getCountryFlag(alpha3: string) {
		const src = "\\assets\\flags\\";
		return `${src}${this.countryService.getCountryAlpha2(alpha3)}.png`;
	}

	getTripString(trip: TripsModel) {
		const lastFlight = trip.flights.length - 1;
		const originCountry = this.countryService.getCountryName(
			trip.flights[0].from.country
		);
		const destinationCountry = this.countryService.getCountryName(
			trip.flights[lastFlight].to.country
		);
		return `${originCountry} (${trip.flights[0].from.city}) &#8594; ${destinationCountry} (${trip.flights[lastFlight].to.city})`;
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

	getChipColor(state: string) {
		let color: string;
		switch (state) {
			case States.PENDIENTE:
				color = "tertiary";
				break;

			case States.CALCULADO:
				color = "secondary";
				break;

			case States.FINALIZADO:
				color = "success";
				break;

			case States.CANCELADO:
				color = "danger";
				break;

			default:
				color = "tertiary";
				break;
		}
		return color;
	}

	doTripDetail(el: any, id: string) {
		el.closeSlidingItems();
		this.router.navigate(["detail"], {
			relativeTo: this.route,
			queryParams: { id },
		});
	}
}
