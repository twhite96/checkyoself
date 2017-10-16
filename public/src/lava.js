function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var tl = new TimelineMax();

for (var i = 0; i < 5; i++) {
  var t = TweenMax.to(
    document.querySelector('#blob' + i),
    randomBetween(14, 50),
    {
      y: 260,
      repeat: -1,
      repeatDelay: randomBetween(1, 3),
      yoyo: true,
      ease: Linear.easeNone
    }
  );

  tl.add(t, (i + 1) / 0.6);
}

tl.seek(100);
