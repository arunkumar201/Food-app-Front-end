import { useState } from "react";
import { MyHoverableIcon } from "./MyHoverableIcon";

export const Profile = () => {
	const [isHovering, setIsHovering] = useState(false);
	return (
		<div className="relative hidden ml-3 md:block">
			<div>
				<button type="button" className="flex text-sm rounded-full">
					<MyHoverableIcon
						setIsHovering={setIsHovering}
						isHovering={isHovering}
					/>
				</button>
			</div>
		</div>
	);
};
