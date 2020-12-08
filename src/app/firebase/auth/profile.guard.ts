import { Injectable } from "@angular/core";
import {
	CanActivate,
	ActivatedRouteSnapshot,
	Router,
	RouterStateSnapshot,
	UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { FirebaseAuthService } from "./firebase-auth.service";
import { map, switchMap, take, tap } from "rxjs/operators";

@Injectable({
	providedIn: "root",
})
export class ProfileGuard implements CanActivate {
	constructor(
		private firebaseAuthService: FirebaseAuthService,
		private router: Router
	) {}
	canActivate():
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		return this.firebaseAuthService.getAuthState().pipe(
			switchMap(() => {
				return this.firebaseAuthService.getProfileDataSource().pipe(
					map((profile) => {
						if (profile != null) {
							return true;
						} else {
							this.router.navigate(["auth/profile/create"]);
							return false;
						}
					})
				);
			})
		);
	}
}
