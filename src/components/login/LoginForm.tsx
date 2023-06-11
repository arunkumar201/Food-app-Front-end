import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { BiRefresh } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";
import SignUpModal from "../signup/SignupModal";
import { useSignIn } from "../../Hooks/React-hooks/useSignIn";
import { useNavigate } from "react-router-dom";

<div className="bg-[url(`${foodbg}`)]"></div>;
function LoginForm() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [countryCode, setCountryCode] = useState("+91");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [otp, setOtp] = useState("");
	const [showModal, setShowModal] = useState(false);
	const [isPhoneLogin, setIsPhoneLogin] = useState(false);
	const { signInValues, handleInputChange, handleSignIn, error, isLoading } =
		useSignIn();
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		handleSignIn();
	};

	const isValidEmail = () => {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	};

	const isValidPassword = () => {
		const re =
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
		return re.test(password);
		// return true;
	};

	function createAccountHandler(): void {
		setShowModal(true);
		navigate("/signup");
	}
	useEffect(() => {
		if (!showModal) {
			navigate("/login");
		}
	}, [showModal, navigate]);
	return (
		<>
			<div>
				<SignUpModal
					showModal={showModal}
					closeModal={() => setShowModal(false)}
				/>
			</div>
			<div className="w-full h-full shadow-sm">
				<form
					onSubmit={handleSubmit}
					className="h-full max-w-md mb-3 ml-4 mr-3 "
				>
					<h2 className="mb-8 text-xl font-bold text-gray-400 text-start max-sm:text-center">
						{isPhoneLogin ? "Login with Phone" : "Sign In with Email"}
					</h2>
					{isPhoneLogin ? (
						<>
							<div className="mb-6">
								<label className="block mb-2 text-sm font-bold text-gray-400">
									Country Code
								</label>
								<select
									value={countryCode}
									style={{
										border: "none",
										borderBottom: "2px solid #A8EB12",
									}}
									onChange={(e) => setCountryCode(e.target.value)}
									className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								>
									<option value="+91">India (+91)</option>
								</select>
							</div>
							<div className="mb-6">
								<label
									className="block mb-2 text-base font-bold text-gray-400"
									htmlFor="phoneNumber"
								>
									Phone Number
								</label>
								<input
									className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none"
									id="phoneNumber"
									type="text"
									style={{
										border: "none",
										borderBottom: "2px solid #A8EB12",
									}}
									placeholder="Enter your phone number"
									value={phoneNumber}
									autoComplete="phoneNumber"
									onChange={(e) => setPhoneNumber(e.target.value)}
								/>
							</div>
							<div className="mb-6">
								<label
									className="block mb-2 text-base font-bold text-gray-400"
									htmlFor="otp"
								>
									OTP
								</label>
								<div className="flex items-center ">
									<input
										className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-l shadow appearance-none focus:outline-none "
										id="otp"
										type="text"
										placeholder="Enter OTP"
										value={otp}
										style={{
											border: "none",
											borderBottom: "2px solid #A8EB12",
										}}
										onChange={(e) => setOtp(e.target.value)}
									/>
									<button
										type="button"
										className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md shadow-md hover:opacity-75 focus:outline-none focus:shadow-outline"
									>
										<span className="flex flex-row">
											<BiRefresh className="inline-block mr-2 text-lg" />
											OTP
										</span>
									</button>
								</div>
							</div>
						</>
					) : (
						<>
							<div className="mb-6">
								<label
									className="block mb-2 text-base font-bold text-gray-400"
									htmlFor="email"
								>
									Email Address
								</label>
								<input
									className={`w-full px-3 py-2 leading-tight text-gray-700 rounded shadow appearance-none focus:outline-none focus:shadow-outline ${
										email && !isValidEmail() ? "border-red-500" : ""
									}`}
									type="email"
									name="email"
									value={signInValues.email}
									id="email"
									placeholder="Your Email Address"
									onChange={(e) => {
										setEmail(e.target.value);
										handleInputChange(e);
									}}
									style={{
										border: "none",
										borderBottom: "2px solid #A8EB12",
									}}
									autoComplete="username"
									required
								/>
								{email && !isValidEmail() && (
									<p className="mt-1 text-sm text-red-500">
										Please enter a valid email address.
									</p>
								)}
							</div>
							<div className="mb-6">
								<label
									className="block mb-2 text-base font-bold text-gray-400"
									htmlFor="password"
								>
									Password
								</label>
								<div className="relative">
									<input
										className={`w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${
											password && !isValidPassword() ? "border-red-500" : ""
										}`}
										id="password"
										name="password"
										value={signInValues.password}
										type={showPassword ? "text" : "password"}
										placeholder="Enter your password"
										style={{
											border: "none",
											borderBottom: "2px solid #A8EB12",
										}}
										onChange={(e) => {
											setPassword(e.target.value);
											handleInputChange(e);
										}}
										autoComplete="new-password"
										required
									/>
									<button
										type="button"
										className="absolute transform -translate-y-1/2 bg-transparent border-none top-1/2 right-2 text-gray-600rounded-full focus:outline-none"
										onClick={() => setShowPassword(!showPassword)}
									>
										{showPassword ? <FaEyeSlash /> : <FaEye />}
									</button>
								</div>

								{password && !isValidPassword() && (
									<p className="mt-1 text-sm text-red-500">
										Password must contain at least 8 characters, one uppercase
										letter, one lowercase letter, one number, and one special
										character.
									</p>
								)}
							</div>
						</>
					)}
					<div className="flex flex-row items-center justify-between mb-3 text-base font-medium">
						<div className="flex items-center mr-4">
							<input type="checkbox" className="mr-2" />
							<span className="text-sm">Remember Me</span>
						</div>
						<div className="flex items-center cursor-pointer">
							<IoMdContact className="mr-1" size={17} />
							<span className="text-sm text-[#EF4F5F]">Forgot Password?</span>
						</div>
					</div>
					<span className="flex justify-end w-full mb-0 ml-1 text-sm text-gray-600">
						New to Apna Food?{" "}
						<span
							className="ml-1 text-red-500 cursor-pointer"
							onClick={() => createAccountHandler()}
						>
							Create Account
						</span>
					</span>
					<div className="flex items-center justify-between mt-3">
						<button
							type="submit"
							className="bg-gradient-to-r from-green-500 to-green-400 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none transform hover:-translate-y-0.5 transition-all"
						>
							{isLoading ? (
								<p>Loading...</p>
							) : (
								<>{isPhoneLogin ? "Verify" : "Login In"} </>
							)}
						</button>
						<button
							type="button"
							className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none transform hover:-translate-y-0.5 transition-all"
							onClick={() => setIsPhoneLogin(!isPhoneLogin)}
						>
							{isPhoneLogin ? "Sign In with Email" : "Login with Phone"}
						</button>
					</div>
				</form>
				{error && <p>Error: {error}</p>}
			</div>
		</>
	);
}
export default LoginForm;
