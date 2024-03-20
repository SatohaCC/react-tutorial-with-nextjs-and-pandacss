"use client";

import { useState } from "react";
import { Grid } from "../../../styled-system/jsx";
import Square from "./Square";

const Board = () => {
	const [xIsNext, setXIsNext] = useState(true);
	const [squares, setSquares] = useState(Array(9).fill(null));

	const handleClick = (i: number) => {
		if (squares[i]) return;
		const nextSquares = squares.slice();
		if (xIsNext) {
			nextSquares[i] = "X";
		} else {
			nextSquares[i] = "O";
		}
		setSquares(nextSquares);
		setXIsNext(!xIsNext);
	};

	return (
		<Grid columns={3} gap={0}>
			{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
				<Square
					key={i}
					value={squares[i]}
					onSquareClick={() => handleClick(i)}
				/>
			))}
		</Grid>
	);
};

export default Board;
