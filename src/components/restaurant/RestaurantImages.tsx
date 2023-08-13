// import React, { useState } from "react";
// import { FilePond, registerPlugin } from "react-filepond";
// import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
// import FilePondPluginImagePreview from "filepond-plugin-image-preview";

// import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
// import "filepond/dist/filepond.min.css";
// registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// import {
// 	makeDeleteRequest,
// 	makeUploadRequest,
// } from "../../cloudinary/cloudinaryHelper.js";
// import { FiSave } from "react-icons/fi";
// import { useAppDispatch, useAppSelector } from "../../store/ReduxHooks.js";
// import { setImages } from "../features/Restaurant/addRestaurantSlice.js";

// const RestaurantImages: React.FC = () => {
// 	const [bannerImage, setBannerImage] = useState<string | null>(null);
// 	const [menuImages, setMenuImages] = useState<string[]>([]);
// 	const [foodImages, setFoodImages] = useState<string[]>([]);
// 	const [files, setFiles] = useState<any[]>([]);
// 	const dispatch = useAppDispatch();
// 	const images = useAppSelector((state) => state.restaurantForm.Images);

// 	console.debug("🚀 ~ file: RestaurantImages.tsx:26 ~ images:", images);

// 	const restaurantImagesHandler = () => {
// 		dispatch(
// 			setImages({
// 				ProfileImages: files,
// 				FoodImages: foodImages,
// 				MenuImages: menuImages,
// 				BannerImages: bannerImage ,
// 			})
// 		);
// 	};

// 	const revert = (token: any, successCallback: any, errorCallback: any) => {
// 		makeDeleteRequest({
// 			token,
// 			successCallback,
// 			errorCallback,
// 		});
// 	};

// 	const process = (
// 		fieldName: any,
// 		file: any,
// 		metadata: any,
// 		load: any,
// 		error: any,
// 		progress: any,
// 		abort: () => void,
// 		transfer: any,
// 		options: any
// 	) => {
// 		const fileType = options?.chunkServer?.headers?.fileType;

// 		console.debug("🚀 ~ file: RestaurantImages.tsx:60 ~ options:", options);

// 		console.debug("🚀 ~ file: RestaurantImages.tsx:60 ~ fileType:", fileType);

// 		makeUploadRequest({
// 			file,
// 			fieldName,
// 			successCallback: (imageUrl: string) => {

// 				console.debug("🚀 ~ file: RestaurantImages.tsx:70 ~ imageUrl:", imageUrl);

// 				if (fileType === "profile") {
// 					setFiles((prevFiles) => [...prevFiles, imageUrl ]);
// 				} else if (fileType === "banner") {
// 					setBannerImage((prevFiles) => [...prevFiles, imageUrl ]);
// 				} else if (fileType === "food") {
// 					setFoodImages((prevImages) => [...prevImages, imageUrl]);
// 				} else if (fileType === "menu") {
// 					setMenuImages((prevImages) => [...prevImages, imageUrl]);
// 				}
// 				load(imageUrl);
// 			},
// 			errorCallback: error,
// 			progressCallback: progress,
// 		});
// 	};

// 	return (
// 		<div className="p-8 space-y-8">
// 			<div className="space-y-4">
// 				<h3 className="text-xl font-semibold">Profile Image</h3>
// 				{/* Profile Image Section */}
// 				<div className="w-2/3 mx-auto p-2 border border-gray-300 rounded-md max-h-[20rem] min-w-[15rem] overflow-auto">
// 					<FilePond
// 						files={files}
// 						acceptedFileTypes="image/*"
// 						onupdatefiles={files}
// 						allowMultiple={true}
// 						server={{ process, revert, headers: { fileType: "profile" } }}
// 						name="file"
// 						labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
// 					/>
// 				</div>
// 			</div>

