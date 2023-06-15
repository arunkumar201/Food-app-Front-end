import React, { useState, useEffect, createContext } from "react";
import { auth } from "./firebase/firebase";

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
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
			if (firebaseUser) {
				const { displayName, email, photoURL, emailVerified } = firebaseUser;
				setUser({ displayName, email, photoURL, emailVerified });
			} else {
				setUser(null);
			}
		});

		return () => unsubscribe();
	},[])

	return (
		<UserContext.Provider value={{ user }}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserProvider;
