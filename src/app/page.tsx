import FilterableProductTable from "@/components/thinking-in-react/FilterableProductTable";
import { Center } from "../../styled-system/jsx";

export type Product = {
	category: string;
	price: string;
	stocked: boolean;
	name: string;
};

const PRODUCTS: Product[] = [
	{ category: "Fruits", price: "$1", stocked: true, name: "Apple" },
	{ category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
	{ category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
	{ category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
	{ category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
	{ category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export default function Home() {
	return (
		<main>
			<Center p={5}>
				<FilterableProductTable products={PRODUCTS} />
			</Center>
		</main>
	);
}
