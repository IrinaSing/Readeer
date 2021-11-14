/**
 * Function collects and renders data about offers of a book with specific isbn.
 *
 * @param { string } - Takes book Isbn 13.
 * @param { type } - Handler that calls search by isbn and appends result into DOM.
 */
import { createFilter } from './createFilter.js';
import { state } from '../init/state.js';
import { performBookSearchPost } from '../data-access/api-calls/calls.js';
import { bookOwnersList } from '../components/pages/searchList/bookowners-list.js';
import { errorAlert } from '../components/shared/error-alert.js';
import {
  offerButtonComponent,
  unOfferButtonComponent,
} from '../components/pages/searchList/offerButton.js';

export const findBookOwners = (bookIsbn13) => {
  const query = 'isbn_13:';
  const filterInput = query + bookIsbn13;
  const filter = createFilter(filterInput);
  state.searchFilter = filter;

  const btn = document.getElementById('Offer');
  const parentElement = btn.parentElement;

  performBookSearchPost(state.searchFilter).then((books) => {
    const tableDiv = document.getElementById('listDiv');
    if (books.length > 0) {
      const table = bookOwnersList(books);
      tableDiv.appendChild(table);

      // check if the book is already offered by the user
      if (state.currentBookOwnerIds.hasOwnProperty(state.userId)) {
        parentElement.removeChild(btn);
        parentElement.appendChild(unOfferButtonComponent('Unoffer'));
      } else {
        btn.disabled = false;
      }
    } else {
      const alert = errorAlert('There are no offers related to this book');
      tableDiv.appendChild(alert);
      btn.disabled = false;
    }
  });
};
