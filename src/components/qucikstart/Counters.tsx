"use client";

import MyButton from "@/ui/quickstart/MyButton";
import MyButtonLiftUp from "@/ui/quickstart/MyButtonLiftUp";
import { useState } from "react";
import { css } from "../../../styled-system/css";

const Counters = () => {
	const [count, setCount] = useState(0);

	function handleClick() {
		setCount(count + 1);
	}
	return (
		<div>
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
		</div>
	);
};

export default Counters;
