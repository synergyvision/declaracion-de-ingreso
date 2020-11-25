import { APP_INITIALIZER, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ComponentsModule } from "./components/components.module";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { ReactiveFormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";

import { HttpClientModule, HttpClient } from "@angular/common/http";
import {
	TranslateModule,
	TranslateLoader,
	TranslateService,
} from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { AuthGuard } from "./firebase/auth/auth.guard";

import { appInitializerFactory } from "./app-initializer.factory";
import { FirebaseAuthService } from "./firebase/auth/firebase-auth.service";

export function createTranslateLoader(http: HttpClient) {
	return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		ReactiveFormsModule,
		AppRoutingModule,
		ComponentsModule,
		ServiceWorkerModule.register("/ngsw-worker.js", {
			enabled: environment.production,
		}),
		AngularFireModule.initializeApp(environment.firebase),
		HttpClientModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: createTranslateLoader,
				deps: [HttpClient],
			},
		}),
	],
	providers: [
		FirebaseAuthService,
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
		{
			provide: APP_INITIALIZER,
			useFactory: appInitializerFactory,
			deps: [TranslateService],
			multi: true,
		},
		AuthGuard,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
