import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { take } from "rxjs/operators";
import { AlertController } from "@ionic/angular";

@Injectable({
	providedIn: "root",
})
export class SharedService {
	constructor(
		private translate: TranslateService,
		private alertCtrl: AlertController
	) {}

	translateText(text: string, param?: { [key: string]: string }): string {
		let translatedText: string;
		this.translate
			.get(text, param)
			.pipe(take(1))
			.subscribe((value) => {
				translatedText = value;
			});
		return translatedText;
	}

	showAlert(header: string, message: string) {
		this.alertCtrl
			.create({
				header,
				message,
				buttons: ["Ok"],
			})
			.then((alertEl) => {
				alertEl.present();
			});
	}
}
