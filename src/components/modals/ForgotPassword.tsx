import { useState } from "react";
import { toast } from "react-toastify";
import { User, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../auth/firebase/firebase";
import { IoMdClose } from "react-icons/io";
import { checkEmailExists } from "../../utils/FirebaseUtils";
interface IForgotPassword {
	isOpen: boolean;
	setIsOpen: (x: boolean) => void;
}
const ForgotPassword = ({ isOpen, setIsOpen }: IForgotPassword) => {
	const [email, setEmail] = useState("");
	const closeModal = () => {
		setIsOpen(false);
		setEmail("");
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			// Check if user exists
			const user = await getUserByEmail(email);

			if (!user) {
				toast.error("No user found with that email.");
				return;
			}

			await sendPasswordResetEmail(auth, email);

			toast.success("Reset password email sent!");
			closeModal();
		} catch (error) {
			toast.error("Failed to send reset password email.");
			console.error("Error sending reset password email:", error);
		}
	};

	const getUserByEmail = async (email: string) => {
		return await checkEmailExists(auth,email);
	};
	return (
		<>
			{isOpen && (
				<div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
					<div className="bg-[#E1F4F3] shadow-lg mt-7 rounded-xl dark:bg-gray-800 dark:border-gray-700">
						<div className="p-4 sm:p-6">
							<div className="flex justify-end">
								<button
									className="text-gray-600 hover:text-gray-800"
									onClick={closeModal}
								>
									<IoMdClose size={24} />
								</button>
							</div>
							<div className="text-center">
								<h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
									Forgot password?
								</h1>
								<p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
									Remember your password?
									<a
										className="ml-2 font-medium text-blue-600 cursor-pointer decoration-2 hover:underline"
										onClick={closeModal}
									>
										Login here
									</a>
								</p>
							</div>

							<div className="mt-5">
								<form onSubmit={handleSubmit}>
									<div className="grid gap-y-4">
										<div>
											<label
												htmlFor="email"
												className="block mb-2 ml-1 text-sm font-bold dark:text-white"
											>
												Email address
											</label>
											<div className="relative">
												<input
													type="email"
													id="email"
													name="email"
													placeholder="Your Email"
													className="block w-full px-4 py-3 text-sm border-2 border-gray-200 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
													value={email}
													onChange={(e) => setEmail(e.target.value)}
													required
												/>
											</div>
										</div>
										<button
											type="submit"
											className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white transition-all bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
										>
											Reset password
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
export default ForgotPassword;
