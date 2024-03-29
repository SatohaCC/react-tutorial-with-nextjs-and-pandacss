"use client";

import { Grid } from "../../../styled-system/jsx";
import Square from "./Square";
import { Squares, calculateWinner } from "./libs";

type Props = {
	xIsNext: boolean;
	squares: Squares[];
	onPlay: (i: Squares[]) => void;
};

const Board = ({ xIsNext, squares, onPlay }: Props) => {
	const handleClick = (i: number) => {
		if (squares[i] || calculateWinner(squares)) return;
		const nextSquares = squares.slice();
		nextSquares[i] = xIsNext ? "X" : "O";
		onPlay(nextSquares);
	};

	const winner = calculateWinner(squares);
	const status = winner
		? `Winner: ${winner}`
		: `Next player: ${xIsNext ? "X" : "O"}`;

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
