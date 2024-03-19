import MyButton from "@/ui/MyButton";
import Image from "next/image";
import { css } from "../../styled-system/css";

const user = {
	name: "Hedy Lamarr",
	imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
	imageSize: 90,
};
const products = [
	{ title: "Cabbage", isFruit: false, id: 1 },
	{ title: "Garlic", isFruit: false, id: 2 },
	{ title: "Apple", isFruit: true, id: 3 },
];

export default function Home() {
	const listItems = products.map((product) => (
		<li
			key={product.id}
			style={{
				color: product.isFruit ? "magenta" : "darkgreen",
			}}
		>
			{product.title}
		</li>
	));

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

			<ul>{listItems}</ul>
		</main>
	);
}
