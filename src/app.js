//TODO: Look at the todo list files from The Web Developer Bootcamp to see how to add event listeners to register click events.
//TODO: Watch section on DOM manipulation on The Web Developer Bootcamp
//TODO: Figure out if you need Node/Express to use the write-good package˚
/* App Starts Here */
$("#texts").val("New Text");
$("#texts").trigger("autoresize");
var writeGood = require("write-good");
var suggestions = writeGood(userInput, { weasel: false });

suggestions: [{}];
