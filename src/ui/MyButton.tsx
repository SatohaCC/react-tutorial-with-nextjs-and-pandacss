"use client";

import { cva } from "../../styled-system/css";

const button = cva({
	base: {
		display: "flex",
	},
	variants: {
		visual: {
			solid: { bg: "red.200", color: "white" },
			outline: { borderWidth: "1px", borderColor: "red.200" },
		},
		size: {
			sm: { padding: "4", fontSize: "12px" },
			lg: { padding: "8", fontSize: "24px" },
		},
	},
});

const MyButton = () => {
	const handleClick = () => {
		alert("You clicked me!");
	};
	return (
		<button
			className={button({ visual: "solid", size: "sm" })}
			onClick={handleClick}
		>
			I&apos;m a button
		</button>
	);
};

export default MyButton;
