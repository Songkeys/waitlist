import { Open_Sans } from "next/font/google";
import HeroText from "@/components/HeroText";
import HeroButton from "@/components/HeroButton";
import UserReviews from "@/components/UserReviews";
import clsx from "clsx";
import Footer from "@/components/Footer";
import WaitingCounter from "@/components/WaitingCounter";

const inter = Open_Sans({
	subsets: ["cyrillic"],
	weight: ["400", "500", "600"],
});

export const metadata = {
	title: "Waitlist - Join the waitlist for the waitlist",
	description:
		"Join the waitlist for the waitlist so that you can join the waitlist",
	openGraph: {
		title: "Waitlist - Join the waitlist for the waitlist",
		description:
			"Join the waitlist for the waitlist so that you can join the waitlist",
		images: [
			{
				url: "https://join-waitlist.vercel.app/og.jpg",
				alt: "Join the waitlist for the waitlist",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Waitlist - Join the waitlist for the waitlist",
		description:
			"Join the waitlist for the waitlist so that you can join the waitlist",
		images: [
			{
				url: "https://join-waitlist.vercel.app/og.jpg",
				alt: "Join the waitlist for the waitlist",
			},
		],
	},
};

export default function Home() {
	return (
		<main
			className={clsx(
				"container mx-auto flex min-h-screen flex-col items-center justify-between p-4",
				inter.className
			)}
		>
			<div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
				<p className="fixed left-0 top-0 flex w-full justify-center bg-gradient-to-b pb-6 pt-8 backdrop-blur-2xl bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:p-4 lg:bg-zinc-800/30 uppercase text-white font-bold tracking-widest text-4xl italic">
					Waitlist
				</p>
				<div className="fixed bottom-0 left-0 flex h-36 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
					<p className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">
						© JoinTheWaitlist
					</p>
				</div>
			</div>

			<div className="w-full">
				<HeroText />
			</div>

			<div className="flex place-items-center">
				<HeroButton />
			</div>

			<div className="text-sm italic mt-10">
				Join millions of other people waiting for the waitlist to join the
				waitlist!
			</div>

			<div className="">
				<WaitingCounter />
			</div>

			<div className="w-full">
				<UserReviews />
			</div>

			<div className="flex place-items-center">
				<HeroButton />
			</div>

			<div className="text-sm italic mt-10">
				*Oh! I forgot to mention that you can{" "}
				<span className="font-bold">invite</span> your friends to join the
				waitlist for the waitlist so that you can be{" "}
				<span className="font-bold">moved up to the front</span> of line of the
				waitlist for the waitlist!
			</div>

			<div className="h-24"></div>

			<Footer />
		</main>
	);
}