// 			{/* Banner Image Section */}
// 			<div className="space-y-4">
// 				<h3 className="text-xl font-semibold">Banner Image</h3>
// 				<div className="w-2/3 mx-auto p-2 border border-gray-300 rounded-md max-h-[20rem] min-w-[15rem] overflow-auto">
// 					<FilePond
// 						files={bannerImage ? [bannerImage] : []}
// 						acceptedFileTypes="image/*"
// 						onupdatefiles={bannerImage}
// 						server={{ process, revert, headers: { fileType: "banner" } }}
// 						name="file"
// 						labelIdle='Drag & Drop your banner image or <span class="filepond--label-action">Browse</span>'
// 					/>
// 				</div>
// 			</div>

// 			{/* Menu Images Section */}
// 			<div className="space-y-4">
// 				<h3 className="text-xl font-semibold">Menu Images</h3>
// 				<div className="w-2/3 mx-auto p-2 border border-gray-300 rounded-md max-h-[20rem] min-w-[15rem] overflow-auto">
// 					<FilePond
// 						files={menuImages}
// 						acceptedFileTypes="image/*"
// 						onupdatefiles={menuImages}
// 						allowMultiple={true}
// 						server={{ process, revert, headers: { fileType: "menu" } }}
// 						name="file"
// 						labelIdle='Drag & Drop your menu images or <span class="filepond--label-action">Browse</span>'
// 					/>
// 				</div>
// 			</div>

// 			{/* Food Images Section */}
// 			<div className="space-y-4">
// 				<h3 className="text-xl font-semibold">Food Images</h3>
// 				<div className="w-2/3 mx-auto p-2 border border-gray-300 rounded-md max-h-[20rem] min-w-[15rem] overflow-auto">
// 					<FilePond
// 						files={foodImages}
// 						acceptedFileTypes="image/*"
// 						onupdatefiles={foodImages}
// 						allowMultiple={true}
// 						server={{ process, revert, headers: { fileType: "food" } }}
// 						name="file"
// 						labelIdle='Drag & Drop your food images or <span class="filepond--label-action">Browse</span>'
// 					/>
// 				</div>
// 			</div>
// 			<button
// 				className="flex items-center px-4 py-2 text-white  bg-gray-800 hover:bg-gray-600 rounded-2xl p-2 transition-colors duration-300 text-base"
// 				onClick={restaurantImagesHandler}
// 			>
// 				Next Step
// 				<FiSave className="ml-2 mr-0 w-6 h-6" />
// 			</button>
// 		</div>
// 	);
// };

// export default RestaurantImages;

