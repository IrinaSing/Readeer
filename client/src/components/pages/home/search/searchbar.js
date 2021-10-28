export const search = () => {
  const root = document.getElementById("root");

  const wrapper = document.createElement("div");
  wrapper.id = "wrapper";
  root.appendChild(wrapper);

  const searchBoxContainer = document.createElement("div");
  searchBoxContainer.id = "search-box-container";
  searchBoxContainer.className = "form";
  wrapper.appendChild(searchBoxContainer);

  const inputElement = document.createElement("input");
  inputElement.name = "search-box";
  inputElement.type = "text";
  inputElement.id = "search";
  inputElement.className = "form-control";
  inputElement.placeholder = "Search for books here...";
  searchBoxContainer.appendChild(inputElement);

  const buttonElement = document.createElement("button");
  buttonElement.id = "button";
  buttonElement.className = "btn";
  buttonElement.innerText = "Search";
  searchBoxContainer.appendChild(buttonElement);

  const ulElement = document.createElement("ul");
  ulElement.id = "book-list";
  wrapper.appendChild(ulElement);

  return wrapper;
};
