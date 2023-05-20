import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { OtpForm } from "../modals/OTPForm";
import SocialMediaSignComponent from "./SocialMediaSignComponent";
import {FaUser } from "react-icons/fa";
import PolicyAgreement from "./PolicyAgreement";

interface SignUpModalProps {
	closeModal: () => void;
	showModal: boolean;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ closeModal, showModal }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [fullName, setFullName] = useState("");
	const [fullNameError, setFullNameError] = useState("");
	const [otpModalVisible, setOtpModalVisible] = useState(false);
	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};
	const handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFullName(event.target.value);
	};
	const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!email) {
			setEmailError("Please enter your email.");
			return;
		}

		if (!/\S+@\S+\.\S+/.test(email)) {
			setEmailError("Please enter a valid email address.");
			return;
		}

		setEmailError("");

		if (!password) {
			setPasswordError("Please enter your password.");
			return;
		}

		if (password.length < 6) {
			setPasswordError("Your password must be at least 6 characters long.");
			return;
		}

		if (!/^[a-zA-Z ]+$/.test(fullName)) {
			setFullNameError("Please enter a valid full name with only letters.");
			return;
		}

		setPasswordError("");
		setFullNameError("");
	
		setOtpModalVisible(true);
	};

	return (
		<>
			{!otpModalVisible && (
				<div
					className={`w-full h-full flex justify-center items-center fixed top-0 left-0 right-0 z-50 ${
						showModal ? "visible" : "invisible"
					}`}
				>
					<div className="fixed inset-0 bg-black/40"></div>

					<div className="fixed w-[90%] p-8 mx-auto my-40 bg-white md:w-1/3 rounded-xl">
						<button
							className="float-right p-1 rounded hover:bg-gray-200"
							onClick={closeModal}
						>
							<GrClose size={23} />
						</button>

						<h3 className="text-xl font-bold text-gray-400">Create Account</h3>
						<span className="relative w-full h-full right-[2rem] max-sm:right-[3rem]">
							<SocialMediaSignComponent
								onGoogleLogin={function (): void {
									throw new Error("Function not implemented.");
								}}
								onFacebookLogin={function (): void {
									throw new Error("Function not implemented.");
								}}
							/>
						</span>

						<form onSubmit={handleSubmit}>
							<div className="my-6">
								<label
									className="block font-semibold text-gray-400"
									htmlFor="email"
								>
									Email
								</label>
								<input
									type="email"
									placeholder="Email"
									value={email}
									onChange={handleEmailChange}
									className={`w-full px-3 py-2 mt-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none ${
										emailError ? "ring-red-500" : "focus:ring-blue-500"
									}`}
									style={{
										border: "none",
										borderBottom: "2px solid #A8EB12",
									}}
								/>
								{emailError && (
									<p className="mt-2 text-red-500">{emailError}</p>
								)}
							</div>

							<div className="my-6">
								<label
									className="block font-semibold text-gray-400"
									htmlFor="fullName"
								>
									Full Name
								</label>
								<input
									type="text"
									placeholder="Full Name"
									value={fullName}
									onChange={handleFullNameChange}
									className={`w-full px-3 py-2 mt-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none ${
										fullNameError ? "ring-red-500" : "focus:ring-blue-500"
									}`}
									style={{
										border: "none",
										borderBottom: "2px solid #A8EB12",
									}}
								/>
								{fullNameError && (
									<p className="mt-2 text-red-500">{fullNameError}</p>
								)}
							</div>

							<div className="relative my-6">
								<label
									className="block font-semibold text-gray-400"
									htmlFor="password"
								>
									Password
								</label>
								<input
									type={showPassword ? "text" : "password"}
									placeholder="Password"
									value={password}
									onChange={handlePasswordChange}
									className={`w-full px-3 mt-2 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none  ${
										passwordError ? "ring-red-500" : "focus:ring-blue-500"
									}`}
									style={{
										border: "none",
										borderBottom: "2px solid #A8EB12",
									}}
								/>
								<div className="absolute inset-y-0 right-0 flex items-center pr-3 mt-3">
									<button
										type="button"
										className="mt-2 text-gray-500 focus:outline-none"
										onClick={handleShowPassword}
									>
										{showPassword ? (
											<HiEyeOff size={20} />
										) : (
											<HiEye size={20} />
										)}
									</button>
								</div>
								{passwordError && (
									<p className="mt-2 text-red-500">{passwordError}</p>
								)}
							</div>
							<PolicyAgreement/>
							<div className="flex items-center justify-center w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-700 rounded-lg active:bg-blue-600 hover:bg-blue-600 focus:outline-none focus:shadow-outline">
								<button className="flex flex-row items-center gap-2">
									<FaUser />
									<span>Sign Up</span>
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
			<OtpForm
				setOpenOtpModal={setOtpModalVisible}
				isOpenOtpModal={otpModalVisible}
			/>
		</>
	);
};

export default SignUpModal;
