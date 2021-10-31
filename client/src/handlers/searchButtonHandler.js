import { state } from "../init/state.js";
import { createFilter } from "../logic/createFilter.js";
import {
  navigateToBooksPage,
  navigateToBooksPageWithFilter,
} from "./navigateToBooksPage.js";

// adding event listener on search button
export const searchButtonHandler = (event) => {
  event.preventDefault();
  event.stopPropagation();

  const userInput = event.target[0].value;

  let filter = {};

  if (userInput.length > 0) {
    filter = createFilter(userInput);
  }

  state.searchFilter = filter;

  // redirect to Books-Page
  // navigateToBooksPage(event);
  navigateToBooksPageWithFilter();
};
