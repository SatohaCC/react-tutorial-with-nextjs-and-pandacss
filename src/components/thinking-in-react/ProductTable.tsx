import { Product } from "@/app/page";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

type Props = {
	products: Product[];
};

const ProductTable = ({ products }: Props) => {
	const rows: React.ReactNode[] = [];
	let lastCategory: string | null = null;

	{
		/* productsはソート済みである必要がある */
	}

	products.forEach((product) => {
		if (product.category !== lastCategory) {
			rows.push(
				<ProductCategoryRow
					category={product.category}
					key={product.category}
				/>
			);
		}
		rows.push(<ProductRow product={product} key={product.name} />);
		lastCategory = product.category;
	});

	return (
		<table>
			<thead>
				<tr>
					<th style={{ textAlign: "left" }}>Name</th>
					<th style={{ textAlign: "left" }}>Price</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	);
};

export default ProductTable;
