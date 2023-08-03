import { configureStore } from "@reduxjs/toolkit";
import addRestaurantSlice from "../components/features/Restaurant/addRestaurantSlice";
const store = configureStore({
	reducer: {
		cart: () => null,
		products: () => null,
		restaurantForm: addRestaurantSlice,
	},
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
