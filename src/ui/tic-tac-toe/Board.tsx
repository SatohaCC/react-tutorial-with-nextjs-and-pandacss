"use client";

import { useState } from "react";
import { Grid } from "../../../styled-system/jsx";
import Square from "./Square";
type Squares = string | null;

const Board = () => {
	const [xIsNext, setXIsNext] = useState(true);
	const [squares, setSquares] = useState<Squares[]>(Array(9).fill(null));

	const handleClick = (i: number) => {
		if (squares[i] || calculateWinner(squares)) return;
		const nextSquares = squares.slice();
		if (xIsNext) {
			nextSquares[i] = "X";
		} else {
			nextSquares[i] = "O";
		}
		setSquares(nextSquares);
		setXIsNext(!xIsNext);
	};

	const winner = calculateWinner(squares);
	let status;
	if (winner) {
		status = "Winner: " + winner;
	} else {
		status = "Next player: " + (xIsNext ? "X" : "O");
	}

	return (
		<div>
			<div>{status}</div>

			<Grid columns={3} gap={0}>
				{[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
					<Square
						key={i}
						value={squares[i]}
						onSquareClick={() => handleClick(i)}
					/>
				))}
			</Grid>
		</div>
	);
};

export default Board;

const calculateWinner = (squares: Squares[]) => {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
};
