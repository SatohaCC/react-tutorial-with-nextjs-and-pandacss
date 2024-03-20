import { Stack } from "../../../styled-system/jsx";

const SearchBar = () => {
	return (
		<form>
			<Stack>
				<input type="text" placeholder="Search..." />
				<label>
					<input type="checkbox" /> Only show products in stock
				</label>
			</Stack>
		</form>
	);
};

export default SearchBar;
