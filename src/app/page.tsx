import ListItems from "@/components/qucikstart/ListItems";
import AvatarView from "@/components/qucikstart/AvatarView";
import Counters from "@/components/qucikstart/Counters";
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
