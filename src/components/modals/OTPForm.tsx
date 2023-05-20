import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { GrClose } from "react-icons/gr";
import { FiRefreshCw } from "react-icons/fi";

interface OtpFormProps {
  isOpenOtpModal: boolean;
  setOpenOtpModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const OtpForm: React.FC<OtpFormProps> = ({
	isOpenOtpModal,
	setOpenOtpModal,
}) => {
	const [otp, setOtp] = useState("");
	const [resend, setResend] = useState(false);
	const [errors, setErrors] = useState<string[]>([]);
	const [loading, setLoading] = useState(false);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (validateOTP()) {
			setLoading(true);
			// Simulate API call
			setTimeout(() => {
				setLoading(false);
				console.log("OTP verified!");
			}, 2000);
		}
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setOtp(e.target.value);
	};

	const handleResend = () => {
		setResend(true);
		// Send new OTP
		setTimeout(() => {
			setResend(false);
			console.log("New OTP sent!");
		}, 3000);
	};

	const validateOTP = () => {
		const errors: string[] = [];
		if (otp.length !== 6) {
			errors.push("OTP must be 6 digits.");
		}
		if (!/^\d+$/.test(otp)) {
			errors.push("OTP must contain only digits.");
		}
		setErrors(errors);
		return errors.length === 0;
	};

	useEffect(() => {
		if (!isOpenOtpModal) {
			// Reset form when the modal is closed
			setOtp("");
			setErrors([]);
		}
	}, [isOpenOtpModal]);

	return (
		<>
			{isOpenOtpModal && (
				<div
					className={`w-full h-full flex flex-col justify-center items-center fixed top-0 left-0 right-0 z-50 rounded-xl`}
				>
				<span className="relative z-20 left-[8rem] -bottom-11">
					<button
						className="float-right p-1 rounded hover:bg-gray-200"
						onClick={() => setOpenOtpModal(false)}
						>
						<GrClose size={23} />
					</button>
						</span>
					<div className="p-4 bg-white rounded-lg shadow-lg w-80">
						<h3 className="mb-4 text-xl font-medium">Verify Your OTP</h3>
						<form onSubmit={handleSubmit}>
							<div className="flex items-center mb-4">
								<input
									type="text"
									className={`w-full p-2 border-2 rounded-lg outline-none ${
										errors.length ? "border-red-500" : "border-gray-300"
									}`}
									placeholder="Enter OTP"
									value={otp}
									onChange={handleChange}
								/>
								{resend ? (
									<button
										className="ml-2 text-gray-400 cursor-not-allowed"
										disabled
									>
										<FiRefreshCw size={18} />
									</button>
								) : (
									<button
										className="ml-2 text-blue-500 hover:text-blue-700"
										onClick={handleResend}
									>
										<FiRefreshCw size={18} />
									</button>
								)}
							</div>
							{errors.map((error, index) => (
								<p key={index} className="text-sm text-red-500 mb 2">
									{error}
								</p>
							))}
							<button
								type="submit"
								className="w-full py-2 text-white transition-colors duration-200 bg-blue-500 rounded-lg hover:bg-blue-600"
								disabled={loading}
							>
								{loading ? (
									<div className="flex items-center justify-center">
										<div className="mr-2 animate-spin">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-white"
											>
												<circle
													className="opacity-25"
													cx="12"
													cy="12"
													r="10"
													stroke="currentColor"
													strokeWidth="4"
												></circle>
												<path
													className="opacity-75"
													fill="currentColor"
													d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
												></path>
											</svg>
										</div>
										Verifying...
									</div>
								) : (
									"Verify"
								)}
							</button>
						</form>
					</div>
				</div>
			)}
		</>
	);
};
