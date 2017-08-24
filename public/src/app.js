/* App Starts Here */

var markdown = [];


$('#submit').click(function() {
  'use strict'
  let text = $('#texts').val();
  $('.textList').html(text +' ');
});

let newMarkdown = [];
for (let i = 0; i < markdown.length; i++) {
    newMarkdown.push('<span>' + markdown[i] + '</span>');
}
$(".texts").html(newMarkdown.join(""));

// $("#texts").val("New Text");
// $("#texts").trigger("autoresize");
// var writeGood = require("write-good");
// var suggestions = writeGood(userInput, { weasel: false });
// suggestions: [{}];
