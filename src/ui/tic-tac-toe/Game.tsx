"use client";

import { useState } from "react";
import { Flex } from "../../../styled-system/jsx";
import { button } from "../quickstart/MyButton";
import Board from "./Board";

export type Squares = string | null;

const Game = () => {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [currentMove, setCurrentMove] = useState(0);
	const currentSquares = history[currentMove];
	const xIsNext = currentMove % 2 === 0;

	const handlePlay = (nextSquares: Squares[]) => {
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);
	};

	const jumpTo = (nextMove: number) => {
		setCurrentMove(nextMove);
	};

	const moves = history.map((squares, move) => {
		let description;
		if (move > 0) {
			description = "Go to move #" + move;
		} else {
			description = "Go to game start";
		}
		return (
			<li key={move}>
				<button
					onClick={() => jumpTo(move)}
					className={button({ visual: "outline", size: "md" })}
				>
					{description}
				</button>
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