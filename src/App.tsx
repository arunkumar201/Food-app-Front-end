import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import "./index.css";
import NotFound from "./pages/NotFound";
import HomeNavBar from "./components/navbar/HomeNavBar";
import UserHomePage from "./components/features/User/UserHomePage";
import { useContext } from "react";
import { UserContext } from "./auth/AuthProvider";
import Footer from "./components/footer/footer";
import AddRestaurant from "./pages/AddRestaurant";
import RestaurantTypesForm from "./components/restaurant/RestaurantTypesForm";
import RestaurantBasicsDetails from "./components/restaurant/RestaurantBasicsDetails";

function App() {
	const location = useLocation();
	const currentURL = location.pathname;
	const { user } = useContext(UserContext);
	return (
		<div className="box-border top-0 right-0 w-full min-h-screen bg-[#393E46]">
			{(currentURL === "/login" || currentURL === "/signup") && <HomeNavBar />}
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/login" element={!user ? <Login /> : <UserHomePage />} />
				<Route path="/signup" element={<Login />} />
				<Route
					path="/user/:userName"
					element={user ? <UserHomePage /> : <Login />}
				/>
				<Route path="*" element={<NotFound />} />
				<Route path="/new-restaurant" element={<AddRestaurant />}>
					<Route path="step-1" element={<RestaurantBasicsDetails />} />
					<Route path="step-2" element={<RestaurantTypesForm />} />
					<Route path="step-3" element={<RestaurantTypesForm />} />
				</Route>
			</Routes>
			<Footer />
		</div>
	);
}
export default App;