import React, { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import { FiSave } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../../store/ReduxHooks";
import { setImages } from "../features/Restaurant/addRestaurantSlice";
import {
	makeDeleteRequest,
	makeUploadRequest,
} from "../../cloudinary/cloudinaryHelper";

import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "filepond/dist/filepond.min.css";
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const RestaurantImages: React.FC = () => {
	const [bannerImage, setBannerImage] = useState<string | null>(null);

	const [menuImages, setMenuImages] = useState<string[]>([]);

	const [foodImages, setFoodImages] = useState<string[]>([]);

	const [files, setFiles] = useState<Any[]>([]);

	const dispatch = useAppDispatch();
	const images = useAppSelector((state) => state.restaurantForm.Images);

	console.debug("🚀 ~ file: RestaurantImages.tsx:26 ~ images:", images);

	const restaurantImagesHandler = () => {
		dispatch(
			setImages({
				ProfileImages: files,
				FoodImages: foodImages,
				MenuImages: menuImages,
				BannerImages: bannerImage ? [bannerImage] : [],
			})
		);
	};

	const revert = (token: any, successCallback: any, errorCallback: any) => {
		makeDeleteRequest({
			token,
			successCallback,
			errorCallback,
		});
	};

	const process = (
		fieldName: any,
		file: any,
		metadata: any,
		load: any,
		error: any,
		progress: any,
		abort: () => void,
		transfer: any,
		options: any
	) => {
		const fileType = options?.chunkServer.headers?.fileType;

		console.debug("🚀 ~ file: RestaurantImages.tsx:222 ~ fileType:", fileType);

		makeUploadRequest({
			file,
			fieldName,
			successCallback: (imageUrl: string) => {
				console.debug(
					"🚀 ~ file: RestaurantImages.tsx:70 ~ imageUrl:",
					imageUrl
				);
				if (fileType === "profile") {
					setFiles((prevFiles) => [...prevFiles, imageUrl]);
				} else if (fileType === "banner") {
					setBannerImage(imageUrl);
				} else if (fileType === "food") {
					setFoodImages((prevImages) => [...prevImages, imageUrl]);
				} else if (fileType === "menu") {
					setMenuImages((prevImages) => [...prevImages, imageUrl]);
				}
				load(imageUrl);
			},
			errorCallback: error,
			progressCallback: progress,
		});
	};

	return (
		<div className="p-8 space-y-8">
			<div className="space-y-4">
				<h3 className="text-xl font-semibold">Profile Image</h3>
				{/* Profile Image Section */}
				<div className="w-2/3 mx-auto p-2 border border-gray-300 rounded-md max-h-[20rem] min-w-[15rem] overflow-auto">
					<FilePond
						files={files}
						acceptedFileTypes="image/*"
						onupdatefiles={files}
						allowMultiple={true}
						server={{
							process,
							revert,
							headers: { fileType: "profile" },
						}}
						name="file"
						labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
					/>
				</div>
			</div>

			{/* Banner Image Section */}
			<div className="space-y-4">
				<h3 className="text-xl font-semibold">Banner Image</h3>
				<div className="w-2/3 mx-auto p-2 border border-gray-300 rounded-md max-h-[20rem] min-w-[15rem] overflow-auto">
					<FilePond
						files={bannerImage ? [bannerImage] : []}
						acceptedFileTypes="image/*"
						onupdatefiles={bannerImage}
						server={{
							process,
							revert,
							headers: { fileType: "banner" },
						}}
						name="file"
						labelIdle='Drag & Drop your banner image or <span class="filepond--label-action">Browse</span>'
					/>
				</div>
			</div>

			{/* Menu Images Section */}
			<div className="space-y-4">
				<h3 className="text-xl font-semibold">Menu Images</h3>
				<div className="w-2/3 mx-auto p-2 border border-gray-300 rounded-md max-h-[20rem] min-w-[15rem] overflow-auto">
					<FilePond
						files={menuImages}
						acceptedFileTypes="image/*"
						onupdatefiles={menuImages}
						allowMultiple={true}
						server={{
							process,
							revert,
							headers: { fileType: "menu" },
						}}
						name="file"
						labelIdle='Drag & Drop your menu images or <span class="filepond--label-action">Browse</span>'
					/>
				</div>
			</div>

			{/* Food Images Section */}
			<div className="space-y-4">
				<h3 className="text-xl font-semibold">Food Images</h3>
				<div className="w-2/3 mx-auto p-2 border border-gray-300 rounded-md max-h-[20rem] min-w-[15rem] overflow-auto">
					<FilePond
						files={foodImages}
						acceptedFileTypes="image/*"
						onupdatefiles={foodImages}
						allowMultiple={true}
						server={{
							process,
							revert,
							headers: { fileType: "food" },
						}}
						name="file"
						labelIdle='Drag & Drop your food images or <span class="filepond--label-action">Browse</span>'
					/>
				</div>
			</div>
			<button
				className="flex items-center px-4 py-2 text-white bg-gray-800 hover:bg-gray-600 rounded-2xl p-2 transition-colors duration-300 text-base"
				onClick={restaurantImagesHandler}
			>
				Next Step
				<FiSave className="ml-2 mr-0 w-6 h-6" />
			</button>
		</div>
	);
};

export default RestaurantImages;
