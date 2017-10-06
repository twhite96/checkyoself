/* App Starts Here */

let spellcheck = spell.load('en');

const inputs = document
  .getElementById("texts")
  .getElementsByTagName("textarea");
const input = [];
for (let i = 0, l = inputs.length; i < l; ++i) {
  if (inputs[i].value.length) {
    input.push(inputs[i].value);
  }
}

let suggestions = writeGood(input);
const check = spell.check(input);

const gramDiv = document.createElement("div");
for (let i = 0, l = suggestions.length; i < l; ++i) {
  gramDiv.innerHTML += suggestions[i] + "<br />";
}
document.body.appendChild(gramDiv);

const spellDiv = document.createElement("div");
for (let i = 0, l = check.length; i < l; ++i) {
  spellDiv.innerHTML += check[i] + "<br />";
}
document.body.appendChild(spellDiv);

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var tl = new TimelineMax();

for (let i = 0; i < 5; i++) {
  let t = TweenMax.to(
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

/* var markdown = [];


$('#submit').click(function() {
  'use strict'
  let text = $('#texts').val();
  $('.textList').html(text +' ');
});

let newMarkdown = [];
for (let i = 0; i < markdown.length; i++) {
    newMarkdown.push('<span>' + markdown[i] + '</span>');
}
$(".texts").html(newMarkdown.join("")); */

// $("#texts").val("New Text");
// $("#texts").trigger("autoresize");
// var writeGood = require("write-good");
// var suggestions = writeGood(userInput, { weasel: false });
// suggestions: [{}];

