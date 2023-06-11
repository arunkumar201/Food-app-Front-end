import { Link } from "react-router-dom";
import logo from "../../../assets/images/foods/logo.png";
import { Profile } from "./NavBar/Profile";
import { Cart } from "./NavBar/Cart";
import { Search } from "./NavBar/Search";
import BottomNavBar from "./NavBar/BottomNavBar";
const UserNavBar = () => {
	return (
		<nav className="bg-[#4C4C6D]">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<Link
						to="/"
						className="flex items-center text-xl font-bold text-[#00ADB5]"
					>
						<img src={logo} alt="Logo" className="h-8 mr-2" />
						Apna Food
					</Link>
					<div className="hidden w-full md:flex lg:w-auto">
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
		</nav>
	);
};
export default UserNavBar;
