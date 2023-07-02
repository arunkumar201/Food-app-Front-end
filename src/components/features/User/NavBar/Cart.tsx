import { useCallback, useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../../provider/ThemeContext";
import { HiMoon, HiSun } from "react-icons/hi";

export const Cart = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const [darkMode, setDarkMode] = useState(false);
	const handleToggle = useCallback(() => {
		if (theme === "dark") {
			setDarkMode(true);
			localStorage.setItem("theme", "light");
		} else {
			setDarkMode(false);
			localStorage.setItem("theme", "dark");
		}
		toggleTheme();
	}, [theme, toggleTheme]);
	return (
		<>
			<div className="relative mr-4 md:mr-0">
				<Link to="/cart" className="flex items-center hover:text-[#00ADB5]">
					<FaShoppingCart className="mr-1 text-white w-7 h-7" />
					<span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-[#393E46] transform translate-x-1/2 -translate-y-1/2 bg-[#EEEEEE] rounded-full">
						99
					</span>
				</Link>

				<div className="absolute flex right-[4rem] top-[-0.5rem] flex-end">
					<button
						className="relative p-1 text-center text-[#000000] dark:text-white transition-colors duration-400"
						onClick={handleToggle}
					>
						<div
							className={`transition  rounded-full   ease-in-out duration-500 absolute inset-0 bg-gray-200 ${
								darkMode ? "opacity-0" : "opacity-100"
							}`}
						/>
						<div
							className={`transition ease-in-out duration-500 absolute rounded-full inset-0 bg-gray-800 ${
								darkMode ? "opacity-0" : "opacity-100"
							}`}
						/>
						<div
							className={`relative z-10  ${
								darkMode ? "text-yellow-300" : "text-gray-100"
							}`}
						>
							{darkMode ? <HiSun size={40} /> : <HiMoon size={40} />}
						</div>
					</button>
				</div>
			</div>
		</>
	);
};
