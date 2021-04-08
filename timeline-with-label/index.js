const tl = new TimelineLite();
const box = document.querySelectorAll(".bar");
const otherBox = document.querySelectorAll(".other-bar");

tl.staggerFrom(
	box,
	1,
	{
		y: -250,
		ease: Bounce.easeOut,
	},
	0.05
);

tl.add("rotate");
tl.staggerFrom(
	box,
	2,
	{
		rotation: 90,
		ease: Bounce.easeIn,
	},
	0.05
).staggerFrom(
	box,
	1,
	{
		rotation: 180,
		ease: Bounce.easeOut,
	},
	0.05,
	"rotate+=1.75"
);

tl.from(
	otherBox,
	2,
	{
		rotation: 90,
		ease: Bounce.easeIn,
	},
	"rotate"
).from(
	otherBox,
	1,
	{
		rotation: 180,
		ease: Bounce.easeOut,
	},
	"rotate+=1.75"
);
