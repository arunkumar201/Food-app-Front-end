import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { GiModernCity, GiSmartphone } from "react-icons/gi";
import { RestaurantBasicsDetailsTypes } from "../../utils/types/Restaurant";
import { FaAddressCard } from "react-icons/fa";
import { RiUserLocationLine } from 'react-icons/ri'
import { MdFoodBank, MdBusinessCenter, MdOutlineLocationCity } from "react-icons/md";
import { FcNext } from "react-icons/fc";
import Stepper from "./Stepper";
import { setBasics } from "../features/Restaurant/addRestaurantSlice";
import { useAppDispatch } from "../../store/ReduxHooks";
import { Outlet, useNavigate } from "react-router-dom";
const RestaurantBasicsDetails = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [formData,setFormData] = useState<RestaurantBasicsDetailsTypes>({
		name: "",
		cuisine: "",
		street: "",
		city: "",
		state: "",
		postalCode: "",
		phone: "",
		email: "",
	});
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = event.target;
		setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
	};
	const restaurantBasicsDetailsHandler = () => {
		dispatch(setBasics(formData));
		navigate('/new-restaurant/step-2')

	}
	return (
		<section className="flex flex-col  flex-wrap h-full w-full justify-around items-center bg-gray-900 p-3 rounded-md shadow-xl">
			{/* column-1  */}
			<Stepper/>
			<div className="flex flex-row">
			</div>
			<div className="w-full flex justify-center  gap-0 md:gap-[3rem]   flex-wrap">
				<div className="h-full p-4 text-white w-auto">
					<div className="grid md:w-[22rem]  w-[15rem] items-center gap-4">
						<label htmlFor="name" className="RestaurantIcon">
							<MdBusinessCenter />
							Restaurant Name
						</label>
						<input
							type="text"
							id="name"
							placeholder="Enter restaurant name"
							className="py-2 px-3 rounded-md bg-gray-800 text-white"
							onChange={handleChange}
							value={formData.name}
						/>

						<label htmlFor="cuisine" className="RestaurantIcon">
							<MdFoodBank /> Food Type
						</label>
						<input
							type="text"
							id="cuisine"
							placeholder="Enter cuisine type"
							className="py-2 px-3 rounded-md bg-gray-800 text-white"
							onChange={handleChange}
							value={formData.cuisine}
						/>

						<label htmlFor="street" className="RestaurantIcon">
							<FaAddressCard />
							Street Address
						</label>
						<input
							type="text"
							id="street"
							placeholder="Enter street address"
							className="py-2 px-3 rounded-md bg-gray-800 text-white"
							onChange={handleChange}
							value={formData.street}
						/>

						<label htmlFor="city" className="RestaurantIcon">
							<GiModernCity />
							City
						</label>
						<input
							type="text"
							id="city"
							placeholder="Enter city"
							className="py-2 px-3 rounded-md bg-gray-800 text-white"
							onChange={handleChange}
							value={formData.city}
						/>
					</div>
				</div>
				{/* column-2 */}
				<div className="h-full p-4 text-white w-auto">
					<div className="grid md:w-[22rem]  w-[15rem] items-center gap-4">
						<label htmlFor="state" className="RestaurantIcon">
							<MdOutlineLocationCity /> State/Province
						</label>
						<input
							type="text"
							id="state"
							placeholder="Enter state/province"
							className="py-2 px-3 rounded-md bg-gray-800 text-white"
							onChange={handleChange}
							value={formData.state}
						/>

						<label htmlFor="postalCode" className="RestaurantIcon">
							<RiUserLocationLine />
							Postal Code
						</label>
						<input
							type="text"
							id="postalCode"
							placeholder="Enter postal code"
							className="py-2 px-3 rounded-md bg-gray-800 text-white"
							onChange={handleChange}
							value={formData.postalCode}
						/>
						<label htmlFor="phone" className="RestaurantIcon">
							<GiSmartphone /> Phone Number
						</label>
						<input
							type="tel"
							id="phone"
							placeholder="Enter phone number"
							className="py-2 px-3 rounded-md bg-gray-800 text-white"
							onChange={handleChange}
							value={formData.phone}
						/>

						<label htmlFor="email" className="RestaurantIcon">
							<AiOutlineMail /> Email Address
						</label>
						<input
							type="email"
							id="email"
							placeholder="Enter email address"
							className="py-2 px-3 rounded-md bg-gray-800 text-white"
							onChange={handleChange}
							value={formData.email}
						/>
					</div>
			<div className="w-full flex  justify-center md:justify-end md:mt-3 mt-6">
				<button
					className="flex items-center px-4 py-2 text-white  bg-gray-800 hover:bg-gray-600 rounded-2xl p-2 transition-colors duration-300 text-base"
					onClick={restaurantBasicsDetailsHandler}
				>
					Next Step
					<FcNext className="ml-2 mr-0 w-6 h-6" />
				</button>
			</div>
				</div>
			</div>
			
		</section>
	);
};

export default RestaurantBasicsDetails;
