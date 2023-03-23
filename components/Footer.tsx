import {
	IconBrandDiscordFilled,
	IconBrandGithubFilled,
	IconBrandTwitterFilled,
} from "@tabler/icons-react";
import React from "react";

const Footer = () => {
	return (
		<footer className="p-4 w-full">
			<div className="flex justify-between items-center">
				<div className="text-sm text-gray-400 font-bold">
					&#169; JoinTheWaitlist, 2023-Infinity
				</div>

				<div className="flex space-x-4">
					<a
						href="https://github.com/Songkeys/waitlist"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
					>
						<IconBrandGithubFilled size="1.5em" />
					</a>
					<a
						href="https://twitter.com/jointhewaitlist"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
					>
						<IconBrandTwitterFilled size="1.5em" />
					</a>
					<a
						href="https://youtu.be/dQw4w9WgXcQ"
						target="_blank"
						rel="noopener noreferrer"
						className="text-indigo-500 hover:text-indigo-800 transition-colors duration-200"
					>
						<IconBrandDiscordFilled size="1.5em" />
					</a>
				</div>
			</div>

			<div className="h-[150px] lg:hidden"></div>
		</footer>
	);
};

export default Footer;
