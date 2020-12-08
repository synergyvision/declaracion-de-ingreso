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
import { map, take, tap } from "rxjs/operators";

@Injectable({
	providedIn: "root",
})
export class NoAuthGuard implements CanActivate {
	constructor(
		private firebaseAuthService: FirebaseAuthService,
		private router: Router
	) {}

	canActivate(): boolean | Observable<boolean> {
		return this.firebaseAuthService.getAuthState().pipe(
			take(1),
			map((user) => {
				if (!user) {
					return true;
				} else {
					this.router.navigate(["trips"]);
					return false;
				}
			})
		);
	}
}
