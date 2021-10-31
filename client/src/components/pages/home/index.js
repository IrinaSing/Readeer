// import { search } from "./search/searchbar.js";
import { searchBarComponent } from "./searchbar.js";
// import { displayBooks } from "./search/displaybooks.js";
// import { loadBooks } from "./search/loadbooks.js";
export const home = () => {
  const container = document.createElement('div');
  container.className = 'body';
  container.appendChild(document.createTextNode('Welcome to HomePage!'));
  container.appendChild(document.createElement('br'));
  
  const searchBar = searchBarComponent();
  container.appendChild(searchBar);

  // displayBooks();
  // loadBooks();
  return container;
};
