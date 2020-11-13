import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { FirebaseAuthService } from "./firebase-auth.service";
import { FirebaseProfileModel } from "./profile/firebase-profile.model";
import { map, take, tap } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private firebaseAuthService: FirebaseAuthService,
		private router: Router
	) {}

	canActivate(): boolean | Observable<boolean> {
		// check if user is authenticated
		if (this.firebaseAuthService.getLoggedInUser() != null) {
			return true;
		} else {
			// Navigate to the login page
			this.router.navigate(["auth/login"]);
			return false;
		}
	}
}
