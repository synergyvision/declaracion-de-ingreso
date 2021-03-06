import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { BehaviorSubject, Observable, of, Subject, from } from "rxjs";
import { DataStore } from "../../shell/data-store";
import { FirebaseProfileModel } from "./profile/firebase-profile.model";
import { Platform } from "@ionic/angular";

import firebase, { User, auth } from "firebase/app";
import "firebase/storage";
import {
	cfaSignIn,
	cfaSignOut,
	mapUserToUserInfo,
} from "capacitor-firebase-auth";
import { AngularFireDatabase, AngularFireObject } from "@angular/fire/database";
import { finalize, map, switchMap, take, tap } from "rxjs/operators";
import { Plugins } from "@capacitor/core";
import { TranslateService } from "@ngx-translate/core";
import { Reference } from "@angular/fire/firestore";

@Injectable({ providedIn: "root" })
export class FirebaseAuthService {
	_currentUser = new BehaviorSubject<User>(null);
	profile: AngularFireObject<FirebaseProfileModel>;
	profilePicRef: firebase.storage.Reference;
	userProviderAdditionalInfo: any;
	profileDataStore: DataStore<FirebaseProfileModel>;
	redirectResult: Subject<any> = new Subject<any>();

	profilePicSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
		null
	);

	constructor(
		public angularFire: AngularFireAuth,
		public platform: Platform,
		private db: AngularFireDatabase,
		private translate: TranslateService
	) {
		this.angularFire.languageCode = new Promise(() => {
			return this.translate.currentLang;
		});
		this.angularFire.onAuthStateChanged((user) => {
			if (user) {
				// User is signed in.
				this._currentUser.next(user);
				this.profile = db.object<FirebaseProfileModel>(
					user.uid + "/profile"
				);
				const storageRef = firebase.storage().ref();
				this.profilePicRef = storageRef.child("profile/" + user.uid);
				this.getProfilePic()
					.pipe(
						tap((url) => {
							this.profilePicSubject.next(url);
						})
					)
					.subscribe(
						() => {},
						(error) => {
							console.log("no picture");
						}
					);
			} else {
				// No user is signed in.
				this._currentUser.next(null);
				this.profile = null;
				this.profilePicRef = null;
				this.profilePicSubject.next(null);
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

	get currentUser() {
		return this._currentUser.asObservable();
	}

	getRedirectResult(): Observable<any> {
		return this.redirectResult.asObservable();
	}

	public getProfileDataSource(): Observable<FirebaseProfileModel> {
		if (this.profile != null) {
			return this.profile.valueChanges();
		} else {
			return of({} as FirebaseProfileModel);
		}
	}

	// Get the currently signed-in user
	getAuthState() {
		return this.angularFire.authState;
	}

	signOut(): Observable<any> {
		if (this.platform.is("capacitor")) {
			return cfaSignOut();
		} else {
			return from(this.angularFire.signOut()).pipe(
				tap(() => {
					this.clearSignOutDate();
					this.clearProfile();
				})
			);
		}
	}

	generateSignOutDate() {
		const date = new Date();
		const signOutDate = new Date(date.setMonth(date.getMonth() + 1));
		Plugins.Storage.set({
			key: "signOutDate",
			value: signOutDate.toString(),
		});
	}

	getSignOutDate(): Observable<Date> {
		return from(Plugins.Storage.get({ key: "signOutDate" })).pipe(
			take(1),
			switchMap((data) => {
				const signOutDate = new Date(data.value);
				return of(signOutDate);
			})
		);
	}

	clearSignOutDate() {
		Plugins.Storage.remove({ key: "signOutDate" });
	}

	clearProfile(): void {
		this.profile = null;
	}

	signInWithEmail(
		email: string,
		password: string
	): Promise<auth.UserCredential> {
		return this.angularFire
			.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
			.then(() => {
				return this.angularFire.signInWithEmailAndPassword(
					email,
					password
				);
			});
	}

	signUpWithEmail(
		email: string,
		password: string
	): Promise<auth.UserCredential> {
		return this.angularFire
			.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
			.then(() => {
				return this.angularFire.createUserWithEmailAndPassword(
					email,
					password
				);
			});
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

	createProfile(profile: FirebaseProfileModel): Observable<void> {
		return from(this.profile.set(profile));
	}

	updateProfile(profile: FirebaseProfileModel): Observable<void> {
		return from(this.profile.update(profile));
	}

	deleteProfile(): Observable<void> {
		return from(this.profile.remove());
	}

	resetPassword(email: string) {
		return from(this.angularFire.sendPasswordResetEmail(email));
	}

	uploadImage(imageFile: File | Blob) {
		return this.currentUser.pipe(
			take(1),
			switchMap((user) => {
				const storageRef = firebase.storage().ref();
				const imageProfileRef = storageRef.child("profile/" + user.uid);
				return from(imageProfileRef.put(imageFile));
			}),
			switchMap((url) => {
				return this.getProfilePic();
			})
		);
	}

	getProfilePic() {
		return from(this.profilePicRef.getDownloadURL());
	}

	newProfilePic(url: string) {
		this.profilePicSubject.next(url);
	}

	get profilePic() {
		return this.profilePicSubject.asObservable();
	}

	deleteProfilePic() {
		return from(this.profilePicRef.delete());
	}

	getUserCredential(password: string) {
		return this.currentUser.pipe(
			take(1),
			switchMap((user) => {
				return of(
					firebase.auth.EmailAuthProvider.credential(
						user.email,
						password
					)
				);
			})
		);
	}
}
