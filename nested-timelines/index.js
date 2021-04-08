const tl = new TimelineLite();

const sceneOne = () => {
	const tl = new TimelineLite();
	tl.to(
		".box",
		2,
		{
			backgroundColor: "orange",
			y: 100,
			delay: 0.5,
			ease: Elastic.easeOut,
		},
		0.05
	);
	return tl;
};

const sceneTwo = () => {
	const tl = new TimelineLite();

	tl.staggerTo(
		".box",
		2,
		{
			backgroundColor: "turquoise",
			rotation: 90,
			scale: 0.5,
			ease: Elastic.easeOut,
		},
		0.05,
		"+=0.55"
	);
};

const master = new TimelineLite();
master.add(sceneOne(), "sceneOneLabel");
master.add(sceneTwo());
