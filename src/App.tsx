import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import HomeNavBar from "./components/navbar/HomeNavBar";
import UserHomePage from "./components/features/User/UserHomePage";
import ForgotPassword from "./components/modals/ForgotPassword";

function App() {
	const location = useLocation();
	const currentURL = location.pathname;
	return (
		<div className="box-border top-0 right-0 w-full min-h-screen bg-[#393E46]">
			{(currentURL === "/login" || currentURL === "/signup") && <HomeNavBar />}
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Login />} />
				<Route path="/user/:userName" element={<UserHomePage />} />
				<Route path="*" element={<NotFound />} />
				
			</Routes>
		</div>
	);
}
export default App;
