import { TaxModel } from '../tax/tax.model';

export interface TripsModel {
	id: string;
	flights: FlightModel[];
	taxDeclaration?: TaxModel;
	state: string;
}

export interface FlightModel {
	from: Destination;
	to: Destination;
	airline: string;
	flightNumber: string;
	returnFlight?: boolean;
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
