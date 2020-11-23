import { Component } from "@angular/core";
import { Plugins } from "@capacitor/core";
const { SplashScreen } = Plugins;
import { TranslateService, LangChangeEvent } from "@ngx-translate/core";
import { HistoryHelperService } from "./utils/history-helper.service";
import { FirebaseAuthService } from "./firebase/auth/firebase-auth.service";
import { Router } from "@angular/router";

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
	appPages = [
		{
			title: "Categories",
			url: "/app/categories",
			ionicIcon: "list-outline",
		},
		{
			title: "Profile",
			url: "/auth/profile",
			ionicIcon: "person-outline",
		},
		{
			title: "Contact Card",
			url: "/contact-card",
			customIcon: "./assets/custom-icons/side-menu/contact-card.svg",
		},
		{
			title: "Notifications",
			url: "/app/notifications",
			ionicIcon: "notifications-outline",
		},
	];
	accountPages: {
		title: string;
		url: string;
		ionicIcon: string;
		customIcon?: string;
	}[] = [
		{
			title: "Log In",
			url: "/auth/login",
			ionicIcon: "log-in-outline",
		},
		{
			title: "Sign Up",
			url: "/auth/signup",
			ionicIcon: "person-add-outline",
		},
		{
			title: "Tutorial",
			url: "/walkthrough",
			ionicIcon: "school-outline",
		},
		{
			title: "Getting Started",
			url: "/getting-started",
			ionicIcon: "rocket-outline",
		},
		{
			title: "404 page",
			url: "/page-not-found",
			ionicIcon: "alert-circle-outline",
		},
	];

	textDir = "ltr";

	// Inject HistoryHelperService in the app.components.ts so its available app-wide
	constructor(
		public translate: TranslateService,
		public historyHelper: HistoryHelperService,
		private authService: FirebaseAuthService,
		private router: Router
	) {
		this.initializeApp();
		this.setLanguage();
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
}
