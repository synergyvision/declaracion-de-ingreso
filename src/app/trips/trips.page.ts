import { Component, OnInit } from "@angular/core";
import { SharedService } from "../shared/shared.service";
import {
	LoadingController,
	MenuController,
	ModalController,
} from "@ionic/angular";
import { TripsModel, FlightModel, States } from "./trips.model";
import { FilterModel } from "./trips-filter-modal/filter.model";
import { CountryService } from "../country/country.service";
import { Subscription, from } from "rxjs";
import { TripsService } from "./trips.service";
import { ActivatedRoute, Router } from "@angular/router";

import { TripsFilterModalComponent } from "./trips-filter-modal/trips-filter-modal.component";
import { Plugins } from "@capacitor/core";
import { take } from "rxjs/operators";

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

	filterValues: FilterModel = {
		states: {
			pendiente: true,
			calculado: true,
			finalizado: true,
			cancelado: false,
		},
		country: {
			alpha3: "",
			type: "",
		},
		dates: {
			from: null,
			to: null,
		},
	};
	_searchValue: string = "";

	resetFilter: FilterModel = {
		states: {
			pendiente: true,
			calculado: true,
			finalizado: true,
			cancelado: false,
		},
		country: {
			alpha3: "",
			type: "",
		},
		dates: {
			from: null,
			to: null,
		},
	};

	tripsSubscription: Subscription;
	trips: TripsModel[];

	ngOnInit() {
		this.getFilter();
	}

	ionViewWillEnter() {
		this.menuController.enable(true);
		this.getFilter();
	}

	getFilter() {
		from(Plugins.Storage.get({ key: "defaultFilter" }))
			.pipe(take(1))
			.subscribe((data) => {
				if (data.value != null) {
					const defaultFilter = JSON.parse(data.value);
					this.filterValues = defaultFilter;
				}
			});
	}

	onOpenFilterModal() {
		this.modalCtrl
			.create({
				component: TripsFilterModalComponent,
				componentProps: { currentFilter: this.filterValues },
			})
			.then((modalEl) => {
				modalEl.present();
				return modalEl.onDidDismiss();
			})
			.then((resultData) => {
				if (resultData.data != null) {
					this.filterValues = resultData.data;
				}
			});
	}

	getLastFlight(trip: TripsModel) {
		let lastFlight: FlightModel;
		trip.flights.forEach((flight) => {
			if (!flight.returnFlight) {
				lastFlight = flight;
			}
		});
		return lastFlight;
	}

	getOriginFlag(trip: TripsModel) {
		return this.getCountryFlag(trip.flights[0].from.country);
	}

	getDestinationFlag(trip: TripsModel) {
		return this.getCountryFlag(this.getLastFlight(trip).to.country);
	}

	getCountryFlag(alpha3: string) {
		const src = "\\assets\\flags\\";
		return `${src}${this.countryService.getCountryAlpha2(alpha3)}.png`;
	}

	getTripString(trip: TripsModel) {
		const originFlight = trip.flights[0];
		const originCountry = this.countryService.getCountryName(
			originFlight.from.country
		);
		const destinationFlight = this.getLastFlight(trip);
		const destinationCountry = this.countryService.getCountryName(
			destinationFlight.to.country
		);
		const chevronIcon =
			'<ion-icon name="chevron-forward-outline"></ion-icon>';
		return `${originCountry} (${originFlight.from.city}) ${chevronIcon} ${destinationCountry} (${destinationFlight.to.city})`;
	}

	getOriginString(trip: TripsModel) {
		const originFlight = trip.flights[0];
		const originCountry = this.countryService.getCountryName(
			originFlight.from.country
		);
		return `${originCountry} (${originFlight.from.city})`;
	}

	getDestinationString(trip: TripsModel) {
		const destinationFlight = this.getLastFlight(trip);
		const destinationCountry = this.countryService.getCountryName(
			destinationFlight.to.country
		);
		return `${destinationCountry} (${destinationFlight.to.city})`;
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

	getState(state: string) {
		let stateString = "state.";
		switch (state) {
			case "pendiente":
				stateString += States.PENDIENTE.toUpperCase();
				break;

			case "calculado":
				stateString += States.CALCULADO.toUpperCase();
				break;

			case "finalizado":
				stateString += States.FINALIZADO.toUpperCase();
				break;

			case "cancelado":
				stateString += States.CANCELADO.toUpperCase();
				break;

			default:
				stateString += "error";
				break;
		}
		return stateString;
	}

	doTripDetail(el: any, id: string) {
		el.closeSlidingItems();
		this.router.navigate(["detail"], {
			relativeTo: this.route,
			queryParams: { id },
		});
	}

	doTripTax(el: any, id: string, state: States) {
		el.closeSlidingItems();
		const route =
			state == States.CALCULADO || state == States.FINALIZADO
				? "tax/detail"
				: "tax";
		this.router.navigate([route], {
			relativeTo: this.route,
			queryParams: { id },
		});
	}

	onResetFilters() {
		this.filterValues = this.resetFilter;
		this._searchValue = "";
		const data = JSON.stringify(this.resetFilter);
		Plugins.Storage.set({ key: "defaultFilter", value: data });
	}

	statesFilter(trip: TripsModel) {
		const { states } = this.filterValues;
		for (const state in states) {
			if (
				(states[state] && trip.state == state) ||
				!this.anyStatesFiltered
			) {
				return true;
				break;
			}
		}
	}

	datesFilter(trip: TripsModel) {
		const { dates } = this.filterValues;
		return (
			(new Date(dates.from).getTime() <
				this.getFirstDate(trip).getTime() &&
				new Date(dates.to).getTime() >
					this.getLastDate(trip).getTime()) ||
			dates.from == null ||
			dates.from == "" ||
			dates.to == null ||
			dates.to == ""
		);
	}

	countryFilter(trip: TripsModel) {
		const { country } = this.filterValues;
		if (country.alpha3 == "") {
			return true;
		}
		switch (country.type) {
			case "origin":
				return country.alpha3 == trip.flights[0].from.country;
				break;

			case "destination":
				return country.alpha3 == this.getLastFlight(trip).to.country;
				break;

			case "connecting":
				return trip.flights.some((flight, index, flights) => {
					if (flights[index + 1].returnFlight) {
						return false;
					} else {
						return (
							flight.from.country == country.alpha3 ||
							flight.to.country == country.alpha3
						);
					}
				});
				break;

			case "any":
			default:
				return trip.flights.some((flight) => {
					return (
						flight.from.country == country.alpha3 ||
						flight.to.country == country.alpha3
					);
				});
				break;
		}
	}

	searchFilter(trip: TripsModel) {
		const search = this.search;
		const { from } = trip.flights[0];
		const { to } = this.getLastFlight(trip);
		if (
			this.compareStrings(
				this.countryService.getCountryName(from.country),
				search
			) ||
			this.compareStrings(from.city, search)
		) {
			return true;
		}
		if (
			this.compareStrings(
				this.countryService.getCountryName(to.country),
				search
			) ||
			this.compareStrings(to.city, search)
		) {
			return true;
		}
		return false;
	}

	get filteredTrips() {
		if (this.trips == null) {
			return [];
		}
		const { states, dates, country } = this.filterValues;
		let filteredTrips = this.trips.filter((trip) => {
			return (
				this.statesFilter(trip) &&
				this.datesFilter(trip) &&
				this.countryFilter(trip) &&
				this.searchFilter(trip)
			);
		});
		return filteredTrips.sort((a, b) => {
			return (
				this.getFirstDate(b).getTime() - this.getFirstDate(a).getTime()
			);
		});
	}

	get anyStatesFiltered() {
		const {
			finalizado,
			calculado,
			cancelado,
			pendiente,
		} = this.filterValues.states;
		if (finalizado || calculado || cancelado || pendiente) {
			return true;
		} else {
			return false;
		}
	}

	onSearch(event: any) {
		this._searchValue = event.detail.value;
	}

	get search() {
		return this._searchValue;
	}

	compareStrings(str1: string, str2: string) {
		return str1.toLowerCase().includes(str2.toLowerCase());
	}
}
