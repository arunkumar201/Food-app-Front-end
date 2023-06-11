import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Cart = () => {
	return (
		<>
			<div className="relative mr-4 md:mr-0">
				<Link to="/cart" className="flex items-center hover:text-[#00ADB5]">
					<FaShoppingCart className="mr-1 text-white w-7 h-7" />
					<span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-[#393E46] transform translate-x-1/2 -translate-y-1/2 bg-[#EEEEEE] rounded-full">
						99
					</span>
				</Link>
			</div>
		</>
	);
};
