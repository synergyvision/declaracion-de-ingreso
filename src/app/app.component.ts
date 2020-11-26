import { Component } from "@angular/core";
import { Plugins } from "@capacitor/core";
const { SplashScreen } = Plugins;
import { TranslateService, LangChangeEvent } from "@ngx-translate/core";
import { HistoryHelperService } from "./utils/history-helper.service";
import { FirebaseAuthService } from "./firebase/auth/firebase-auth.service";
import { Router } from "@angular/router";
import { SharedService } from "./shared/shared.service";
import { FirebaseProfileModel } from "./firebase/auth/profile/firebase-profile.model";
import { switchMap, tap } from "rxjs/operators";
import { Subscription } from "rxjs";

@Component({
	selector: "app-root",
	templateUrl: "app.component.html",
	styleUrls: [
		"./side-menu/styles/side-menu.scss",
		"./side-menu/styles/side-menu.shell.scss",
		"./side-menu/styles/side-menu.responsive.scss",
	],
})
export class AppComponent {
	textDir = "ltr";

	userSubscription: Subscription;
	user: FirebaseProfileModel;

	profilePictureSubscription: Subscription;
	profilePictureUrl: string;

	// Inject HistoryHelperService in the app.components.ts so its available app-wide
	constructor(
		public translate: TranslateService,
		public historyHelper: HistoryHelperService,
		private authService: FirebaseAuthService,
		private router: Router,
		private shared: SharedService
	) {
		this.setLanguage();
		this.initializeApp();
		this.userSubscription = authService
			.getAuthState()
			.pipe(
				switchMap(() => {
					return this.authService.getProfileDataSource().pipe(
						tap((user) => {
							this.user = user;
						})
					);
				})
			)
			.subscribe();
	}

	ngOnInit() {
		this.profilePictureSubscription = this.authService.profilePic.subscribe(
			(url) => {
				this.profilePictureUrl = url;
			}
		);
	}

	async initializeApp() {
		try {
			await SplashScreen.hide();
		} catch (err) {
			console.log("This is normal in a browser", err);
		}
	}

	setLanguage() {
		// this language will be used as a fallback when a translation isn't found in the current language
		this.translate.setDefaultLang("es");

		// the lang to use, if the lang isn't available, it will use the current loader to get them
		this.translate.use("es");

		// this is to determine the text direction depending on the selected language
		// for the purpose of this example we determine that only arabic and hebrew are RTL.
		// this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
		//   this.textDir = (event.lang === 'ar' || event.lang === 'iw') ? 'rtl' : 'ltr';
		// });
	}

	signOut() {
		this.authService.signOut().subscribe(
			() => {
				this.router.navigate(["auth/login"], { replaceUrl: true });
			},
			(error) => {
				console.log("signout error", error);
			}
		);
	}

	ngOnDestroy() {
		this.userSubscription.unsubscribe();
		this.profilePictureSubscription.unsubscribe();
	}
}
