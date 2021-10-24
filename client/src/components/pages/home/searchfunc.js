const booksList = document.getElementById("booksList");
const searchBar = document.getElementById("searchBar");
let mySearch = [];

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();

  const filteredBooks = mySearch.filter((book) => {
    return book.title.toLowerCase().includes(searchString);
  });
  displayBooks(filteredBooks);
});

const loadBooks = async () => {
  try {
    const res = await fetch("https://readeer-app.herokuapp.com/api/books");
    mySearch = await res.json();
    displayBooks(mySearch);
  } catch (err) {
    console.error(err);
  }
};

const displayBooks = (books) => {
  const htmlString = books
    .map((book) => {
      return `
            <li class="book">
                <h2>${book.title}</h2>
            </li>
        `;
    })
    .join("");
  booksList.innerHTML = htmlString;
};

loadBooks();
