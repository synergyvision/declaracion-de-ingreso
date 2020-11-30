export interface TripsModel {
	id: number;
	flights: {
		from: Destination;
		to: Destination;
		airline: string;
		flightNumber: string;
	}[];
	state: string;
}

interface Destination {
	country: string;
	city: string;
	date: Date;
}

export enum States {
	CALCULADO = "calculado",
	FINALIZADO = "finalizado",
	PENDIENTE = "pendiente",
	CANCELADO = "cancelado",
}
