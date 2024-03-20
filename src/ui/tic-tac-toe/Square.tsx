"use client";

import { cva } from "../../../styled-system/css";

const square = cva({
	base: {
		bg: "fff",
		border: "1px solid #999",
		fontSize: "24px",
		float: "left",
		fontWeight: "bold",
		lineHeight: "50px",
		height: "50px",
		marginRight: "-1px",
		marginTop: "-1px",
		padding: "0",
		textAlign: "center",
		width: "50px",
	},
});

type Props = {
	value: string | null;
	onSquareClick: () => void;
};

const Square = ({ value, onSquareClick }: Props) => {
	return (
		<button className={square()} onClick={onSquareClick}>
			{value}
		</button>
	);
};

export default Square;
