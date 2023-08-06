import { useLocation, useNavigate } from "react-router-dom";
import HomeNavBar from "../components/navbar/HomeNavBar";
import RestaurantInfo from "../components/restaurant/RestaurantInfo";
import {Button} from './../../@/components/ui/button.tsx'
const AddRestaurant = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	return (
		<>
			<div className="h-[6vh] bg-slate-500">
				<HomeNavBar />
			</div>
			<div className="p-3 bg-slate-500">
				<RestaurantInfo />
			</div>
			<div className="text-center bg-slate-500">
				{pathname === "/new-restaurant" && (
					<Button onClick={() => navigate("./step-1")} variant={"secondary"} className="bg-slate-300 mb-3 text-gray-600" >Start Now</Button>
				)}
			</div>
		</>
	);
};

export default AddRestaurant;
