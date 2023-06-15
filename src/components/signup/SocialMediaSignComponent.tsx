import { signInWithPopup } from "firebase/auth";
import { useState, useContext } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { auth, fbProvider, gProvider } from "../../auth/firebase/firebase";
import { useNavigate } from "react-router-dom";
import { UserContext, UserContextType } from "../../auth/AuthProvider";

function SocialMediaSignComponent() {
	const navigate = useNavigate();
	const { user }: UserContextType = useContext(UserContext);
	const [isLoading, setIsLoading] = useState(false);
	const handleGoogleLogin = async () => {
		setIsLoading(true);

		try {
			const result = await signInWithPopup(auth, gProvider);
			if (result.user.emailVerified) {
				navigate(`/user/${user?.displayName}`);
			}
		} catch (error) {
			console.log("catch");
		} finally {
			setIsLoading(false);
		}
	};
	const handleFacebookLogin = async () => {
		setIsLoading(true);

		try {
			console.log("try");
			await signInWithPopup(auth, fbProvider);
		} catch (error) {
			console.log("catch");

			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="flex flex-row items-baseline justify-center w-full h-full gap-3 ml-8 space-y-4 text-center">
			<div className="shadow-xl">
				<button
					className={`bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 w-[7rem] ${
						isLoading ? "opacity-50 " : "hover:bg-red-700"
					} lg:text-lg`}
					onClick={handleGoogleLogin}
					disabled={isLoading}
				>
					<FaGoogle size={20} />
					<span className="">Google</span>
				</button>
			</div>
			<div className="shadow-xl">
				<button
					className={`bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 w-[7rem]${
						isLoading ? "opacity-50 " : "hover:bg-blue-600"
					} lg:text-lg`}
					onClick={handleFacebookLogin}
					disabled={isLoading}
				>
					<FaFacebook size={20} />
					<span className="">Facebook</span>
				</button>
			</div>
		</div>
	);
}

export default SocialMediaSignComponent;
