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
import { map, switchMap, take } from "rxjs/operators";

@Injectable({
	providedIn: "root",
})
export class NoProfileGuard implements CanActivate {
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
			take(1),
			switchMap(() => {
				return this.firebaseAuthService.getProfileDataSource().pipe(
					take(1),
					map((profile) => {
						if (profile == null) {
							return true;
						} else {
							this.router.navigate(["trips"]);
							return false;
						}
					})
				);
			})
		);
	}
}
