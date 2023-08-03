export interface RestaurantBasicsDetailsTypes {
	name: string;
	cuisine: string;
	street: string;
	city: string;
	state: string;
	postalCode: string;
	phone: string;
	email: string;
}
export interface OpeningHour {
	day: string;
	startTime: string;
	endTime: string;
}

export interface Restaurant {
	name: string;
	cuisine: string;
	establishment: string;
	openingHours: OpeningHour[];
}
