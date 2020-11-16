import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { FirebaseAuthService } from "../firebase-auth.service";
import { Observable, of } from "rxjs";
import { DataStore } from "../../../shell/data-store";
import { FirebaseProfileModel } from "./firebase-profile.model";
import { map, switchMap, take } from "rxjs/operators";

@Injectable()
export class FirebaseProfileResolver implements Resolve<any> {
	constructor(private firebaseAuthService: FirebaseAuthService) {}

	resolve() {
		return this.firebaseAuthService.getAuthState().pipe(
			take(1),
			map(() => {
				const dataSource: Observable<FirebaseProfileModel> = this.firebaseAuthService.getProfileDataSource();
				const dataStore: DataStore<FirebaseProfileModel> = this.firebaseAuthService.getProfileStore(
					dataSource
				);
				return dataStore;
			})
		);
	}
}
