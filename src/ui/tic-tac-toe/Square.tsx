"use client";

import { useState } from "react";
import { cva } from "../../../styled-system/css";

const square = cva({
	base: {
		bg: "fff",
		border: "1px solid #999",
		fontSize: "24px",
		float: "left",
		fontWeight: "bold",
		lineHeight: "34px",
		height: "34px",
		marginRight: "-1px",
		marginTop: "-1px",
		padding: "0",
		textAlign: "center",
		width: "34px",
	},
});

type Props = {
	value: string;
};

const Square = () => {
	const [value, setValue] = useState<string | null>(null);
	const handleClick = () => {
		setValue("X");
	};

	return (
		<button className={square()} onClick={handleClick}>
			{value}
		</button>
	);
};

export default Square;
