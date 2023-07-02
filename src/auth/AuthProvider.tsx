import React, { createContext } from "react";
import { auth } from "./firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export interface User {
	displayName: string | null;
	email: string | null;
	photoURL: string | null;
	emailVerified: boolean;
}
export interface UserContextType {
	user: User | null;
}
export const UserContext = createContext<UserContextType>({ user: null });

const UserProvider = (props: { children: React.ReactNode }) => {
	const [user] = useAuthState(auth);
	return (
		<UserContext.Provider value={{user}}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserProvider;
