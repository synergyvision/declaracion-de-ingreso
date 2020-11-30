import { Injectable } from "@angular/core";
import { FirebaseAuthService } from "../firebase/auth/firebase-auth.service";
import { TripsModel } from "./trips.model";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { BehaviorSubject, Subscription } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
	providedIn: "root",
})
export class TripsService {
	subscriptions: Subscription;
	trips = new BehaviorSubject<TripsModel[]>(null);
	tripsRef: AngularFireList<TripsModel>;

	constructor(
		private authService: FirebaseAuthService,
		private db: AngularFireDatabase
	) {
		this.subscriptions = authService
			.getAuthState()
			.pipe(
				tap((user) => {
					console.log("trip service user", user);
					if (user == null) {
						this.tripsRef = null;
					}
					this.tripsRef = db.list<TripsModel>(user.uid + "/trips");
				})
			)
			.subscribe();
	}

	addTrip(trip: TripsModel) {
		this.tripsRef.push(trip);
	}

	ngOnDestroy() {}
}
