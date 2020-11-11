import { Component } from "@angular/core";
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { MenuController } from "@ionic/angular";
import { SharedService } from "../shared/shared.service";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.page.html",
  styleUrls: ["./styles/forgot-password.page.scss"],
})
export class ForgotPasswordPage {
  forgotPasswordForm: FormGroup;

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
  };

  constructor(
    public router: Router,
    public menu: MenuController,
    private shared: SharedService
  ) {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl(
        "test@test.com",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
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

  recoverPassword(): void {
    console.log(this.forgotPasswordForm.value);
    this.router.navigate(["app/categories"]);
  }
}
