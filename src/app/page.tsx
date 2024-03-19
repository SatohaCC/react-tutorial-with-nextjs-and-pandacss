import AvatarView from "@/components/AvatarView";
import Counters from "@/components/Counters";
import ListItems from "@/components/ListItems";
import { Stack } from "../../styled-system/jsx";

export default function Home() {
	return (
		<main>
			<Stack>
				<Counters />
				<AvatarView />
				<ListItems />
			</Stack>
		</main>
	);
}
