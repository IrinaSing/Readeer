// import { displayBooks } from "../components/pages/home/search/displaybooks.js";
// import { mySearch } from "../components/pages/home/search/loadbooks.js";
import { state } from '../init/state.js';
import {
  navigateToBooksPage,
  navigateToBooksPageWithFilter,
} from './navigateToBooksPage.js';

// adding event listener on search button
export const searchButtonHandler = (event) => {
  event.preventDefault();
  event.stopPropagation();

  const userInput = event.target[0].value;

  // TODO add filter options for author, ISBN, city, title etc
  console.log(userInput);

  let filter = {};
  if (userInput.length > 0) {
    filter.text = userInput;
  }

  state.searchFilter = filter;
  // const filter = {};

  // redirect to Books-Page
  // navigateToBooksPage(event);
  navigateToBooksPageWithFilter();
};
