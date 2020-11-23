import { Component } from "@angular/core";
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import {
	ModalController,
	MenuController,
	IonRouterOutlet,
} from "@ionic/angular";

import { TermsOfServicePage } from "../terms-of-service/terms-of-service.page";
import { PrivacyPolicyPage } from "../privacy-policy/privacy-policy.page";
import { PasswordValidator } from "../validators/password.validator";
import { SharedService } from "../shared/shared.service";

@Component({
	selector: "app-signup",
	templateUrl: "./signup.page.html",
	styleUrls: ["./styles/signup.page.scss"],
})
export class SignupPage {
	signupForm: FormGroup;
	matching_passwords_group: FormGroup;

	validation_messages = {
		email: [
			{
				type: "required",
				message: this.shared.translateText("validation.REQUIRED", {
					text: "Email",
				}),
			},
			{
				type: "pattern",
				message: this.shared.translateText("validation.email.PATTERN"),
			},
		],
		password: [
			{
				type: "required",
				message: this.shared.translateText("validation.REQUIRED", {
					text: this.shared.translateText("PW"),
				}),
			},
			{
				type: "minlength",
				message: this.shared.translateText("validation.MIN_LEN", {
					text: this.shared.translateText("PW"),
					value: "5",
				}),
			},
		],
		confirm_password: [
			{
				type: "required",
				message: this.shared.translateText("validation.REQUIRED", {
					text: this.shared.translateText("signUp.CONFIRM_PW"),
				}),
			},
		],
		matching_passwords: [
			{
				type: "areNotEqual",
				message: this.shared.translateText(
					"validation.password.NOT_EQUAL"
				),
			},
		],
	};

	constructor(
		public router: Router,
		public modalController: ModalController,
		public menu: MenuController,
		private routerOutlet: IonRouterOutlet,
		private shared: SharedService
	) {
		this.matching_passwords_group = new FormGroup(
			{
				password: new FormControl(
					"",
					Validators.compose([
						Validators.minLength(5),
						Validators.required,
					])
				),
				confirm_password: new FormControl("", Validators.required),
			},
			(formGroup: FormGroup) => {
				return PasswordValidator.areNotEqual(formGroup);
			}
		);

		this.signupForm = new FormGroup({
			email: new FormControl(
				"test@test.com",
				Validators.compose([
					Validators.required,
					Validators.pattern(
						"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
					),
				])
			),
			matching_passwords: this.matching_passwords_group,
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

	async showTermsModal() {
		const modal = await this.modalController.create({
			component: TermsOfServicePage,
			swipeToClose: true,
			presentingElement: this.routerOutlet.nativeEl,
		});
		return await modal.present();
	}

	async showPrivacyModal() {
		const modal = await this.modalController.create({
			component: PrivacyPolicyPage,
			swipeToClose: true,
			presentingElement: this.routerOutlet.nativeEl,
		});
		return await modal.present();
	}

	doSignup(): void {
		console.log("do sign up");
		this.router.navigate(["app/categories"]);
	}

	doFacebookSignup(): void {
		console.log("facebook signup");
		this.router.navigate(["app/categories"]);
	}

	doGoogleSignup(): void {
		console.log("google signup");
		this.router.navigate(["app/categories"]);
	}

	doTwitterSignup(): void {
		console.log("twitter signup");
		this.router.navigate(["app/categories"]);
	}
}
