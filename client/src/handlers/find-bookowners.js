/**
 * Function collects and renders data about offers of a book with specific isbn.
 *
 * @param { string } - Takes book Isbn 13.
 * @param { type } - Handler that calls search by isbn and appends result into DOM.
 */
import { createFilter } from "../logic/createFilter.js";
import { state } from "../init/state.js";
import { performBookSearchPost } from "../data-access/api-calls/calls.js";
import { bookownersList } from "../components/pages/searchList/bookowners-list.js";
import { errorAlert } from "../components/shared/error-alert.js";

export const findBookOwners = (bookIsbn13) => {
  const query = "isbn_13:";
  const filterInput = query + bookIsbn13;
  const filter = createFilter(filterInput);
  state.searchFilter = filter;

  performBookSearchPost(state.searchFilter).then((books) => {
    const tableDiv = document.getElementById("listDiv");
    if (books.length > 0) {
      const table = bookownersList(books);
      tableDiv.appendChild(table);
    } else {
      const alert = errorAlert("There are no offers related to this book");
      tableDiv.appendChild(alert);
    }
  });
};
