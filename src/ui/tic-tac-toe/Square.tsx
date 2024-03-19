import { cva } from "../../../styled-system/css";

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

type Props = {
	value: string;
};

const Square = ({ value }: Props) => {
	return <button className={square()}>{value}</button>;
};

export default Square;
