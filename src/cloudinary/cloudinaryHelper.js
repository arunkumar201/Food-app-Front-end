const baseUrl = `https://api.cloudinary.com/v1_1/${
	import.meta.env?.VITE_APP_CLOUDINARY_CLOUD_NAME
}`;

export const makeUploadRequest = ({
	file,
	fieldName,
	progressCallback,
	successCallback,
	errorCallback,
}) => {
	const url = `${baseUrl}/image/upload`;

	const formData = new FormData();
	formData.append(fieldName, file);
	formData.append(
		"upload_preset",
		import.meta.env?.VITE_APP_CLOUDINARY_PRESET_NAME
	);

	const request = new XMLHttpRequest();
	request.open("POST", url);

	request.upload.onprogress = (e) => {
		progressCallback(e.lengthComputable, e.loaded, e.total);
	};

	request.onload = () => {
		if (request.status >= 200 && request.status < 300) {
			const response = JSON.parse(request.responseText);
			const imageUrl = response.secure_url; // Retrieve the secure URL of the uploaded image

			const { delete_token: deleteToken } = response;
			successCallback(imageUrl, deleteToken);
		} else {
			errorCallback(request.responseText);
		}
	};

	request.send(formData);

	return () => {
		console.debug(
			"🚀 ~ file: cloudinaryHelper.js:30 ~ formData:",
			request.formData
		);
		request.abort();
	};
};

export const makeDeleteRequest = ({
	token,
	successCallback,
	errorCallback,
}) => {
	const url = `${baseUrl}/delete_by_token`;

	const request = new XMLHttpRequest();
	request.open("POST", url);

	request.setRequestHeader("Content-Type", "application/json");

	request.onload = () => {
		if (request.status >= 200 && request.status < 300) {
			successCallback();
		} else {
			errorCallback(request.responseText);
		}
	};
	request.send(JSON.stringify({ token }));
};
