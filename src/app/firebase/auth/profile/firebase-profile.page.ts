import { Component, ElementRef, OnInit, HostBinding } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FirebaseProfileModel } from "./firebase-profile.model";
import { FirebaseAuthService } from "../firebase-auth.service";
import { Subscription } from "rxjs";
import { SharedService } from "../../../shared/shared.service";
import {
	IResolvedRouteData,
	ResolverHelper,
} from "../../../utils/resolver-helper";
import {
	LoadingController,
	ModalController,
	Platform,
	PopoverController,
} from "@ionic/angular";
import { DeleteModalComponent } from "./delete-modal/delete-modal.component";
import { PictureModalComponent } from "./picture-modal/picture-modal.component";
import { switchMap, take, tap } from "rxjs/operators";
import { CountryService } from "../../../country/country.service";

@Component({
	selector: "app-firebase-profile",
	templateUrl: "./firebase-profile.page.html",
	styleUrls: [
		"./styles/firebase-profile.page.scss",
		"./styles/firebase-profile.shell.scss",
	],
})
export class FirebaseProfilePage implements OnInit {
	// Gather all component subscription in one place. Can be one Subscription or multiple (chained using the Subscription.add() method)
	subscriptions: Subscription;
	user: FirebaseProfileModel;
	profilePicUrl: string;

	@HostBinding("class.is-shell") get isShell() {
		return this.user && this.user.isShell ? true : false;
	}

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		public authService: FirebaseAuthService,
		private shared: SharedService,
		private modalCtrl: ModalController,
		private loadCtrl: LoadingController,
		private countryService: CountryService
	) {}

	ngOnInit() {
		// On init, the route subscription is the active subscription
		this.subscriptions = this.route.data.subscribe(
			(resolvedRouteData: IResolvedRouteData<FirebaseProfileModel>) => {
				// Route subscription resolved, now the active subscription is the Observable extracted from the resolved route data
				this.subscriptions = ResolverHelper.extractData<
					FirebaseProfileModel
				>(resolvedRouteData.data, FirebaseProfileModel).subscribe(
					(state) => {
						this.user = state;
					},
					(error) => {}
				);
			},
			(error) => {}
		);
		this.subscriptions.add(
			this.authService
				.getProfilePic()
				.pipe(
					tap((url) => {
						this.profilePicUrl = url;
					})
				)
				.subscribe()
		);
	}

	deleteUser() {
		this.modalCtrl
			.create({
				component: DeleteModalComponent,
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
							message: this.shared.translateText(
								"profile.DELETING"
							),
						})
						.then((loadEl) => {
							loadEl.present();
							this.authService
								.getAuthState()
								.pipe(take(1))
								.subscribe((authState) => {
									authState
										.delete()
										.then(() => {
											this.authService
												.deleteProfile()
												.pipe(take(1))
												.subscribe(() => {
													loadEl.dismiss();
													this.router.navigate(
														["/auth/login"],
														{
															replaceUrl: true,
														}
													);
												});
										})
										.catch((err) => {
											if (
												err.code ==
												"auth/requires-recent-login"
											) {
												this.signOutError();
											} else {
												this.shared.showAlert(
													this.shared.translateText(
														"error.ERROR"
													),
													this.shared.translateText(
														"error.UNKNOWN"
													)
												);
											}
											loadEl.dismiss();
										});
								});
						});
				}
			});
	}

	signOutError() {
		this.authService.signOut().subscribe(
			() => {
				this.router.navigate(["auth/login"], {
					replaceUrl: true,
					queryParams: {
						deleteSignOut: "true",
					},
				});
			},
			(error) => {
				console.log("signout error", error);
			}
		);
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

	// NOTE: Ionic only calls ngOnDestroy if the page was popped (ex: when navigating back)
	// Since ngOnDestroy might not fire when you navigate from the current page, use ionViewWillLeave to cleanup Subscriptions
	ionViewWillLeave(): void {
		this.subscriptions.unsubscribe();
	}

	getUserDOB() {
		return this.shared.formatDate(this.user.dob);
	}

	getUserLength(): Array<number> {
		return Array(10).fill(1);
	}

	getCountryName(alpha3: string): string {
		return this.countryService.getCountryName(alpha3);
	}

	showPictureModal() {
		this.modalCtrl
			.create({
				component: PictureModalComponent,
				componentProps: {
					url: this.profilePicUrl,
				},
			})
			.then((modalEl) => {
				modalEl.present();
				return modalEl.onDidDismiss();
			})
			.then((resultData) => {
				if (resultData.role === "uploadComplete") {
					this.profilePicUrl = resultData.data;
					this.authService.newProfilePic(resultData.data);
				} else if (resultData.role === "error") {
					this.shared.showAlert(
						this.shared.translateText("error.ERROR"),
						resultData.data
					);
				}
			});
	}
}
