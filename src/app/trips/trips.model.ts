export interface TripsModel {
	id: string;
	flights: {
		from: Destination;
		to: Destination;
		airline: string;
		flightNumber: string;
		returnFlight?: boolean;
	}[];
	state: string;
}

interface Destination {
	country: string;
	city: string;
	date: Date | string;
}

export enum States {
	CALCULADO = "calculado",
	FINALIZADO = "finalizado",
	PENDIENTE = "pendiente",
	CANCELADO = "cancelado",
}
