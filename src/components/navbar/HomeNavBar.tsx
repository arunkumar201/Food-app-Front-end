import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FiLogIn, FiUserPlus, FiPlusCircle } from "react-icons/fi";
import logo from "./../../assets/images/foods/logo.png";
import "./HomeNavBar.css";
import SignUpModal from "../signup/SignupModal";

export default function HomeNavBar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isOpenModal, setIsModalOpen] = useState<boolean>(false);
	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	function signUpModalHandler(): void {
		setIsModalOpen(true);
	}
	const handleSignupToggle = () => {
		setIsModalOpen(true);
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<>
			<nav className="fixed flex flex-row items-center justify-between w-full px-6 py-4 mb-2">
				<div className="flex items-center">
					<NavLink to="/" className="text-2xl font-bold text-gray-800">
						<img
							src={logo}
							alt="logo"
							className="w-10 h-10 border-2 border-gray-300 rounded-full shadow-lg"
						/>
					</NavLink>
				</div>
				<div className="flex items-center space-x-4 md:hidden">
					<button
						className="text-2xl focus:outline-none"
						onClick={handleMenuToggle}
					>
						{isMenuOpen ? (
							<HiOutlineX className="nav-icon" size={25} />
						) : (
							<HiOutlineMenu className="nav-icon" size={25} />
						)}
					</button>
				</div>
				<div className="hidden max-md:text-xs md:flex md:items-center md:space-x-4">
					<div className="flex flex-row w-full gap-2 ml-4 md:relative md:left-[1rem] cursor-pointer">
						<NavLink
							to="/login"
							className="text-[#393E46] bg-[#EEEEEE] nav-link active-nav-link"
						>
							<FiLogIn className="nav-icon" />
							Log in
						</NavLink>
						<span
							onClick={signUpModalHandler}
							className=" text-[#393E46] bg-[#EEEEEE] nav-link active-nav-link"
						>
							<FiUserPlus className="nav-icon" />
							Sign up
						</span>
						<NavLink
							to="/new-restaurant"
							className="text-[#393E46] bg-[#EEEEEE] nav-link active-nav-link"
						>
							<FiPlusCircle className="nav-icon" />
							Add Restaurant
						</NavLink>
					</div>
				</div>
				{isMenuOpen && (
					<div className="absolute right-0 justify-end w-[45%] py-2 m-4 mt-8 text-center text-sm bg-white rounded shadow-md top-6 md:hidden">
						<div className="flex flex-col w-full cursor-pointer">
							<NavLink
								to="/login"
								className="flex px-4 py-2 hover:bg-gray-100 "
								onClick={handleMenuToggle}
							>
								<FiLogIn className="nav-icon" />
								<span className="ml-2">Log in</span>
							</NavLink>
							<span
								className="flex px-4 py-2 hover:bg-gray-100"
								onClick={handleSignupToggle}
							>
								<FiUserPlus className="nav-icon" />
								<span className="ml-2">Sign up</span>
							</span>
							<NavLink
								to="/new-restaurant"
								className="flex w-full px-4 py-2 text-left hover:bg-gray-100"
								onClick={handleMenuToggle}
							>
								<FiPlusCircle className="nav-icon" />
								<span className="ml-2">Add Restaurant</span>
							</NavLink>
						</div>
					</div>
				)}
			</nav>
			<SignUpModal
				closeModal={() => setIsModalOpen(false)}
				showModal={isOpenModal}
				
			/>
		</>
	);
}
