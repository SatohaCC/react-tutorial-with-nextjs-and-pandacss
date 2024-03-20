"use client";

import { useState } from "react";
import { cva } from "../../../styled-system/css";

export const button = cva({
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
			md: { padding: "2", fontSize: "12px", width: "300px" },
			lg: { padding: "8", fontSize: "24px" },
		},
	},
});

const MyButton = () => {
	const [count, setCount] = useState(0);
	const handleClick = () => {
		setCount(count + 1);
	};
	return (
		<button
			className={button({ visual: "outline", size: "sm" })}
			onClick={handleClick}
		>
			Clicked {count} times
		</button>
	);
};

export default MyButton;
