import { useState } from "react";
import { auth } from "./../../auth/firebase/firebase.ts";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BiError } from "react-icons/bi";

interface SignInValues {
	email: string;
	password: string;
}
type Error = {
	code: string;
};
export function useSignIn() {
	const [signInValues, setSignInValues] = useState<SignInValues>({
		email: "",
		password: "",
	});
	const navigate = useNavigate();
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setSignInValues((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};
	const handleSignIn = async () => {
		setIsLoading(true);
		setError(null);
		try {
			const { user } = await signInWithEmailAndPassword(
				auth,
				signInValues.email,
				signInValues.password
			);
			toast.success("Login up successful", {
				position: "top-center",
				autoClose: 3000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			setTimeout(() => {
				navigate(`/user/${user?.displayName}`);
			}, 2500);
			setSignInValues({
				email: "",
				password: "",
			});
		} catch (error) {
			if (typeof error === "string") {
				setError(error);
			} else if (error instanceof Error) {
				setError(error.message);
			} else {
				setError("An unknown error occurred.");
			}
			if (error.code === "auth/user-not-found") {
				toast.error("User Not exists!,please Signup", {
					position: "top-center",
					autoClose: 3000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					icon: <BiError />,
				});
			} else {
				toast.error("email or Password Not Match!", {
					position: "top-center",
					autoClose: 2000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}
		}
		setIsLoading(false);
	};

	return {
		signInValues,
		handleInputChange,
		handleSignIn,
		error,
		isLoading,
	};
}
