export interface TaxModel {
	details: {
		clothing: QuantityPrice;
		shoes: QuantityPrice;
		toiletries: QuantityPrice;
		medicines: QuantityPrice;
		consumption: QuantityPrice;
		personalArticles: QuantityPrice;
		books: QuantityPrice;
		tools: QuantityPrice;
		carriage: QuantityPrice;
		instruments: QuantityPrice;
		cameras: QuantityPrice;
		binocs: QuantityPrice;
		typewritters: QuantityPrice;
		sportingGoods: QuantityPrice;
		gardenAndPets: QuantityPrice;
		groceries: QuantityPrice;
		artwork: QuantityPrice;
		cigars: QuantityPrice;
		weapons: QuantityPrice;
		trunks: QuantityPrice;
		radios: QuantityPrice;
		soundAndImage: QuantityPrice;
		tvs: QuantityPrice;
		toys: QuantityPrice;
		computers: QuantityPrice;
		phones: QuantityPrice;
		appliances: QuantityPrice;
		other?: QuantityPrice;
	};
	cash: string;
}

export interface QuantityPrice {
	quantity: string;
	price: string;
}
