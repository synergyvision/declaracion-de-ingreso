export interface FilterModel {
	states: {
		pendiente: boolean;
		calculado: boolean;
		finalizado: boolean;
		cancelado: boolean;
	};
	country: {
		alpha3: string;
		type: string;
	};
	dates: {
		from: Date;
		to: Date;
	};
}
