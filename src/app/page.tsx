"use client";

import MyButton from "@/ui/MyButton";
import MyButtonLiftUp from "@/ui/MyButtonLiftUp";
import Image from "next/image";
import { useState } from "react";
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
	const [count, setCount] = useState(0);

	function handleClick() {
		setCount(count + 1);
	}

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
				Counters that update separately
			</div>
			<br />
			<MyButton />
			<MyButton />
			<br />
			<div className={css({ fontSize: "2xl", fontWeight: "bold" })}>
				Counters that update together
			</div>
			<MyButtonLiftUp count={count} onClick={handleClick} />
			<MyButtonLiftUp count={count} onClick={handleClick} />

			<br />

			<h1>{user.name}</h1>
			<Image
				className="avatar"
				src={user.imageUrl}
				alt={"Photo of " + user.name}
				width={user.imageSize}
				height={user.imageSize}
			/>
			<br />

			<ul>{listItems}</ul>
		</main>
	);
}
