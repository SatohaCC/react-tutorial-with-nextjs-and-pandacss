import { Product } from "@/app/page";

type Props = {
	product: Product;
};

const ProductRow = ({ product }: Props) => {
	const name = product.stocked ? (
		<span>{product.name}</span>
	) : (
		<span style={{ color: "red" }}>{product.name}</span>
	);

	return (
		<tr>
			<td>{name}</td>
			<td>{product.price}</td>
		</tr>
	);
};

export default ProductRow;
