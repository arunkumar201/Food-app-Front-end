function PolicyAgreement() {
	return (
		<div className="flex items-center mt-4 text-lg gray-600 text-">
			<input
				type="checkbox"
				className="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
			/>
			<span className="ml-2">
				I have read and agree to Apna Food's{" "}
				<a className="text-blue-600" href="#">
					Terms of Service
				</a>{" "}
				and{" "}
				<a className="text-blue-600" href="#">
					Privacy Policy
				</a>
			</span>
		</div>
	);
}

export default PolicyAgreement;
