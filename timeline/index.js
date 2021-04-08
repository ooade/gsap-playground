const tl = new TimelineLite();

tl.add('start');
tl.staggerTo('.bar', 2, {
  backgroundColor: 'orange',
  y: 100,
  delay: 0.5,
  ease: Elastic.easeOut
}, 0.1);

tl.staggerTo('.bar', 2, {
  backgroundColor: 'turquoise',
  rotation: 90,
  rotationX: 250,
  scale: 0.5,
  ease: Elastic.easeOut
}, 0.05, 'start+=1');