import {Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import HomeNavBar from "./components/navbar/HomeNavBar";

function App() {
	return (
		<div className="box-border top-0 right-0 w-full min-h-screen">
			<HomeNavBar />
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/login" element={<Login />} />
				{/* <Route path="/signup" element={<SignUp />} /> */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}
export default App;
