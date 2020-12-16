import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { TripsService } from "../trips/trips.service";
import { skipWhile, switchMap } from "rxjs/operators";
import { TaxModel } from "./tax.model";
import { LoadingController } from "@ionic/angular";
import { SharedService } from "../shared/shared.service";

@Component({
	selector: "app-tax",
	templateUrl: "./tax.page.html",
	styleUrls: ["./tax.page.scss"],
})
export class TaxPage implements OnInit {
	taxForm: FormGroup;

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
		this.taxForm = new FormGroup({
			details: new FormGroup({}),
			cash: new FormControl(""),
		});
		this.taxDetailKeys.forEach((detail) => {
			(this.taxForm.controls["details"] as FormGroup).addControl(
				detail,
				this.newTaxDetail()
			);
		});
	}

	newTaxDetail() {
		return new FormGroup({
			quantity: new FormControl(""),
			price: new FormControl(""),
		});
	}

	noDecimals(event: any) {
		const pattern = /[0-9]/;
		let inputChar = String.fromCharCode(event.charCode);

		if (!pattern.test(inputChar)) {
			event.preventDefault();
		}
	}

	ngOnInit() {}

	doCreateTaxDeclaration() {
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
						this.router.navigate(["/trips"], { replaceUrl: true });
					});
			});
	}

	ngOnDestroy() {
		this.subscriptions.unsubscribe();
	}
}
