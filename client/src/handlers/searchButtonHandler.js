/* eslint-disable filenames/match-regex */
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

  // add filter options for title author language ISBN (, city,  etc)

  let filter = {};

  if (userInput.length > 0) {
    filter = createFilter(userInput);
  }

  state.searchFilter = filter;

  navigateToBooksPageWithFilter();
};
