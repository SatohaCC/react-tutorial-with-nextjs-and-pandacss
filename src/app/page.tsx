import Game from "@/ui/tic-tac-toe/Game";
import { Center } from "../../styled-system/jsx";

export default function Home() {
	return (
		<main>
			<Center p={5}>
				<Game />
			</Center>
		</main>
	);
}
