"use client";

import { squareStyle } from "./libs";

type Props = {
	value: string | null;
	onSquareClick: () => void;
};

const Square = ({ value, onSquareClick }: Props) => {
	return (
		<button className={squareStyle()} onClick={onSquareClick}>
			{value}
		</button>
	);
};

export default Square;
