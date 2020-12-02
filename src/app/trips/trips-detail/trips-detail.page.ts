import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { skipWhile, switchMap } from "rxjs/operators";
import { Subscription } from "rxjs";
import { TripsService } from "../trips.service";
import { TripsModel } from "../trips.model";
import { CountryService } from "../../country/country.service";
import { SharedService } from "../../shared/shared.service";

@Component({
	selector: "app-trips-detail",
	templateUrl: "./trips-detail.page.html",
	styleUrls: ["./trips-detail.page.scss"],
})
export class TripsDetailPage implements OnInit {
	subscriptions: Subscription;
	trip: TripsModel;
	isLoading = true;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private tripsService: TripsService,
		private countryService: CountryService,
		private shared: SharedService
	) {
		let id: string;
		this.subscriptions = route.queryParams
			.pipe(
				switchMap((params) => {
					id = params["id"];
					return tripsService.trips;
				}),
				skipWhile((trips) => trips === null)
			)
			.subscribe((trips) => {
				this.trip = trips.find((trip) => trip.id === id);
				this.isLoading = false;
			});
	}

	ngOnInit() {}

	getTripLength(): Array<number> {
		return Array(10).fill(1);
	}

	getCountryName(alpha3: string): string {
		return this.countryService.getCountryName(alpha3);
	}

	formatDate(dateFromStr: string, dateToStr: string) {
		const dateFrom = new Date(dateFromStr);
		const dateTo = new Date(dateToStr);
		if (
			dateFrom.getDate() === dateTo.getDate() &&
			dateFrom.getMonth() === dateTo.getMonth() &&
			dateFrom.getFullYear() === dateTo.getFullYear()
		) {
			return `${this.shared.formatDate(dateFrom.toString())}`;
		} else {
			return `${this.shared.formatDate(
				dateFrom.toString()
			)} - ${this.shared.formatDate(dateTo.toString())}`;
		}
	}

	ngOnDestroy() {
		this.subscriptions.unsubscribe();
	}
}
