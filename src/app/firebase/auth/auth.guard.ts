import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { FirebaseAuthService } from "./firebase-auth.service";
import { FirebaseProfileModel } from "./profile/firebase-profile.model";
import { map, switchMap, take, tap } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private firebaseAuthService: FirebaseAuthService,
		private router: Router
	) {}

	canActivate(): boolean | Observable<boolean> {
		return this.firebaseAuthService.getAuthState().pipe(
			take(1),
			map((user) => {
				if (user) {
					return true;
				} else {
					this.router.navigate(["auth/login"]);
					return false;
				}
			})
		);
	}
}
