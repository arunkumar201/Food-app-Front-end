import { Auth, fetchSignInMethodsForEmail } from "firebase/auth";

export const checkEmailExists = async (
	auth: Auth,
	email: string
): Promise<boolean> => {
	try {
		const signInMethods = await fetchSignInMethodsForEmail(auth, email);
		return signInMethods.length > 0;
	} catch (error) {
		console.error("Error checking email existence:", error);
		return false;
	}
};
