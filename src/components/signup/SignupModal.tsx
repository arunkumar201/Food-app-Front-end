import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { OtpForm } from "../modals/OTPForm";
import SocialMediaSignComponent from "./SocialMediaSignComponent";
import {FaUser } from "react-icons/fa";
import PolicyAgreement from "./PolicyAgreement";
import { useSignUp } from "../../Hooks/React-hooks/useSignUp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiAlertCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { auth } from "../../auth/firebase/firebase";

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
	const [showConfirmPassword,setShowConfirmPassword] = useState(false);
	const navigate = useNavigate();
	const {
		signUpValues,
		setSignUpValues,
		handleInputChange,
		handleSignUp,
		error,
		isLoading,
	} = useSignUp();
	const [isShowMsg, setIsShowMsg] = useState(false);
	const [otpModalVisible, setOtpModalVisible] = useState(false);
	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
		handleInputChange(event);
	};
	const handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFullName(event.target.value);
		handleInputChange(event);
	};
	const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
		handleInputChange(event);
	};

	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};
	const validateEmail = (email: string): string | undefined => {
		if (!email) {
			return "Please enter your email.";
		}

		if (!/\S+@\S+\.\S+/.test(email)) {
			return "Please enter a valid email address.";
		}

		return undefined;
	};

	const validatePassword = (password: string): string | undefined => {
		if (!password) {
			return "Please enter your password.";
		}

		if (password.length < 6) {
			return "Your password must be at least 6 characters long.";
		}

		return undefined;
	};
	const isPasswordMatch = (password: string, confirmPassword: string) => {
		return password === confirmPassword;
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const emailError = validateEmail(email);
		setEmailError(emailError as string);
		if (emailError) {
			toast.error("Invalid email address", {
				position: "top-center",
				autoClose: 3000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			return;
		}
		const passwordError = validatePassword(password);
		setPasswordError(passwordError as string);
		if (passwordError) {
			toast.error("Invalid password", {
				position: "top-center",
				autoClose: 3000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			return;
		}
		const isMatch = isPasswordMatch(password, signUpValues.confirmPassword);
		if (!isMatch) {
			toast.error("Password does not match", {
				position: "top-center",
				autoClose: 3000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			return;
		}
		try {
			await handleSignUp();
			// setOtpModalVisible(true);
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			toast.error(error, {
				position: "top-center",
				autoClose: 3000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
		if (!error) {
			toast.success("Sign up successful,Please Login", {
				position: "top-center",
				autoClose: 3000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			navigate(`/profile:${auth.currentUser}`);
			closeModal();
		} else {
			setIsShowMsg(true);
			setTimeout(() => {
				setIsShowMsg(false);
			}, 5000);
			toast.error("User Already exists!", {
				position: "top-center",
				autoClose: 3000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
		setFullName("");
		setEmail("");
		setPassword("");
		setSignUpValues({
			displayName: "",
			email: "",
			password: "",
			confirmPassword: "",
		});
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
									name="email"
									value={signUpValues.email}
									placeholder="Email"
									onChange={handleEmailChange}
									className={`w-full px-3 py-2 mt-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none ${
										emailError ? "ring-red-500" : "focus:ring-blue-500"
									}`}
									style={{
										border: "none",
										borderBottom: "2px solid #A8EB12",
									}}
									required
									autoFocus
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
									name="displayName"
									placeholder="Full Name"
									value={signUpValues.displayName}
									onChange={handleFullNameChange}
									className={`w-full px-3 py-2 mt-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none 
									`}
									style={{
										border: "none",
										borderBottom: "2px solid #A8EB12",
									}}
									autoComplete="username"
								/>
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
									name="password"
									placeholder="enter password"
									value={signUpValues.password}
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
							<div className="relative my-6">
								<label
									className="block font-semibold text-gray-400"
									htmlFor="password"
								>
									Confirm Password:
								</label>
								<input
									type={showConfirmPassword ? "text" : "password"}
									name="confirmPassword"
									placeholder="Re-enter password "
									value={signUpValues.confirmPassword}
									onChange={handleInputChange}
									className={`w-full px-3 mt-2 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none  ${
										passwordError ? "ring-red-500" : "focus:ring-blue-500"
									}`}
									style={{
										border: "none",
										borderBottom: "2px solid #A8EB12",
									}}
									autoComplete="new-password"
								/>
								<div className="absolute inset-y-0 right-0 flex items-center pr-3 mt-3">
									<button
										type="button"
										className="mt-2 text-gray-500 focus:outline-none"
										onClick={() => setShowConfirmPassword((prev) => !prev)}
									>
										{showConfirmPassword ? (
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
							<PolicyAgreement />
							<div className="flex items-center justify-center w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-700 rounded-lg active:bg-blue-600 hover:bg-blue-600 focus:outline-none focus:shadow-outline">
								<button
									className="flex flex-row items-center gap-2"
									disabled={isLoading}
								>
									<FaUser />
									<span>Sign Up</span>
								</button>
							</div>
							{isShowMsg && error && (
								<div className="flex items-center p-1 mt-3 text-sm text-white bg-red-500 rounded-md justify-evenly">
									<p>
										User already exists. Please{" "}
										<a href="/login" className="underline hover:text-amber-400">
											login
										</a>
									</p>
									<div className="ml-2">
										<FiAlertCircle className="w-6 h-6 text-white" />
									</div>
								</div>
							)}
						</form>
					</div>
				</div>
			)}
			<OtpForm
				setOpenOtpModal={setOtpModalVisible}
				isOpenOtpModal={otpModalVisible}
			/>
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				closeButton={false}
				pauseOnHover={true}
				closeOnClick={true}
				draggable={true}
			/>
		</>
	);
};

export default SignUpModal;
