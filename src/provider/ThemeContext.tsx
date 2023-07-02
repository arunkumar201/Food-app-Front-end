import React, { createContext, memo, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
	theme: Theme;
	toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
	theme: "light",
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	toggleTheme: () => {},
});

interface ThemeProviderProps {
	children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = memo(({ children }) => {
	const [theme, setTheme] = useState<Theme>(
		(localStorage.getItem("theme") as Theme) || "light"
	);
	const [isTransitioning, setIsTransitioning] = useState(false);

	useEffect(() => {
		setIsTransitioning(true);
		const timeout = setTimeout(() => setIsTransitioning(false), 20);
		return () => clearTimeout(timeout);
	}, [theme]);

	const toggleTheme = () => {
		const newTheme: Theme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<div
				className={`transition-colors duration-500 ${
					isTransitioning ? "opacity-0" : "opacity-100"
				}`}
			>
				{children}
			</div>
		</ThemeContext.Provider>
	);
});

export { ThemeProvider };

