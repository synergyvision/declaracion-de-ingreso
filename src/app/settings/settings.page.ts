import { Component, OnInit } from "@angular/core";
import { ActionSheetController, ModalController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import { SharedService } from "../shared/shared.service";
import { FirebaseAuthService } from "../firebase/auth/firebase-auth.service";
import { Router } from "@angular/router";
import { ChangePasswordModalComponent } from "./change-password-modal/change-password-modal.component";
import { TripsFilterModalComponent } from "../trips/trips-filter-modal/trips-filter-modal.component";
import { FilterModel } from "../trips/trips-filter-modal/filter.model";
import { Plugins } from "@capacitor/core";
import { from } from "rxjs";
import { take } from "rxjs/operators";

@Component({
	selector: "app-settings",
	templateUrl: "./settings.page.html",
	styleUrls: ["./settings.page.scss"],
})
export class SettingsPage implements OnInit {
	constructor(
		private shared: SharedService,
		private modalCtrl: ModalController,
		private authService: FirebaseAuthService,
		private router: Router
	) {}

	filterValues: FilterModel;

	onChangeLanguage() {
		this.shared.showLangSheet().then((actionEl) => {
			actionEl.present();
		});
	}

	onChangePassword() {
		this.modalCtrl
			.create({
				component: ChangePasswordModalComponent,
			})
			.then((modalEl) => {
				modalEl.present();
				return modalEl.onDidDismiss();
			})
			.then((modalResultData) => {
				if (modalResultData.role == "changePassword") {
					this.signOutChangePw();
				}
			});
	}

	onChangeDefaultFilters() {
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
					const data = JSON.stringify(resultData.data);
					Plugins.Storage.set({ key: "defaultFilter", value: data });
				}
			});
	}

	signOutChangePw() {
		this.authService.signOut().subscribe(
			() => {
				this.router.navigate(["auth/login"], {
					replaceUrl: true,
					queryParams: {
						changePwSignOut: "true",
					},
				});
			},
			(error) => {
				console.log("signout error", error);
			}
		);
	}

	ngOnInit() {
		this.getFilter();
	}

	ionViewWillEnter() {
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
}
