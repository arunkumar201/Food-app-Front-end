import { useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
interface SearchItem {
	id: number;
	name: string;
}

interface SearchBarProps {
	items?: SearchItem[];
}

export const Search: React.FC<SearchBarProps> = ({ items = [] }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);
	const filteredItems = items.filter((item) =>
		item.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const handleFocus = () => {
		setIsOpen(true);
	};

	const handleBlur = () => {
		setTimeout(() => {
			if (!inputRef.current?.contains(document.activeElement)) {
				setIsOpen(false);
			}
		}, 0);
	};

	return (
		<div className="relative" ref={inputRef}>
			<div className="flex items-center">
				<div className="relative">
					<span className="absolute inset-y-0 left-0 flex items-center pl-3">
						<FaSearch className="w-5 h-5 text-gray-400" />
					</span>
					<input
						type="text"
						className="w-full py-2 pl-10 pr-4 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
						placeholder="Search"
						onFocus={handleFocus}
						onBlur={handleBlur}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>
				<button
					type="button"
					className="p-2 ml-2 text-gray-400 bg-gray-100 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
					onClick={() => setIsOpen(!isOpen)}
				>
					<AiOutlineDown
						className={`${isOpen ? "transform rotate-180" : ""} h-5 w-5`}
					/>
				</button>
			</div>
			{isOpen && (
				<div className="absolute left-0 z-10 w-full mt-1 overflow-y-auto bg-white rounded-md shadow-lg top-full max-h-80">
					{filteredItems.map((item) => (
						<div
							key={item.id}
							className="px-4 py-2 cursor-pointer hover:bg-gray-100"
							onClick={() => console.log(`Selected item: ${item.name}`)}
						>
							{item.name}
						</div>
					))}
				</div>
			)}
		</div>
	);
};
