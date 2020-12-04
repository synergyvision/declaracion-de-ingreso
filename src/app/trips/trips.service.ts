import { Injectable } from "@angular/core";
import { FirebaseAuthService } from "../firebase/auth/firebase-auth.service";
import { TripsModel } from "./trips.model";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { BehaviorSubject, Observable, Subscription, from } from "rxjs";
import { map, tap } from "rxjs/operators";

@Injectable({
	providedIn: "root",
})
export class TripsService {
	subscriptions: Subscription;
	tripsRef: AngularFireList<TripsModel> = null;
	_trips = new BehaviorSubject<TripsModel[]>(null);

	constructor(
		private authService: FirebaseAuthService,
		private db: AngularFireDatabase
	) {
		let childSubscription: Subscription;
		this.subscriptions = authService.currentUser
			.pipe(
				tap((user) => {
					if (user == null) {
						this.tripsRef = null;
						this._trips.next(null);
					} else {
						this.tripsRef = db.list<TripsModel>(
							user.uid + "/trips"
						);
						childSubscription = this.tripsRef
							.snapshotChanges()
							.pipe(
								map((changes) => {
									return changes.map((c) => ({
										id: c.payload.key,
										...c.payload.val(),
									}));
								})
							)
							.subscribe((trips) => {
								this._trips.next(trips);
							});
					}
				})
			)
			.subscribe();
		this.subscriptions.add(childSubscription);
	}

	addTrip(trip: TripsModel) {
		return from(this.tripsRef.push(trip));
	}

	get trips(): Observable<TripsModel[]> {
		return this._trips.asObservable();
	}

	deleteTrip(id: string) {
		return from(this.tripsRef.remove(id));
	}

	ngOnDestroy() {
		this.subscriptions.unsubscribe();
	}
}
