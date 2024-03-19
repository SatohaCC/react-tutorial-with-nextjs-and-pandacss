import MyButton from "@/ui/MyButton";
import Image from "next/image";
import { css } from "../../styled-system/css";

const user = {
	name: "Hedy Lamarr",
	imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
	imageSize: 90,
};

export default function Home() {
	return (
		<main>
			<div className={css({ fontSize: "2xl", fontWeight: "bold" })}>
				Welcome to my app
			</div>
			<MyButton />
			<h1>{user.name}</h1>
			<Image
				className="avatar"
				src={user.imageUrl}
				alt={"Photo of " + user.name}
				width={user.imageSize}
				height={user.imageSize}
			/>
		</main>
	);
}
