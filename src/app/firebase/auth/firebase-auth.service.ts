import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable, of, Subject, from } from "rxjs";
import { DataStore } from "../../shell/data-store";
import { FirebaseProfileModel } from "./profile/firebase-profile.model";
import { Platform } from "@ionic/angular";

import { User, auth } from "firebase/app";
import {
	cfaSignIn,
	cfaSignOut,
	mapUserToUserInfo,
} from "capacitor-firebase-auth";
import { AngularFireDatabase } from "@angular/fire/database";
import { take } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class FirebaseAuthService {
	currentUser: User;
	profile: Observable<FirebaseProfileModel | null>;
	userProviderAdditionalInfo: any;
	profileDataStore: DataStore<FirebaseProfileModel>;
	redirectResult: Subject<any> = new Subject<any>();

	constructor(
		public angularFire: AngularFireAuth,
		public platform: Platform,
		private db: AngularFireDatabase
	) {
		this.angularFire.onAuthStateChanged((user) => {
			if (user) {
				// User is signed in.
				this.currentUser = user;
				this.profile = db
					.object<FirebaseProfileModel>("profile/" + user.uid)
					.valueChanges();
			} else {
				// No user is signed in.
				this.currentUser = null;
			}
		});

		if (!this.platform.is("capacitor")) {
			// when using signInWithRedirect, this listens for the redirect results
			this.angularFire.getRedirectResult().then(
				(result) => {
					// result.credential.accessToken gives you the Provider Access Token. You can use it to access the Provider API.
					if (result.user) {
						this.userProviderAdditionalInfo =
							result.additionalUserInfo.profile;
						this.redirectResult.next(result);
					}
				},
				(error) => {
					this.redirectResult.next({ error: error.code });
				}
			);
		}
	}

	getRedirectResult(): Observable<any> {
		return this.redirectResult.asObservable();
	}

	public getProfileDataSource(): Observable<FirebaseProfileModel> {
		return this.profile;
	}

	// Get the currently signed-in user
	getLoggedInUser() {
		return this.currentUser;
	}

	signOut(): Observable<any> {
		if (this.platform.is("capacitor")) {
			return cfaSignOut();
		} else {
			return from(this.angularFire.signOut());
		}
	}

	signInWithEmail(
		email: string,
		password: string
	): Promise<auth.UserCredential> {
		return this.angularFire.signInWithEmailAndPassword(email, password);
	}

	signUpWithEmail(
		email: string,
		password: string
	): Promise<auth.UserCredential> {
		return this.angularFire.createUserWithEmailAndPassword(email, password);
	}

	socialSignIn(
		providerName: string,
		scopes?: Array<string>
	): Observable<any> {
		if (this.platform.is("capacitor")) {
			return cfaSignIn(providerName);
		} else {
			const provider = new auth.OAuthProvider(providerName);

			if (scopes) {
				scopes.forEach((scope) => {
					provider.addScope(scope);
				});
			}

			if (this.platform.is("desktop")) {
				return from(this.angularFire.signInWithPopup(provider));
			} else {
				// web but not desktop, for example mobile PWA
				return from(this.angularFire.signInWithRedirect(provider));
			}
		}
	}

	signInWithFacebook() {
		const provider = new auth.FacebookAuthProvider();
		return this.socialSignIn(provider.providerId);
	}

	signInWithGoogle() {
		const provider = new auth.GoogleAuthProvider();
		const scopes = ["profile", "email"];
		return this.socialSignIn(provider.providerId, scopes);
	}

	signInWithTwitter() {
		const provider = new auth.TwitterAuthProvider();
		return this.socialSignIn(provider.providerId);
	}

	public getProfileStore(
		dataSource: Observable<FirebaseProfileModel>
	): DataStore<FirebaseProfileModel> {
		// Initialize the model specifying that it is a shell model
		const shellModel: FirebaseProfileModel = new FirebaseProfileModel();
		this.profileDataStore = new DataStore(shellModel);
		// Trigger the loading mechanism (with shell) in the dataStore
		this.profileDataStore.load(dataSource);
		return this.profileDataStore;
	}

	createProfile(profile: FirebaseProfileModel) {
		this.db.object("profile/" + this.currentUser.uid).set(profile);
		this.profile.pipe(take(1)).subscribe((profile) => {
			console.log(profile);
		});
	}
}
