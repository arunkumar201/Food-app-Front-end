import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
	Restaurant,
	RestaurantBasicsDetailsTypes,
} from "../../../utils/types/Restaurant";

interface RestaurantState {
	basics?: RestaurantBasicsDetailsTypes;
	details: Restaurant ;
}
const initialState: RestaurantState = {
	basics: {
		name: "",
		cuisine: "",
		street: "",
		city: "",
		state: "",
		postalCode: "",
		phone: "",
		email: "",
	},
	details: {
		cuisine: "",
		establishment: "",
		openingHours: [],
		name: ""
	},
};

const restaurantSlice = createSlice({
	name: "restaurant",
	initialState,
	reducers: {
		setBasics: (state, action: PayloadAction<RestaurantBasicsDetailsTypes>) => {
			state.basics = action.payload;
		},
		setTypeDetails: (state, action: PayloadAction<Restaurant>) => {
			state.details = action.payload;
		},
	},
});

export const { setBasics, setTypeDetails } = restaurantSlice.actions;
export default restaurantSlice.reducer;
