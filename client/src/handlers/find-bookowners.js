/**
 * Data about book owners, book condition etc taken from books api.
 *
 * @returns {Array} Array of objects with info about book offers.
 */
import { createFilter } from "../logic/createFilter.js";
import { state } from "../init/state.js";
import { performBookSearchPost } from "../data-access/api-calls/calls.js";

export const findBookOwners = (bookIsbn13) => {
  const query = "isbn_13:";
  const filterInput = query + bookIsbn13;
  const filter = createFilter(filterInput);
  state.searchFilter = filter;

  performBookSearchPost(state.searchFilter).then((books) => {
    console.log(books);
    // const allBookOffers = books.map((book) => {});
  });
};
