import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { CitySelectorComponent } from "../trips/city-selector/city-selector.component";
import { ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

@NgModule({
	declarations: [CitySelectorComponent],
	imports: [CommonModule, TranslateModule, ReactiveFormsModule, IonicModule],
	exports: [TranslateModule, CitySelectorComponent],
})
export class SharedModule {}
