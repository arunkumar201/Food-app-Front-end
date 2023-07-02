import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../../auth/firebase/firebase";
import {  toast } from "react-toastify";
import { useContext } from "react";
import { UserContext, UserContextType } from "../../../../auth/AuthProvider";
interface MyHoverableIconProps {
	setIsHovering: (x: boolean) => void;
	isHovering: boolean;
}
interface User {
	email: string;
	uid: string;
}

export function MyHoverableIcon({
	setIsHovering,
	isHovering,
}: MyHoverableIconProps) {
	const { user } = useContext<UserContextType>(UserContext);
	console.log(user)
	const navigate = useNavigate();
	const logoutHandler = async () => {
		try {
			await auth.signOut();
			toast.success("Signed out successfully", {
				position: "top-center",
				autoClose: 3000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			setTimeout(() => {
				navigate("/login");
				window.location.reload();
			}, 2500);
		} catch (error) {
			toast.error("something went wrong");
		}
	};

	return (
		<>
			<div
				onMouseEnter={() => setIsHovering(true)}
				onMouseLeave={() => setIsHovering(false)}
				className=""
			>
				<div className="flex items-center">
					{user?.photoURL === null ? <FaUser className="mr-2 text-white w-7 h-7" /> : <img src={user?.photoURL} alt="user" className="h-10 w-10 mr-2 rounded-full"/>}
					<p className="text-base font-medium text-white capitalize">
						{user && user?.displayName}
					</p>
				</div>
				{isHovering && (
					<div className="fixed top-[2px] xl:right-[3rem] right-[-1rem]  w-56 h-20">
						<div className="bg-[#EEEEEE] p-6 absolute right-14 top-[3.5rem] w-[80%] rounded-lg shadow-xl opacity-[0.8] transition-opacity duration-300 hover:opacity-100 z-10">
							<div className="flex flex-col w-full mr-8 text-lg list-none">
								<Link
									to="/"
									className="text-[#00ADB5] hover:text-white hover:bg-[#00ADB5] py-2 px-4 transition-all duration-300"
								>
									Home
								</Link>
								<Link
									to="/search"
									className="text-[#00ADB5] hover:text-white hover:bg-[#00ADB5] py-2 px-4 transition-all duration-300"
								>
									Search
								</Link>
								<Link
									to="/offers-near-me"
									className="text-[#00ADB5] hover:text-white hover:bg-[#00ADB5] py-2 px-4 transition-all duration-300"
								>
									Offers
								</Link>
								<button
									onClick={logoutHandler}
									className="text-[#00ADB5] hover:text-white hover:bg-[#00ADB5] py-2 px-4 transition-all duration-300"
								>
									Log Out
								</button>
								<Link
									to="/support"
									className="text-[#00ADB5] hover:text-white hover:bg-[#00ADB5] py-2 px-4 transition-all duration-300"
								>
									Help
								</Link>
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
}
