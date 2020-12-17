import { Component, OnInit } from "@angular/core";

import { States, TripsModel } from "../../trips/trips.model";
import { TaxModel, QuantityPrice } from "../tax.model";
import { Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { skipWhile, switchMap } from "rxjs/operators";
import { TripsService } from "../../trips/trips.service";
import { LoadingController, ModalController } from "@ionic/angular";

import { TaxDeleteModalComponent } from "../tax-delete-modal/tax-delete-modal.component";
import { SharedService } from "../../shared/shared.service";

@Component({
	selector: "app-tax-detail",
	templateUrl: "./tax-detail.page.html",
	styleUrls: ["./tax-detail.page.scss"],
})
export class TaxDetailPage implements OnInit {
	trip: TripsModel;
	states = States;

	subscriptions: Subscription;

	isLoading = true;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private modalCtrl: ModalController,
		private loadCtrl: LoadingController,
		private tripsService: TripsService,
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

	getTaxLength() {
		return new Array(28).fill(1);
	}

	hasValue(value: QuantityPrice) {
		const { quantity, price } = value;
		if (quantity != "" && price != "") {
			return true;
		}
		return false;
	}

	get taxDetails() {
		return this.trip?.taxDeclaration?.details;
	}

	get taxCash() {
		return parseInt(this.trip?.taxDeclaration?.cash);
	}

	getTotal() {
		let total: number = 0 + this.taxCash;
		if (this.taxDetails) {
			Object.values(this.taxDetails).forEach((detail) => {
				if (detail.price != "") {
					total += parseInt(detail.price);
				}
			});
		}
		return total;
	}

	getTax() {
		const total = this.getTotal();
		let tax: number = 0;
		if (total > 1000) {
			tax = (total - 1000) * 0.1;
		}
		return tax;
	}

	doEditTax(id: string) {
		this.router.navigate(["../../../edit"], {
			relativeTo: this.route,
			queryParams: { id },
		});
	}

	deleteTaxDeclaration() {
		this.modalCtrl
			.create({
				component: TaxDeleteModalComponent,
			})
			.then((modalEl) => {
				modalEl.present();
				return modalEl.onDidDismiss();
			})
			.then((resultData) => {
				if (resultData.role === "delete") {
					this.loadCtrl
						.create({
							keyboardClose: true,
							message: this.shared.translateText("tax.DELETING"),
						})
						.then((loadEl) => {
							loadEl.present();
							this.tripsService
								.deleteTaxDeclaration(this.trip.id)
								.subscribe(
									() => {
										loadEl.dismiss();
										this.router.navigate(["trips"], {
											replaceUrl: true,
										});
									},
									(err) => {
										loadEl.dismiss();
										console.log(err);
									}
								);
						});
				}
			});
	}
}
