import React from "react";
import { BiErrorCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function NotFound() {
	const navigate = useNavigate();

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-50">
			<div className="flex flex-col items-center space-y-4 text-center">
				<BiErrorCircle className="w-16 h-16 text-gray-400" />
				<h1 className="font-medium text-gray-700 text-9xl">404</h1>

				<h3 className="text-2xl font-medium text-gray-700">Page not found</h3>

				<p className="text-gray-600">
					The page you're looking for does not seem to exist.
				</p>

				<button
					className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
					onClick={() => navigate(-1)}
				>
					Go Back
				</button>
			</div>
		</div>
	);
}

export default NotFound;
