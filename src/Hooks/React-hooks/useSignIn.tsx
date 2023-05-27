import { useState } from "react";
import { auth } from "./../../auth/firebase/firebase.ts";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

interface SignInValues {
	email: string;
	password: string;
}
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
			const {user}=await signInWithEmailAndPassword(
				auth,
				signInValues.email,
				signInValues.password
			);
		navigate(`/user:${user?.displayName}`);
		setSignInValues({
		email: "",
		password: "",
		})
		} catch (error) {
			if (typeof error === "string") {
				setError(error);
			} else if (error instanceof Error) {
				setError(error.message);
			} else {
				setError("An unknown error occurred.");
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
