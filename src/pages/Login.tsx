import { ToastContainer } from "react-toastify";
import LoginForm from "../components/login/LoginForm";
import SocialMediaLoginComponent from "../components/login/SocialMediaLoginComponent";
import logo from "./../assets/images/login/food-icon.png";
const Login = () => {
	const handleGoogleLogin = async () => {
		setIsLoading(true);
		try {
			await auth.signInWithPopup(googleAuthProvider);
			onGoogleLogin();
		} catch (error) {
			console.log("Error signing in with Google:", error);
		}
		setIsLoading(false);
	};

	return (
		<>
			{/* main Login Div */}
			<div className="flex w-full h-[100vh] bg-[#A5C9CA]/80  md:h-full">
				{/* Left Main Login Page */}
				<div className="flex flex-col w-1/2 h-fit max-sm:flex max-sm:justify-center max-sm:items-center max-sm:w-full max-sm:flex-col">
					<div className="flex items-center justify-start pb-2 ml-4">
						<div className="flex items-center gap-2 mt-16 ml-2 mr-8">
							<img
								className="w-8 h-8 rounded-2xl lg:w-15"
								src={logo}
								alt="logo"
							/>
							<span className="text-lg font-bold text-gray-700 max-sm:text-center">
								Apna Food
							</span>
						</div>
					</div>
					<div className="flex flex-col items-center justify-start w-full h-full px-5 py-0 text-start">
						<h1 className="w-full ml-2 text-2xl font-bold text-gray-700 text-start max-sm:text-center">
							Welcome Back!
						</h1>
						<p className="w-full mt-2 ml-2 text-lg font-semibold text-gray-600 text-start max-sm:text-center">
							Please Login,Food just clicks away.
						</p>
					</div>
					{/* Social Media Login buttons and Break line */}
					<div>
						<SocialMediaLoginComponent />
					</div>
					{/* break line to login  */}
					<div className="flex items-center justify-center px-5 my-4">
						<hr className="flex-grow border-gray-300 border-1" />
						<span className="mx-4 text-gray-500 uppercase">Or log in with</span>
						<div className="flex items-center"></div>
						<hr className="flex-grow border-gray-300 border-1" />
					</div>

					{/* Login Form */}
					<div className="flex items-center justify-center w-full h-full">
						<LoginForm />
					</div>
				</div>
				<div className="hidden w-1/2 h-full overflow-hidden rounded md:block">
					<img
						src="https://source.unsplash.com/random/800x1200/?food"
						alt="Food img"
						style={{
							borderLeft: "2px solid",
							borderImage: "linear-gradient(to bottom, #743ad5 0%, purple 1",
							borderBottom: "2px solid #743ad5",
							borderRadius: "0 0 0px 0px",
						}}
						className="object-cover object-top w-full h-[100vh] rounded-lg"
					/>
				</div>
			</div>
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
export default Login;
