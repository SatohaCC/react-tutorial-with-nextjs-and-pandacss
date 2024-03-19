import Square from "@/ui/tic-tac-toe/Board";
import { Center } from "../../styled-system/jsx";

export default function Home() {
	return (
		<main>
			<Center p={5}>
				<Square />
			</Center>
		</main>
	);
}
