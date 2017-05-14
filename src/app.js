// Testing for localStorage
// Wanted to use localStorage instead of a database because the data is just very small text files
// Testing code can be found here: MDN Github https://github.com/mdn/dom-examples/blob/master/web-storage/main.js

function storageAvailable(type) {
	try {
		var storage = window[type], x = "__storage_test__";
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	} catch (e) {
		return (
			e instanceof DOMException && // everything except Firefox
			(e.code === 22 || // Firefox
			e.code === 1014 || // test name field too, because code might not be present // everything except Firefox
			e.name === "QuotaExceededError" || // Firefox
				e.name === "NS_ERROR_DOM_QUOTA_REACHED") && // acknowledge QuotaExceededError only if there's something already stored
			storage.length !== 0
		);
	}
}


// Example functions to populate storage and set styles.
// Can comment out or edit
// Using so that I can see if the browser is capabale of calling localStorage on the DOM.
// Commenting out for now so that I can edit

// var htmlElem = document.querySelector('html');
// var pElem = document.querySelector('p');
// var bgcolorForm = document.getElementById('bgcolor');
// var fontForm = document.getElementById('font');

// Test for localStorage

if(!localStorage.getItem('bgcolor')) {
  populateStorage();
} else {
  setStyles();
}

// function populateStorage() {
//   localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);
//   localStorage.setItem('font', document.getElementById('font').value);
//   localStorage.setItem('image', document.getElementById('image').value);
//   setStyles();
// }
// function setStyles() {
//   var currentColor = localStorage.getItem('bgcolor');
//   var currentFont = localStorage.getItem('font');
//   document.getElementById('bgcolor').value = currentColor;
//   document.getElementById('font').value = currentFont;
//   htmlElem.style.backgroundColor = '#' + currentColor;
//   pElem.style.fontFamily = currentFont;
// }
// bgcolorForm.onchange = populateStorage;
// fontForm.onchange = populateStorage;

/* App Starts Here */
