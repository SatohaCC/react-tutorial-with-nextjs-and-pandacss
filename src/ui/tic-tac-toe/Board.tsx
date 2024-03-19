import { Grid } from "../../../styled-system/jsx";
import Square from "./Square";

const Board = () => {
	return (
		<Grid columns={3} gap={0}>
			{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
				<Square key={i} />
			))}
		</Grid>
	);
};

export default Board;
