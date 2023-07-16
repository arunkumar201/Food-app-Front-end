import HomeNavBar from "../components/navbar/HomeNavBar";
import RestaurantInfo from "../components/restaurant/RestaurantInfo";

const AddRestaurant = () => {
	return (
		<>
			<div className="h-[6vh] bg-slate-500">
			<HomeNavBar/>
			</div>
			<div className="p-3 bg-slate-500">
				<RestaurantInfo />
			</div>
		</>
	);
};

export default AddRestaurant;
