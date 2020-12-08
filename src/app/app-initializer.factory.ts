import { APP_INITIALIZER } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { LOCATION_INITIALIZED } from "@angular/common";

export function appInitializerFactory(translate: TranslateService) {
	return () => {
		translate.setDefaultLang("es");
		return translate.use("es").toPromise();
	};
}
