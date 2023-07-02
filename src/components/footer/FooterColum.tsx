import { Link } from "react-router-dom";

type FooterColumPropsTypes = {
	title: string;
	Links: Array<string>;
};
const FooterColumn = ({ title, Links }: FooterColumPropsTypes) => {
	return (
		<div className="flex-1 flex flex-col gap-3 text-sm min-w-max">
			<h4 className="font-semibold">{title}</h4>
			<ul className="flex flex-col gap-2 font-normal">
				{Links.map((link) => (
					<Link to="/" key={link}>
						{link}
					</Link>
				))}
			</ul>
		</div>
	);
};

export default FooterColumn;
