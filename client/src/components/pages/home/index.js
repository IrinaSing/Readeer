// import { search } from "./search/searchbar.js";
import { search } from "./searchbar.js";
// import { displayBooks } from "./search/displaybooks.js";
// import { loadBooks } from "./search/loadbooks.js";
// import "./search/buttonhandler.js";

/**
 * The home page.
 *
 * @returns {HTMLDivElement} A rendered home page.
 */
export const home = () => {
  const container = document.createElement("div");
  container.className = "body";

  container.appendChild(document.createTextNode("Welcome to HomePage!"));

  container.appendChild(document.createElement("br"));

  container.appendChild(search());

  // displayBooks();

  // loadBooks();

  return container;
};
