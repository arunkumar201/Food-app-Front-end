import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
interface MyHoverableIconProps {
	setIsHovering: (x: boolean) => void;
	isHovering: boolean;
}

export function MyHoverableIcon({
	setIsHovering,
	isHovering,
}: MyHoverableIconProps) {
	console.log(isHovering);
	return (
		<div
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
			className=""
		>
			<FaUser className="mr-1 text-white w-7 h-7 " />
			{isHovering && (
				<div className="absolute top-[-1.7rem] -right-[4rem] w-56">
					<div className="bg-[#EEEEEE] p-6 absolute right-14 top-[3.5rem] w-[80%] rounded-lg shadow-xl opacity-[0.8] transition-opacity duration-300 hover:opacity-100 z-10">
						<div className="flex flex-col w-full mr-8 text-lg list-none">
							<Link
								to="/"
								className="text-[#00ADB5] hover:text-white hover:bg-[#00ADB5] py-2 px-4 transition-all duration-300"
							>
								Home
							</Link>
							<Link
								to="/search"
								className="text-[#00ADB5] hover:text-white hover:bg-[#00ADB5] py-2 px-4 transition-all duration-300"
							>
								Search
							</Link>
							<Link
								to="/offers-near-me"
								className="text-[#00ADB5] hover:text-white hover:bg-[#00ADB5] py-2 px-4 transition-all duration-300"
							>
								Offers
							</Link>
							<Link
								to="/support"
								className="text-[#00ADB5] hover:text-white hover:bg-[#00ADB5] py-2 px-4 transition-all duration-300"
							>
								Help
							</Link>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
