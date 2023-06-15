import {
	createUserWithEmailAndPassword,
	getAuth,
	updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../../auth/firebase/firebase";
import { toast } from "react-toastify";

interface SignUpValues {
	displayName: string;
	email: string;
	password: string;
	confirmPassword: string;
}

export function useSignUp() {
	const [signUpValues, setSignUpValues] = useState<SignUpValues>({
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setSignUpValues((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSignUp = async () => {
		setIsLoading(true);
		setError(null);
		try {
			await createUserWithEmailAndPassword(
				auth,
				signUpValues.email,
				signUpValues.password
			);
			const userAuth = getAuth();
			const user = userAuth.currentUser;

			if (user) {
				await updateProfile(user, {
					displayName: signUpValues.displayName,
				});
			}			
		} catch (error) {
			if (typeof error === "string") {
				setError(error);
			} else if (error instanceof Error) {
				setError(error.message);
			} else {
				setError("An unknown error occurred.");
			}
		}
		setSignUpValues({displayName: "",
		email: "",
		password: "",
		confirmPassword: "",})
		setIsLoading(false);
	};

	return {
		signUpValues,
		handleInputChange,
		handleSignUp,
		error,
		isLoading,
		setSignUpValues,
	};
}
