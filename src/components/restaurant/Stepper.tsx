import React, { useState } from "react";
import {
	FaUser,
	FaLock,
	FaClipboardCheck,
	FaFileAlt,
	FaChevronRight,
	FaChevronDown,
} from "react-icons/fa";

const Stepper: React.FC = () => {
	const [activeStep, setActiveStep] = useState(2);

	const [steps] = useState([
		{ id: 1, label: "Restaurant details", icon: FaUser },
		{ id: 2, label: "Restaurant Type & Timings", icon: FaLock },
		{ id: 3, label: "Upload Images", icon: FaFileAlt },
	]);

	return (
		<div className="flex items-center justify-center w-full mb-2 mt-3 text-center">
			{steps.map((step, index) => (
				<div
					key={step.id}
					className={`flex items-center mr-2 ${
						index !== steps.length - 1 ? "mr-2" : ""
					} ${activeStep === step.id ? "text-[#FFE4A7] " : "text-[#FFE4A7]"}`}
				>
					<div
						className={`rounded-full mr-2 ${
							activeStep > step.id ? "bg-blue-500 " : "bg-gray-500 "
						} w-10 h-10 flex items-center justify-center`}
					>
						{activeStep > step.id ? (
							<step.icon className="text-[#FFE4A7] text-lg" />
						) : (
							step.id
						)}
					</div>
					{index !== steps.length - 1 && (
						<div
							className={`flex items-center justify-center mx-2 ${
								activeStep > step.id ? "text-blue-500 mr-1" : "text-gray-500"
							}`}
						>
							{activeStep > step.id ? (
								<FaChevronDown className="text-xl -ml-2" />
							) : (
								<FaChevronRight className="text-xl" />
							)}
						</div>
					)}
					<div className={`${activeStep === step.id ? "font-bold" : ""} md:block hidden `}>
						{step.label}
					</div>
				</div>
			))}
		</div>
	);
};

export default Stepper;
