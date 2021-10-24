export const search = () => {
  const searchEl = document.createElement("div");

  const searchForm = document.createElement("form");

  searchForm.className = "d-flex";
  searchEl.appendChild(searchForm);

  const inputEl = document.createElement("input");
  inputEl.id = "searchBar";
  inputEl.className = "form-control me-5";
  inputEl.type = "search";
  inputEl.placeholder = "Let's search a book";
  inputEl.ariaLabel = "Search";

  searchForm.appendChild(inputEl);

  const buttonEl = document.createElement("button");
  buttonEl.id = "searchButton";
  buttonEl.className = "btn btn-outline-success";
  buttonEl.type = "submit";
  buttonEl.innerHTML = "Search";

  searchForm.appendChild(buttonEl);

  const ulEl = document.createElement("ul");
  ulEl.id = "bookList";

  searchEl.appendChild(ulEl);

  return searchEl;
};
