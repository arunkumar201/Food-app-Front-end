import { Link } from "react-router-dom";
import { FiSearch, FiHome, FiUser } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
const BottomNavBar = () => {
	return (
		<div className="fixed bottom-0 left-0 w-full h-16 bg-gray-100 border-t border-gray-200">
			<div className="grid h-full max-w-lg grid-cols-4 mx-auto">
				<Link
					to="/"
					className="inline-flex flex-col items-center justify-center px-5 border-r border-gray-200 hover:bg-gray-200"
				>
					<FiHome className="w-6 h-6 mb-1 text-gray-500 hover:text-blue-500" />
					<span className="text-sm text-gray-500 hover:text-blue-500">
						Home
					</span>
				</Link>
				<Link
					to="/search"
					className="inline-flex flex-col items-center justify-center px-5 border-r border-gray-200 hover:bg-gray-200"
				>
					<FiSearch className="w-6 h-6 mb-1 text-gray-500 hover:text-blue-500" />
					<span className="text-sm text-gray-500 hover:text-blue-500">
						Search
					</span>
				</Link>
				<Link
					to="/orders"
					className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-200"
				>
					<HiOutlineShoppingBag className="w-6 h-6 mb-1 text-gray-500 hover:text-blue-500" />
					<span className="text-sm text-gray-500 hover:text-blue-500">
						Orders
					</span>
				</Link>
				<Link
					to="/profile"
					className="inline-flex flex-col items-center justify-center px-5 border-gray-200 hover:bg-gray-200"
				>
					<FiUser className="w-6 h-6 mb-1 text-gray-500 hover:text-blue-500" />
					<span className="text-sm text-gray-500 hover:text-blue-500">
						Profile
					</span>
				</Link>
			</div>
		</div>
	);
};

export default BottomNavBar;
