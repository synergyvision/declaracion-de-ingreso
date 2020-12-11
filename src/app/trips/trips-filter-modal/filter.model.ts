export interface FilterModel {
	states: {
		pendiente: boolean;
		calculado: boolean;
		finalizado: boolean;
		cancelado: boolean;
	};
	country: {
		alpha3: string;
		type: "origin" | "destination" | "connecting" | "any" | "";
	};
	dates: {
		from: Date | string;
		to: Date | string;
	};
}
