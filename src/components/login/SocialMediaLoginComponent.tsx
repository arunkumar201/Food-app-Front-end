import { useContext, useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { auth, fbProvider, gProvider } from "../../auth/firebase/firebase";
import { useNavigate } from "react-router-dom";
import { UserContext, UserContextType } from "../../auth/AuthProvider";
import { signInWithPopup } from "firebase/auth";
function SocialMediaLoginComponent() {
	const navigate = useNavigate();
	const { user }: UserContextType = useContext(UserContext);
	const [isLoading, setIsLoading] = useState(false);
	const handleGoogleLogin = async () => {
		setIsLoading(true);

		try {
			const result = await signInWithPopup(auth, gProvider);
			if (result.user.emailVerified) {
				navigate(`/user/${result?.user.displayName}`);
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
			await signInWithPopup(auth, fbProvider);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="flex flex-row items-baseline justify-start w-full h-full gap-3 ml-6 space-y-4 text-start">
			<div className="shadow-xl">
				<button
					className={`bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2  hover:bg-red-700
					 lg:text-lg`}
					onClick={handleGoogleLogin}
					disabled={isLoading}
				>
					<FaGoogle size={23} />
					<span className="hidden lg:block">Login with Google</span>
					<span className="lg:hidden">Google</span>
				</button>
			</div>
			<div className="shadow-xl">
				<button
					className={`bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 
						"hover:bg-blue-600"
					 lg:text-lg`}
					onClick={handleFacebookLogin}
					disabled={isLoading}
				>
					<FaFacebook size={23} />
					<span className="hidden lg:block">Login with Facebook</span>
					<span className="lg:hidden">Facebook</span>
				</button>
			</div>
		</div>
	);
}

export default SocialMediaLoginComponent;
