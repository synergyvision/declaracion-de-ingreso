import { Component, OnInit, HostBinding } from "@angular/core";
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
	PopoverController,
} from "@ionic/angular";
import { PopoverComponent } from "./popover/popover.component";
import { DeleteModalComponent } from "./delete-modal/delete-modal.component";
import { ChangePasswordModalComponent } from "./change-password-modal/change-password-modal.component";
import { switchMap, take } from "rxjs/operators";

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

	@HostBinding("class.is-shell") get isShell() {
		return this.user && this.user.isShell ? true : false;
	}

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		public authService: FirebaseAuthService,
		private shared: SharedService,
		private popoverCtrl: PopoverController,
		private modalCtrl: ModalController,
		private loadCtrl: LoadingController
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

	// NOTE: Ionic only calls ngOnDestroy if the page was popped (ex: when navigating back)
	// Since ngOnDestroy might not fire when you navigate from the current page, use ionViewWillLeave to cleanup Subscriptions
	ionViewWillLeave(): void {
		this.subscriptions.unsubscribe();
	}

	getUserDOB() {
		const day = new Date(this.user.dob).getDate().toString();
		const month = new Date(this.user.dob).getMonth().toString();
		const year = new Date(this.user.dob).getFullYear().toString();
		return this.shared.translateText("FORMATTED_DOB", {
			day,
			month: this.shared.translateText("MONTH")[month],
			year,
		});
	}

	getUserLength(): Array<number> {
		return Array(10).fill(1);
	}

	editPopoverMenu(event: any) {
		this.popoverCtrl
			.create({
				component: PopoverComponent,
				event,
				translucent: true,
			})
			.then((popoverEl) => {
				popoverEl.present();
				return popoverEl.onDidDismiss();
			})
			.then((popoverResultData) => {
				if (popoverResultData.role == "editProfile") {
					this.router.navigate(["auth/profile/edit"]);
				} else if (popoverResultData.role == "changePassword") {
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
								this.authService
									.getAuthState()
									.pipe(
										take(1),
										switchMap((authState) => {
											console.log(authState);
											return this.authService.resetPassword(
												authState.email
											);
										})
									)
									.subscribe(
										() => {
											console.log("ok");
										},
										(err) => {
											console.log(err);
										}
									);
							}
						});
				}
			});
	}
}
