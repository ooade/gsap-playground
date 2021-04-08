TweenMax.staggerTo('.box', 2, {
  backgroundColor: 'orange',
  y: 100,
  ease: Elastic.easeOut
}, 0.1);

TweenMax.staggerTo('.box', 2, {
  backgroundColor: 'turquoise',
  rotation: 90,
  scale: 0.5,
  delay: 1,
  ease: Elastic.easeOut
}, 0.05);