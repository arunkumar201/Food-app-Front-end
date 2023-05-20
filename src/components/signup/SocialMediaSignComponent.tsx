import { useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";

interface SocialMediaSignComponentProps {
	onGoogleLogin: () => void;
	onFacebookLogin: () => void;
}

function SocialMediaSignComponent({
	onGoogleLogin,
	onFacebookLogin,
}: SocialMediaSignComponentProps) {
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
		<div className="flex flex-row items-baseline justify-center w-full h-full gap-3 ml-8 space-y-4 text-center">
			<div className="shadow-xl">
				<button
					className={`bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 w-[7rem] ${
						isLoading ? "opacity-50 cursor-wait" : "hover:bg-red-700"
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
						isLoading ? "opacity-50 cursor-wait" : "hover:bg-blue-600"
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
