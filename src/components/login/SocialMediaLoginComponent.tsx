import { useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";

interface SocialMediaLoginComponentProps {
	onGoogleLogin: () => void;
	onFacebookLogin: () => void;
}

function SocialMediaLoginComponent({
	onGoogleLogin,
	onFacebookLogin,
}: SocialMediaLoginComponentProps) {
	const [isLoading, setIsLoading] = useState(false);

	const handleGoogleLogin = () => {
		setIsLoading(true);
		onGoogleLogin();
	};

	const handleFacebookLogin = () => {
		setIsLoading(true);
		onFacebookLogin();
	};

	return (
		<div className="flex flex-row items-baseline justify-start w-full h-full gap-3 ml-6 space-y-4 text-start">
			<div className="shadow-xl">
				<button
					className={`bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 ${
						isLoading ? "opacity-50 cursor-wait" : "hover:bg-red-700"
					} lg:text-lg`}
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
					className={`bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 ${
						isLoading ? "opacity-50 cursor-wait" : "hover:bg-blue-600"
					} lg:text-lg`}
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
