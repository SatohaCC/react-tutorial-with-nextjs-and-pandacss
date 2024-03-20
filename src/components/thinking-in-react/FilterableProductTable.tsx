import { Product } from "@/app/page";
import { Stack } from "../../../styled-system/jsx";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

type Props = {
	products: Product[];
};

const FilterableProductTable = ({ products }: Props) => {
	return (
		<Stack>
			<SearchBar />
			<ProductTable products={products} />
		</Stack>
	);
};

export default FilterableProductTable;
