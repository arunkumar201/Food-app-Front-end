import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
	Restaurant,
	RestaurantBasicsDetailsTypes,
	RestaurantImages,
} from "../../../utils/types/Restaurant";

interface RestaurantState {
	basics?: RestaurantBasicsDetailsTypes;
	details: Restaurant;
	Images: RestaurantImages;
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
		name: "",
	},
	Images: {
		ProfileImages: [],
		BannerImages: [],
		MenuImages: [],
		FoodImages: [],
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
		setImages: (state, action: PayloadAction<RestaurantImages>) => {
			state.Images = action.payload;
		},
	},
});

export const { setBasics, setTypeDetails, setImages } = restaurantSlice.actions;
export default restaurantSlice.reducer;
