import Image from "next/image";

const user = {
	name: "Hedy Lamarr",
	imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
	imageSize: 90,
};

const AvatarView = () => {
	return (
		<div>
			<h1>{user.name}</h1>
			<Image
				className="avatar"
				src={user.imageUrl}
				alt={"Photo of " + user.name}
				width={user.imageSize}
				height={user.imageSize}
			/>
		</div>
	);
};

export default AvatarView;
