"use client";

import { useState } from "react";
import Board from "./Board";

export type Squares = string | null;

const Game = () => {
	const [xIsNext, setXIsNext] = useState(true);
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const currentSquares = history[history.length - 1];

	const handlePlay = (nextSquares: Squares[]) => {
		setHistory([...history, nextSquares]);
		setXIsNext(!xIsNext);
	};

	return (
		<div>
			<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
			<div>
				<ol>{/*TODO*/}</ol>
			</div>
		</div>
	);
};

export default Game;
