import { footerLinks } from "../../constants/FooterConstants";
import FooterColumn from "./FooterColum";
import logo from "./../../assets/images/foods/logo.png";

const Footer = () => {
	return (
		<>
			<footer className="font-mono flex items-center justify-start flex-col paddings w-full gap-20 bg-[#0C134F]/50 p-8 text-gray-300 font-bold">
				<div className="flex flex-col gap-12  w-full ">
					<div className="flex items-start flex-col">
						<img src={logo} alt="logo" width={50} height={35} />
						<p className="flex flex-start text-sm font-medium mt-5 max-w-lg">
							Browse curated recipes inspired by home cooks, street vendors
							and celebrity chefs, showcasing everything from regional dosas and
							idli to Mughlai biryanis and tandoori dishes.
						</p>
					</div>
					<div className="flex flex-wrap gap-12 ">
						<FooterColumn
							title={footerLinks[0].title}
							Links={footerLinks[0].links}
						/>
						<div className="flex-1 flex flex-col gap-4">
							<FooterColumn
								title={footerLinks[1].title}
								Links={footerLinks[1].links}
							/>
							<FooterColumn
								title={footerLinks[2].title}
								Links={footerLinks[2].links}
							/>
						</div>

						<FooterColumn
							title={footerLinks[3].title}
							Links={footerLinks[3].links}
						/>

						<div className="flex-1 flex flex-col gap-4">
							<FooterColumn
								title={footerLinks[4].title}
								Links={footerLinks[4].links}
							/>
							<FooterColumn
								title={footerLinks[5].title}
								Links={footerLinks[5].links}
							/>
						</div>

						<FooterColumn
							title={footerLinks[6].title}
							Links={footerLinks[6].links}
						/>
					</div>
				</div>
				<div className="flex justify-between items-center max-sm:flex-col w-full text-sm font-normal">
					<p>@ 2023 Apna Food. All rights reserved</p>
					<p className="text-gray">
						<span className=" font-semibold">10,000+</span> Restaurant Partners
			
					</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;
