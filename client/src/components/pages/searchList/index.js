/* eslint-disable folders/match-regex */
/* eslint-disable prettier/prettier */
import classes from './index.module.css';

import {
  fetchBooks,
  fetchSpecificBook,
  performBookSearchPost,
} from '../../../data-access/api-calls/calls.js';
import { setBook } from '../../../handlers/set-book.js';
import { state } from '../../../init/state.js';
import { reloadPage } from '../../layout/page.js';
import { bookPreview } from '../../shared/bookPreview.js';
import { bookDetail } from './book.js';
import { searchBarComponent } from '../../shared/searchbar.js';
import { loadingComponent } from '../../shared/loading.js';
import { findBookOwners } from '../../../handlers/find-bookowners.js';

/**
 * The Books search result page.
 *
 * @returns {HTMLDivElement} A rendered search result page.
 */
export const searchList = () => {
  const container = document.createElement('section');
  container.classList.add('container');
  container.classList.add(classes.list);

  const searchBar = searchBarComponent();
  container.appendChild(searchBar);

  const loadingElement = loadingComponent();
  container.appendChild(loadingElement);

  if (state.currentBookId) {
    fetchSpecificBook(state.currentBookId).then(async (book) => {
      container.removeChild(loadingElement);

      // render card with details about the book
      const element = bookDetail(
        book.id,
        book.title,
        book.description,
        book.isbn_10,
        book.isbn_13,
        book.authors,
        book.thumbnail
      );

      // TODO Should this be inside if ?
      // get data about all offers
      const owner = await findBookOwners(book.isbn_13);
      console.log(owner);

      container.appendChild(element);
    });

    state.currentBookId = '';
    return container;
  }

  if (
    state.searchFilter !== undefined &&
    state.searchFilter !== '' &&
    Object.keys(state.searchFilter).length !== 0
  ) {
    performBookSearchPost(state.searchFilter).then((books) => {
      container.removeChild(loadingElement);

      if (books.length > 0) {
        // filter array to get rid of books with the same isbn
        const uniqueValuesBooks = new Set();
        const filteredArr = books.filter((book) => {
          const isPresentInSet = uniqueValuesBooks.has(book.isbn_13);
          uniqueValuesBooks.add(book.isbn_13);
          return !isPresentInSet;
        });

        const previews = filteredArr.map((book) => {
          return bookPreview(
            book.id,
            book.title,
            book.description,
            book.isbn_10,
            book.isbn_13,
            book.thumbnail,
            (id) => {
              setBook(id);
              reloadPage(searchList);
            }
          );
        });

        previews.forEach((element) => {
          container.appendChild(element);
        });
      } else {
        const warning = document.createElement('div');
        warning.className = 'p-3 my-5 bg-danger text-white fs-3';
        warning.innerText = `It looks like there aren't many great matches for your search.`;
        container.appendChild(warning);
      }
    });
    state.searchFilter = '';

    return container;
  }

  fetchBooks().then((books) => {
    // filter array to get rid of books with the same isbn
    const uniqueValuesBooks = new Set();
    const filteredArr = books.filter((book) => {
      const isPresentInSet = uniqueValuesBooks.has(book.isbn_13);
      uniqueValuesBooks.add(book.isbn_13);
      return !isPresentInSet;
    });
    container.removeChild(loadingElement);

    const previews = filteredArr.map((book) => {
      return bookPreview(
        book.id,
        book.title,
        book.description,
        book.isbn_10,
        book.isbn_13,
        book.thumbnail,
        (id) => {
          setBook(id);
          reloadPage(searchList);
        }
      );
    });

    previews.forEach((element) => {
      container.appendChild(element);
    });
  });

  return container;
};
