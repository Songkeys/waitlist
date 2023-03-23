import "./globals.css";

export const metadata = {
	title: "Waitlist - Join the waitlist for the waitlist",
	description:
		"Join the waitlist for the waitlist so that you can join the waitlist",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
