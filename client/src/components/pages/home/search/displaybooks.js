export const displayBooks = (books) => {
  console.log("displayBooks");
  const booksList = document.querySelector("#book-list");
  console.log(booksList);
  // creating <li> elements
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

displayBooks();
