import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { LoadingController, ModalController, Platform } from "@ionic/angular";
import {
	CameraResultType,
	CameraSource,
	Capacitor,
	Plugins,
} from "@capacitor/core";
import { FirebaseAuthService } from "../../firebase-auth.service";
import { SharedService } from "../../../../shared/shared.service";

function base64toBlob(base64Data, contentType) {
	contentType = contentType || "";
	const sliceSize = 1024;
	const byteCharacters = atob(base64Data);
	const bytesLength = byteCharacters.length;
	const slicesCount = Math.ceil(bytesLength / sliceSize);
	const byteArrays = new Array(slicesCount);

	for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
		const begin = sliceIndex * sliceSize;
		const end = Math.min(begin + sliceSize, bytesLength);

		const bytes = new Array(end - begin);
		for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
			bytes[i] = byteCharacters[offset].charCodeAt(0);
		}
		byteArrays[sliceIndex] = new Uint8Array(bytes);
	}
	return new Blob(byteArrays, { type: contentType });
}

@Component({
	selector: "app-picture-modal",
	templateUrl: "./picture-modal.component.html",
	styleUrls: ["./picture-modal.component.scss"],
})
export class PictureModalComponent implements OnInit {
	@ViewChild("filePicker") filePickerRef: ElementRef<HTMLInputElement>;
	usePicker = false;
	url: string;

	constructor(
		private modalCtrl: ModalController,
		private loadCtrl: LoadingController,
		private shared: SharedService,
		private platform: Platform,
		private authService: FirebaseAuthService
	) {}

	onCancel() {
		this.modalCtrl.dismiss(null, "cancel");
	}

	onChangePic() {
		this.modalCtrl.dismiss(null, "delete");
	}

	ngOnInit() {
		if (
			(this.platform.is("mobile") && !this.platform.is("hybrid")) ||
			this.platform.is("desktop")
		) {
			this.usePicker = true;
		}
	}

	getPicture() {
		if (!Capacitor.isPluginAvailable("Camera")) {
			this.filePickerRef.nativeElement.click();
			return;
		}
		Plugins.Camera.getPhoto({
			quality: 50,
			source: CameraSource.Prompt,
			correctOrientation: true,
			width: 600,
			resultType: CameraResultType.DataUrl,
		})
			.then((image) => {
				this.onImagePick(image.dataUrl);
			})
			.catch((err) => {
				console.log("error", err);
				if (!this.filePickerRef) {
					return;
				}
				this.filePickerRef.nativeElement.click();
				return false;
			});
	}

	onFileChosen(event: Event) {
		const pickedFile = (event.target as HTMLInputElement).files[0];
		if (!pickedFile) return;
		const fr = new FileReader();
		fr.onload = () => {
			this.onImagePick(pickedFile);
		};
		fr.readAsDataURL(pickedFile);
	}

	onImagePick(image: string | File) {
		let imageFile: File | Blob;
		if (typeof image === "string") {
			try {
				imageFile = base64toBlob(
					image.replace("data:image/jpeg;base64,", ""),
					"image/jpeg"
				);
			} catch (error) {
				console.error(error);
				this.modalCtrl.dismiss(error, "error");
				return;
			}
		} else {
			imageFile = image;
		}
		this.loadCtrl
			.create({
				keyboardClose: true,
				message: this.shared.translateText("profile.UPLOADING"),
			})
			.then((loadEl) => {
				loadEl.present();
				this.authService.uploadImage(imageFile).subscribe(
					(url) => {
						loadEl.dismiss();
						this.modalCtrl.dismiss(url, "uploadComplete");
					},
					(error) => {
						loadEl.dismiss();
						console.error(error);
						this.modalCtrl.dismiss(error, "error");
					}
				);
			});
	}
}
