import { Component, OnInit, HostBinding } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FirebaseProfileModel } from "./firebase-profile.model";
import { FirebaseAuthService } from "../firebase-auth.service";
import { Subscription } from "rxjs";
import {
	IResolvedRouteData,
	ResolverHelper,
} from "../../../utils/resolver-helper";

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
		public authService: FirebaseAuthService
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

	signOut() {
		this.authService.signOut().subscribe(
			() => {
				// Sign-out successful.
				// Replace state as we are no longer authorized to access profile page.
				this.router.navigate(["auth/login"], { replaceUrl: true });
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
}
