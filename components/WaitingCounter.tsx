"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";

export default function WaitingCounter() {
	const [from, setFrom] = useState(0);
	const [to, setTo] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setFrom(to);
			// calculate number based on current time
			const date = Date.now();
			const people = Math.floor((date - 1620000000000) / 10); // 100 people per second
			const randomAddition = Math.floor(Math.random() * 100); // 0-100 people per second
			setTo(people + randomAddition);
		}, 2000);

		return () => {
			clearInterval(intervalId);
		};
	}, [to]);

	useEffect(() => {
		if (from === 0 || to === 0) {
			const date = Date.now();
			const people = Math.floor((date - 1620000000000) / 10); // 100 people per second
			const randomAddition = Math.floor(Math.random() * 100); // 0-100 people per second
			setTo(people + randomAddition);
		}
	}, [from, to]);

	return (
		<div className="my-10">
			There are currently{" "}
			<span className="font-bold font-mono">
				<Counter from={from} to={to} />
			</span>{" "}
			people have joined the waitlist to{" "}
			<span className="underline decoration-dashed group relative">
				<span className="hidden group-hover:block absolute top-[-120%] left-0 w-fit h-full bg-white text-black text-sm rounded px-2">
					for the next waitlist 🤩
				</span>
				wait to join the waitlist
			</span>
			.
		</div>
	);
}

function Counter({ from, to }: { from: number; to: number }) {
	const nodeRef = useRef(null);

	useEffect(() => {
		const node = nodeRef.current;

		const controls = animate(from, to, {
			duration: 1,
			onUpdate(value) {
				if (node) {
					// @ts-ignore
					node.textContent = parseInt(value.toFixed(0), 10).toLocaleString();
				}
			},
		});

		return () => controls.stop();
	}, [from, to]);

	return <span ref={nodeRef} />;
}
