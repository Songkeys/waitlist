const reviews = [
	{
		name: "CelestialExplorer",
		content:
			"Just joined the #JoinTheWaitlist app and I'm loving the anticipation! Can't wait to wait some more! 🙌🔥 #WaitingGameStrong",
	},
	{
		name: "QuantumHopper",
		content:
			"Honestly, the #JoinTheWaitlist experience has been life-changing. Never knew waiting could be this exciting! 😂👏 #WorthTheWait",
	},
	{
		name: "PixelPioneer",
		content:
			"I've never been more proud to be part of a waitlist community. #JoinTheWaitlist is where it's at, folks! 🚀🎉 #WaitingInStyle",
	},
	{
		name: "WanderlustWhiz",
		content:
			"I thought I knew what it meant to wait... until I joined the #JoinTheWaitlist app. My waiting game has leveled up! 🤯⏳ #WaitlistMaster",
	},
	{
		name: "CosmicCrafter",
		content:
			"Just when I thought I'd seen it all, #JoinTheWaitlist came along and changed the game. Waiting has never been this fun! 🎢🔥 #WaitlistRevolution",
	},
	{
		name: "DigitalDaydreamer",
		content:
			"I'm telling all my friends about the #JoinTheWaitlist app. It's the only place where waiting feels like an accomplishment! 😄🏆 #WaitlistGoals",
	},
	{
		name: "WhimsicalWordsmith",
		content:
			"Finally, an app that embraces the beauty of waiting! #JoinTheWaitlist is a game-changer, and I'm here for it. 🙋‍♀️💯 #PatienceIsAVirtue",
	},
	{
		name: "StarryScribe",
		content:
			"Who knew that the simple act of joining a waitlist could be so thrilling? Loving the #JoinTheWaitlist app! 🤩🕒 #WaitlistAdventures",
	},
	{
		name: "EnigmaticEngineer",
		content:
			"I've never been happier to wait in line for something. Thanks to #JoinTheWaitlist, I'm part of an exclusive club! 🌟🎊 #WaitingElite",
	},
	{
		name: "TimelessTraveler",
		content:
			"The anticipation is real with the #JoinTheWaitlist app! I can't wait to see what's next on this incredible waiting journey. 🌈⌛️ #WaitlistWonderland",
	},
	{
		name: "DragonflyFighter",
		content:
			"I really can't wait to enter the waitlist for the waitlist. #JoinTheWaitlist is the best app ever! 🤩🤩🤩 #WaitlistWonderland",
	},
	{
		name: "MysticalMaverick",
		content:
			"I want to wait in line for the waitlist for the waitlist. So that when I get to the waitlist, I can wait for the waitlist. #JoinTheWaitlist #WaitlistWonderland 🤩",
	},
];

export default function UserReviews() {
	return (
		<div className="my-[5rem]">
			<div>
				<h2 className="text-4xl font-bold text-center mb-10">
					What people are saying about{" "}
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500">
						#JoinTheWaitlist
					</span>
				</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
				{reviews.map((review, index) => (
					<div
						key={index}
						className="bg-gradient-to-r from-gray-700 to-gray-800 shadow rounded-lg p-6 hover:scale-[1.02] transition duration-300 hover:shadow-lg hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-700"
					>
						<div className="flex items-center mb-4">
							<img
								src={`https://i.pravatar.cc/150?u=${review.name}`}
								alt={review.name}
								className="h-12 w-12 rounded-full object-cover"
							/>
							<div className="ml-4">
								<h3 className="font-semibold text-lg">{review.name}</h3>
								<p className="text-gray-500">@{review.name}</p>
							</div>
						</div>
						<p className="text-gray-200">{review.content}</p>
					</div>
				))}
			</div>
		</div>
	);
}
