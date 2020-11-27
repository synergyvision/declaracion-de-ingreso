export interface TripsModel {
	id: number;
	destinations?: {
		country: string;
		city: string;
		arrival: Date;
		departure: Date;
		airline: string;
		flightNumber: string;
	}[];
	return: {
		airline: string;
		flightNumber: string;
		arrival: Date;
	};
	state: string;
}

export enum States {
	CALCULADO = "calculado",
	FINALIZADO = "finalizado",
	PENDIENTE = "pendiente",
	CANCELADO = "cancelado",
}
