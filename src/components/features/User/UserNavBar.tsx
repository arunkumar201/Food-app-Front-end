import { Link } from "react-router-dom";
import logo from "../../../assets/images/foods/logo.png";
import { Profile } from "./NavBar/Profile";
import { Cart } from "./NavBar/Cart";
import { Search } from "./NavBar/Search";
import BottomNavBar from "./NavBar/BottomNavBar";
import { ToastContainer } from "react-toastify";
const UserNavBar = () => {
	return (
		<nav className="bg-[#181872]">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<Link
						to="/"
						className="flex  items-center text-xl font-bold text-[#00ADB5]"
					>
						<img src={logo} alt="Logo" className="w-12 h-8 mr-2" />
						<span className="w-[9rem]">Apna Food</span>
					</Link>
					<div className="hidden w-full md:flex md:justify-center lg:w-auto">
						<Search />
					</div>
					<div className="flex items-center justify-around gap-8">
						<Cart />
						<Profile />
					</div>
				</div>
			</div>
			<div className="block md:hidden tab:hidden">
				<BottomNavBar />
			</div>
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				closeButton={false}
				pauseOnHover={true}
				closeOnClick={true}
				draggable={true}
			/>
		</nav>
	);
};
export default UserNavBar;
