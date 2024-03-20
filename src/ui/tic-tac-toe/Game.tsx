"use client";

import { useState } from "react";
import { Flex } from "../../../styled-system/jsx";
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
	const jumpTo = (step: number) => {};

	const moves = history.map((squares, move) => {
		let description;
		if (move > 0) {
			description = "Go to move #" + move;
		} else {
			description = "Go to game start";
		}
		return (
			<li key={move}>
				<button onClick={() => jumpTo(move)}>{description}</button>
			</li>
		);
	});

	return (
		<Flex gap={5}>
			<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
			<div>
				<ol>{moves}</ol>
			</div>
		</Flex>
	);
};

export default Game;
