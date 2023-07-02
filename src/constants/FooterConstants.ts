export type NavLinkTypes = {
	href: string;
	key: string;
	text: string;
};

export const NavLinks: NavLinkTypes[] = [
	{ href: "/", key: "Inspiration", text: "Inspiration" },
	{ href: "/", key: "Find Projects", text: "Find Projects" },
	{ href: "/", key: "Learn Development", text: "Learn Development" },
	{ href: "/", key: "Career Advancement", text: "Career Advancement" },
	{ href: "/", key: "Hire Developers", text: "Hire Developers" },
];

export const categoryFilters = [
	"Frontend",
	"Backend",
	"Full-Stack",
	"Mobile",
	"UI/UX",
	"Game Dev",
	"DevOps",
	"Data Science",
	"Machine Learning",
	"Cybersecurity",
	"Blockchain",
	"E-commerce",
	"Chatbots",
];

// export const footerLinks = [
// 	{
// 		title: "For developers",
// 		links: [
// 			"Go Pro!",
// 			"Explore development work",
// 			"Development blog",
// 			"Code podcast",
// 			"Open-source projects",
// 			"Refer a Friend",
// 			"Code of conduct",
// 		],
// 	},
// 	{
// 		title: "Hire developers",
// 		links: [
// 			"Post a job opening",
// 			"Post a freelance project",
// 			"Search for developers",
// 		],
// 	},
// 	{
// 		title: "Brands",
// 		links: ["Advertise with us"],
// 	},
// 	{
// 		title: "Company",
// 		links: [
// 			"About",
// 			"Careers",
// 			"Support",
// 			"Media kit",
// 			"Testimonials",
// 			"API",
// 			"Terms of service",
// 			"Privacy policy",
// 			"Cookie policy",
// 		],
// 	},
// 	{
// 		title: "Directories",
// 		links: [
// 			"Development jobs",
// 			"Developers for hire",
// 			"Freelance developers for hire",
// 			"Tags",
// 			"Places",
// 		],
// 	},
// 	{
// 		title: "Development assets",
// 		links: [
// 			"Code Marketplace",
// 			"GitHub Marketplace",
// 			"NPM Registry",
// 			"Packagephobia",
// 		],
// 	},
// 	{
// 		title: "Development Resources",
// 		links: [
// 			"Freelancing",
// 			"Development Hiring",
// 			"Development Portfolio",
// 			"Development Education",
// 			"Creative Process",
// 			"Development Industry Trends",
// 		],
// 	},
// ];

export const footerLinks = [
	{
		title: "For foodies",
		links: [
			"Discover restaurants",
			"Order food online",
			"Read reviews",
			"Get the app",
		],
	},
	{
		title: "For restaurants",
		links: [
			"Partner with us",
			"List your restaurant",
			"Business blog",
			"Restaurant app",
		],
	},
	{
		title: "For delivery partners",
		links: [
			"Join Apna Food as delivery partner",
			"Delivery partner app",
			"Delivery partner blog",
			"Apna Food Pickup",
		],
	},
	{
		title: "Company",
		links: ["About Apna Food", "Careers", "Apna Food Blog", "Press"],
	},
	{
		title: "For investors",
		links: [
			"Investor relations",
			"Corporate governance",
			"Financial information",
			"Contact us",
		],
	},
	{
		title: "Legal",
		links: ["Terms and Conditions", "Privacy policy", "Cookie policy"],
	},
	{
		title: "Help",
		links: ["Contact us", "FAQs", "Report fraud", "Apna Food Blog"],
	},
];
