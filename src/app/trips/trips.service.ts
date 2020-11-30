import { Injectable } from "@angular/core";
import { FirebaseAuthService } from "../firebase/auth/firebase-auth.service";

@Injectable({
	providedIn: "root",
})
export class TripsService {
	constructor(private authService: FirebaseAuthService) {}
}
