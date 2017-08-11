const body = document.body;
const input = document.querySelector("input[type=text]");
const overlay = document.querySelector(".overlay");

function showFloater() {
  body.classList.add("show-floater");
}

function closeFloater() {
  if (body.classList.contains("show-floater")) {
    body.classList.remove("show-floater");
  }
}
input.addEventListener("focusin", showFloater);
overlay.addEventListener("click", closeFloater);
// =========================
const bookmarksList = document.querySelector(".bookmarks-list");
const bookmarkForm = document.querySelector(".bookmark-form");
const bookmarkInput = bookmarkForm.querySelector("input[type=text]");
const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
const apiURL = "https://opengraph.io/api/1.0/site";
const appID = "5900185f9b8ad70f00f5f8bd";

fillList(bookmarks);

function createBookmark(e) {
  e.preventDefault();

  if (!bookmarkInput.value) {
    alert("Gotta add a link!");
    return;
  }
  const url = encodeURIComponent(bookmarkInput.value);
  // add a new bookmark to the bookmarks

  fetch(`${apiURL}/${url}?app_id=${appID}`)
    .then(response => response.json())
    .then(data => {
      const title = bookmarkInput.value;
      const bookmark = {
        title: data.hybridGraph.title,
        image: data.hybridGraph.image,
        link: data.hybridGraph.url
      };
      bookmarks.push(bookmark);
      fillList(bookmarks);
      storeBookmarks(bookmarks);
      bookmarkForm.reset();
    })
    .catch(error => {
      alert(
        'There was a problem retrieving the information. Please try again. Make sure to include the "http://"'
      );
    });
}

function fillList(bookmarks = []) {
  const bookmarksHtml = bookmarks
    .map((bookmark, i) => {
      return `
    <a href="${bookmark.link}" class="bookmark" data-id="${i}" target="_blank">
      <div class="img" style="background-image:url('${bookmark.image}')"></div>
      <div class="title">${bookmark.title}</div>
      <span class="fa fa-trash"></span>
    </a>
  `;
    })
    .join("");
  bookmarksList.innerHTML = bookmarksHtml;
}

function removeBookmark(e) {
  if (!e.target.matches(".fa-trash")) return;
  // find the index
  const index = e.target.parentNode.dataset.id;
  // remove from the bookmarks using splice
  bookmarks.splice(index, 1);
  // fill the list
  fillList(bookmarks);
  // store back to localStorage
  storeBookmarks(bookmarks);
}

function storeBookmarks(bookmarks = []) {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}
bookmarkForm.addEventListener("submit", createBookmark);
bookmarksList.addEventListener("click", removeBookmark);
