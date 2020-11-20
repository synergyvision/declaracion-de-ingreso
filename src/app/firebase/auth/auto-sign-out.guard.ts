import { Injectable } from "@angular/core";
import {
	CanActivate,
	ActivatedRouteSnapshot,
	Router,
	RouterStateSnapshot,
	UrlTree,
} from "@angular/router";
import { Observable, of } from "rxjs";
import { FirebaseAuthService } from "./firebase-auth.service";
import { map, switchMap, take } from "rxjs/operators";

@Injectable({
	providedIn: "root",
})
export class AutoSignOutGuard implements CanActivate {
	constructor(
		private firebaseAuthService: FirebaseAuthService,
		private router: Router
	) {}
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		const date = new Date();
		return this.firebaseAuthService.getSignOutDate().pipe(
			take(1),
			switchMap((signOutDate) => {
				console.log(date, signOutDate);
				if (date > signOutDate) {
					return this.firebaseAuthService.signOut().pipe(
						map(() => {
							this.router.navigate(["auth/login"], {
								replaceUrl: true,
							});
							return false;
						})
					);
				} else return of(true);
			})
		);
	}
}
