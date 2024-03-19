import { cva } from "../../../styled-system/css";
import { Grid } from "../../../styled-system/jsx";

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

const Square = () => {
	return (
		<Grid columns={3} gap={0}>
			<button className={square()}>X</button>
			<button className={square()}>X</button>
			<button className={square()}>X</button>
			<button className={square()}>X</button>
			<button className={square()}>X</button>
			<button className={square()}>X</button>
			<button className={square()}>X</button>
			<button className={square()}>X</button>
			<button className={square()}>X</button>
		</Grid>
	);
};

export default Square;
