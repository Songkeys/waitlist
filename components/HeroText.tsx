"use client";

import clsx from "clsx";
import TypeIt from "typeit-react";

const phrases = [
	'can help you master the art of waiting with just one button: "Join the Waitlist"',
	"can guide you through the ultimate waitlist experience, one click at a time",
	"can elevate your waiting game with the most sought-after waitlist to join",
	"can grant you access to the exclusive club of waiting to wait, with a simple click",
	"can prepare you for a world of anticipation by joining the waitlist for the waitlist",
	'can indulge your curiosity by providing the ultimate "Join the Waitlist" experience',
	"can show you what it means to wait with purpose, one waitlist at a time",
	"can introduce you to the thrill of waiting in line for the chance to wait again",
	"can help you embrace the simplicity of waiting with a single, powerful button",
	"can prove that the best things in life are worth waiting for... and then waiting some more",
];

function shuffle(array: string[]) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}

shuffle(phrases);

export default function HeroText() {
	return (
		<div
			className={clsx(
				"leading-[1.25]",
				"mt-[5rem] mb-[1rem] sm:mb-[2rem] md:mb-[3rem] lg:mb-[4rem] xl:mb-[5rem]",
				"text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[5rem]",
				"min-h-[14rem] sm:min-h-[18rem] md:min-h-[20rem] lg:min-h-[20rem] xl:min-h-[20rem]"
			)}
		>
			<span className="font-bold">Waitlist</span>{" "}
			<span className="text-gray-500">
				<TypeIt
					options={{
						loop: true,
						cursor: false,
						strings: phrases,
						breakLines: false,
						speed: 25,
						deleteSpeed: 0,
						nextStringDelay: [5000, 0] as any,
					}}
				/>
				<span
					className={clsx(
						"ml-2 inline-block w-[0.5rem] bg-gray-500 animate-pulse translate-y-[20%]",
						"h-[2rem] sm:h-[3rem] md:h-[4rem] lg:h-[5rem] xl:h-[5rem]"
					)}
				></span>
			</span>
		</div>
	);
}
