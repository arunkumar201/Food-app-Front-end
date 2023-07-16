import React from "react";
import RestaurantBasicsDetails from "./RestaurantBasicsDetails";
const RestaurantInfo: React.FC = () => {
	return (
		<>
			<div className="absolute inset-0 bg-[#001C30] opacity-20 h-[7vh]"></div>
			<h1 className="text-3xl tracking-tight lg:text-2xl text-center text-[#fff1cf] bg-[#001C30] p-2 bg-opacity-[0.7]  md:text-3xl  font-bold border-b-2 border-stone-200 rounded-md ">
				<span className="">Create Your Restaurant Page</span>
			</h1>
			{/* main div for form  */}
			<RestaurantBasicsDetails />
		</>
	);
};
export default RestaurantInfo;
