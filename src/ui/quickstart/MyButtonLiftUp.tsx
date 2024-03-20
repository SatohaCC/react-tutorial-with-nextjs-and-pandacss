"use client";

import { cva } from "../../../styled-system/css";

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

type Props = {
	count: number;
	onClick: () => void;
};
const MyButtonLiftUp = ({ count, onClick }: Props) => {
	return (
		<button
			className={button({ visual: "outline", size: "sm" })}
			onClick={onClick}
		>
			Clicked {count} times
		</button>
	);
};

export default MyButtonLiftUp;
