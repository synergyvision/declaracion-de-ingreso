import { Component } from "@angular/core";
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { MenuController } from "@ionic/angular";

import { TranslateService } from "@ngx-translate/core";
import { take } from "rxjs/operators";

@Component({
	selector: "app-login",
	templateUrl: "./login.page.html",
	styleUrls: ["./styles/login.page.scss"],
})
export class LoginPage {
	loginForm: FormGroup;

	validation_messages = {
		email: [
			{
				type: "required",
				message: this.translateText("validation.REQUIRED", {
					text: "Email",
				}),
			},
			{
				type: "pattern",
				message: this.translateText("validation.email.PATTERN"),
			},
		],
		password: [
			{
				type: "required",
				message: this.translateText("validation.REQUIRED", {
					text: this.translateText("PW"),
				}),
			},
			{
				type: "minlength",
				message: this.translateText("validation.MIN_LEN", {
					text: this.translateText("PW"),
					value: "5",
				}),
			},
		],
	};

	constructor(
		public router: Router,
		public translate: TranslateService,
		public menu: MenuController
	) {
		this.loginForm = new FormGroup({
			email: new FormControl(
				"test@test.com",
				Validators.compose([
					Validators.required,
					Validators.pattern(
						"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
					),
				])
			),
			password: new FormControl(
				"",
				Validators.compose([
					Validators.minLength(5),
					Validators.required,
				])
			),
		});
	}

	// Disable side menu for this page
	ionViewDidEnter(): void {
		this.menu.enable(false);
	}

	// Restore to default when leaving this page
	ionViewDidLeave(): void {
		this.menu.enable(true);
	}

	translateText(text: string, param?: { [key: string]: string }): string {
		let translatedText: string;
		this.translate
			.get(text, param)
			.pipe(take(1))
			.subscribe((value) => {
				translatedText = value;
			});
		return translatedText;
	}

	doLogin(): void {
		console.log("do Log In");
		this.router.navigate(["app/categories"]);
	}

	goToForgotPassword(): void {
		console.log("redirect to forgot-password page");
	}

	doFacebookLogin(): void {
		console.log("facebook login");
		this.router.navigate(["app/categories"]);
	}

	doGoogleLogin(): void {
		console.log("google login");
		this.router.navigate(["app/categories"]);
	}

	doTwitterLogin(): void {
		console.log("twitter login");
		this.router.navigate(["app/categories"]);
	}
}
