import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";
import { LoadingController, ModalController } from "@ionic/angular";
import { SharedService } from "../../shared/shared.service";
import { CountryService } from "../../country/country.service";

@Component({
	selector: "app-trips-filter-modal",
	templateUrl: "./trips-filter-modal.component.html",
	styleUrls: ["./trips-filter-modal.component.scss"],
})
export class TripsFilterModalComponent implements OnInit {
	filterForm: FormGroup;
	currentFilter: any;
	subscriptions: Subscription;

	countries = [];

	constructor(
		private modalCtrl: ModalController,
		private shared: SharedService,
		private countryService: CountryService,
		private loadCtrl: LoadingController
	) {
		this.filterForm = new FormGroup({
			states: new FormGroup({
				pendiente: new FormControl(false),
				calculado: new FormControl(false),
				finalizado: new FormControl(false),
				cancelado: new FormControl(false),
			}),
			country: new FormGroup({
				alpha3: new FormControl(""),
				type: new FormControl(""),
			}),
			dates: new FormGroup({
				from: new FormControl(""),
				to: new FormControl(""),
			}),
		});
		this.countries = countryService.getCountries();
	}

	onCancel() {
		this.modalCtrl.dismiss(null, "cancel");
	}

	onChangeFilter() {
		this.modalCtrl.dismiss(this.filterForm.value, "changeFilter");
	}

	ngOnInit() {
		this.countries = this.countryService.getCountries();
	}
}
