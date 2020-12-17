import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { TripsService } from "../../trips/trips.service";
import { SharedService } from "../../shared/shared.service";
import { LoadingController } from "@ionic/angular";
import { TaxValidator } from "../../validators/tax.validator";
import { DetailValidator } from "../../validators/detail.valodator";
import { map, skipWhile, switchMap } from "rxjs/operators";
import { QuantityPrice, TaxModel } from "../tax.model";

@Component({
	selector: "app-tax-edit",
	templateUrl: "./tax-edit.page.html",
	styleUrls: ["./tax-edit.page.scss"],
})
export class TaxEditPage implements OnInit {
	validation_messages: {
		[key: string]: { type: string; message: string }[];
	} = {};

	taxForm: FormGroup;
	oldTaxDeclaration: TaxModel;

	isLoading = true;

	subscriptions: Subscription;

	taxDetailKeys = [
		"clothing",
		"shoes",
		"toiletries",
		"medicines",
		"consumption",
		"personalArticles",
		"books",
		"tools",
		"carriage",
		"instruments",
		"cameras",
		"binocs",
		"typewritters",
		"sportingGoods",
		"gardenAndPets",
		"groceries",
		"artwork",
		"cigars",
		"weapons",
		"trunks",
		"radios",
		"soundAndImage",
		"tvs",
		"toys",
		"computers",
		"phones",
		"appliances",
	];

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private tripsService: TripsService,
		private shared: SharedService,
		private loadCtrl: LoadingController
	) {
		this.taxForm = new FormGroup(
			{
				details: new FormGroup({}),
				cash: new FormControl(""),
			},
			TaxValidator.checkForInput()
		);
		this.loadCtrl
			.create({
				keyboardClose: true,
				message: this.shared.translateText("tax.GETTING"),
			})
			.then((loadEl) => {
				loadEl.present();
				this.subscriptions = this.initForm().subscribe(
					(taxDeclaration) => {
						this.taxForm.controls["cash"].setValue(
							taxDeclaration.cash
						);
						this.taxDetailKeys.forEach((detail) => {
							(this.taxForm.controls[
								"details"
							] as FormGroup).addControl(
								detail,
								this.newTaxDetail(
									taxDeclaration.details[detail]
								)
							);
							this.validation_messages[detail] = [
								{
									type: "missingInfo",
									message: this.shared.translateText(
										"validation.BOTH"
									),
								},
							];
						});
						loadEl.dismiss().then(() => {
							this.isLoading = false;
						});
					}
				);
			});
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
				const { taxDeclaration } = trip;
				this.oldTaxDeclaration = taxDeclaration;
				return taxDeclaration;
			})
		);
	}

	newTaxDetail(detail: QuantityPrice) {
		let quantity, price;
		if (detail != undefined) {
			quantity = detail.quantity;
			price = detail.price;
		} else {
			quantity = "";
			price = "";
		}
		return new FormGroup(
			{
				quantity: new FormControl(quantity),
				price: new FormControl(price),
			},
			[DetailValidator.checkDetail()]
		);
	}

	noDecimals(event: any) {
		const pattern = /[0-9]/;
		let inputChar = String.fromCharCode(event.charCode);

		if (!pattern.test(inputChar)) {
			event.preventDefault();
		}
	}

	ngOnInit() {}

	doEditTaxDeclaration() {
		let id: string;
		this.loadCtrl
			.create({
				keyboardClose: true,
				message: this.shared.translateText("tax.DECLARING"),
			})
			.then((loadEl) => {
				loadEl.present();
				this.subscriptions = this.route.queryParams
					.pipe(
						switchMap((params) => {
							id = params["id"];
							return this.tripsService.updateTaxDeclaration(
								id,
								this.taxForm.value
							);
						})
					)
					.subscribe(() => {
						loadEl.dismiss();
						this.router.navigate(["/trips/tax/detail"], {
							replaceUrl: true,
							queryParams: { id },
						});
					});
			});
	}

	ngOnDestroy() {
		this.subscriptions.unsubscribe();
	}
}
