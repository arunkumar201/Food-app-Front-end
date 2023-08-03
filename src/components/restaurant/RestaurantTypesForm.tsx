import { useState } from "react";
import { FaAddressCard } from "react-icons/fa";
import { MdBusinessCenter, MdDelete, MdFoodBank } from "react-icons/md";
import { OpeningHour, Restaurant } from "../../utils/types/Restaurant";
import { useAppDispatch } from "../../store/ReduxHooks";
import Stepper from "./Stepper";
import {  FcNext, FcPrevious } from "react-icons/fc";
import {  useNavigate } from "react-router-dom";
import { setTypeDetails } from "../features/Restaurant/addRestaurantSlice";

const RestaurantTypesForm = () => {
	const navigation = useNavigate();
	const dispatch = useAppDispatch();
	const [formData, setFormData] = useState<Restaurant>({
		name: "",
		cuisine: "",
		establishment: "",
		openingHours: [],
	});
	const [openingHours, setOpeningHours] = useState<OpeningHour[]>([]);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = event.target;
		setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
	};

	const handleOpeningHourChange = (
		index: number,
		field: string,
		value: string
	) => {
		setOpeningHours((prevOpeningHours) => {
			const updatedOpeningHours = [...prevOpeningHours];
			updatedOpeningHours[index] = {
				...updatedOpeningHours[index],
				[field]: value,
			};
			return updatedOpeningHours;
		});
	};

	const addOpeningHour = () => {
		setOpeningHours((prevOpeningHours) => [
			...prevOpeningHours,
			{ day: "", startTime: "", endTime: "" },
		]);
	};

	const removeOpeningHour = (index: number) => {
		setOpeningHours((prevOpeningHours) => {
			const updatedOpeningHours = [...prevOpeningHours];
			updatedOpeningHours.splice(index, 1);
			return updatedOpeningHours;
		});
	};

	const restaurantTypesDetailsHandler = () => {
		const updatedRestaurantData = { ...formData, openingHours };
		dispatch(setTypeDetails(updatedRestaurantData));
	};

	return (
		<section className="flex flex-col flex-wrap h-full w-full justify-around items-center bg-gray-900 p-3 rounded-md shadow-xl">
			<Stepper />
			<div className="flex flex-row"></div>
			<div className="w-full flex justify-center gap-0 md:gap-[3rem] flex-wrap">
				<div className="h-full p-4 text-white w-auto">
					<div className="grid md:w-[22rem] w-[15rem] items-center gap-4">
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

						<label htmlFor="establishment" className="RestaurantIcon">
							<FaAddressCard />
							Establishment Type
						</label>
						<input
							type="text"
							id="establishment"
							placeholder="Enter establishment type"
							className="py-2 px-3 rounded-md bg-gray-800 text-white"
							onChange={handleChange}
							value={formData.establishment}
						/>
					</div>
				</div>

				<div className="w-[22rem] p-4 text-white max-h-[22rem] overflow-y-scroll overflow-x-hidden ">
						<h2 className="text-lg font-semibold  absolute z-10">Opening Hours</h2>
					<div className="grid md:w-[12rem] w-[15rem] items-center gap-4 mt-9 -z-10">
						{openingHours.map((openingHour, index) => (
							<div key={index} className="flex gap-2 w-full static ">
								<select
									id={`day-${index}`}
									className=" rounded-md bg-gray-800 text-white  text-base h-10 mt-6 "
									value={openingHour.day}
									onChange={(event) =>
										handleOpeningHourChange(index, "day", event.target.value)
									}
								>
									<option value="">day</option>
									<option value="Mon">Mon</option>
									<option value="Tue">Tue</option>
									<option value="Wed">Wed</option>
									<option value="Thu">Thu</option>
									<option value="Fri">Fri</option>
									<option value="Sat">Sat</option>
									<option value="Sun">Sun</option>
								</select>
								<div className="w-[7rem]  flex gap-y-3 flex-col">
									<input
										type="text"
										placeholder="Start time"
										className="py-2 px-3 rounded-md bg-gray-800 text-white"
										value={openingHour.startTime}
										onChange={(event) =>
											handleOpeningHourChange(
												index,
												"startTime",
												event.target.value
											)
										}
									/>

									<input
										type="text"
										placeholder="End time"
										className="py-2 px-3 rounded-md bg-gray-800 text-white"
										value={openingHour.endTime}
										onChange={(event) =>
											handleOpeningHourChange(
												index,
												"endTime",
												event.target.value
											)
										}
									/>
								</div>

								<button
									className="flex items-center  h-10 mt-5 px-2 py-2  text-white  bg-gray-800 hover:bg-gray-600 rounded-2xl p-2 transition-colors duration-300 text-base"
									onClick={() => removeOpeningHour(index)}
								>
									Remove <MdDelete className="ml-2 mr-0 w-6 h-6" />
								</button>
							</div>
						))}

						<button
							type="button"
							className="text-green-500 hover:text-green-700"
							onClick={addOpeningHour}
						>
							Add Opening Hour
						</button>
					</div>
				</div>
			</div>
			<div className="w-full flex  justify-around  md:mt-3 mt-6">
				<button
					className="flex items-center px-4 py-2 text-white  bg-gray-800 hover:bg-gray-600 rounded-2xl p-2 transition-colors duration-300 text-base"
					onClick={() => navigation(-1)}
				>
					<FcPrevious className="ml-2 mr-0 w-6 h-6" />
					Prev Step
				</button>
				<button
					className="flex items-center px-4 py-2 text-white  bg-gray-800 hover:bg-gray-600 rounded-2xl p-2 transition-colors duration-300 text-base"
					onClick={restaurantTypesDetailsHandler}
				>
					Next Step
					<FcNext className="ml-2 mr-0 w-6 h-6" />
				</button>
			</div>
		</section>
	);
};

export default RestaurantTypesForm;
