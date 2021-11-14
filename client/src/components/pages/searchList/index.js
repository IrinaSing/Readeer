/* eslint-disable folders/match-regex */
/* eslint-disable prettier/prettier */
import classes from './index.module.css';

import {
  fetchBooks,
  fetchSpecificBook,
  performBookSearchPost,
} from '../../../data-access/api-calls/calls.js';
import { setBook } from '../../../logic/set-book.js';
import { state } from '../../../init/state.js';
import { reloadPage } from '../../layout/page.js';
import {
  bookPreview,
  bookPreviewFromGoogle,
} from '../../shared/bookPreview.js';
import { bookDetail } from './book.js';
import { searchBarComponent } from '../../shared/searchbar.js';
import { loadingComponent } from '../../shared/loading.js';
import { findBookOwners } from '../../../logic/find-bookowners.js';
import { errorAlert } from '../../shared/error-alert.js';
import { googleSearchQuery } from '../../../logic/googleQuery.js';
import { googleManager } from '../../../business-logic/googleBooksAPI';

/**
 * The Books search result page.
 *
 * @returns {HTMLDivElement} A rendered search result page.
 */
export const searchList = () => {
  const container = document.createElement('div');
  container.className = 'body';

  const searchBar = searchBarComponent();
  container.appendChild(searchBar);

  const section = document.createElement('section');
  section.classList.add('container');
  section.classList.add(classes.list);
  container.appendChild(section);

  const loadingElement = loadingComponent();
  section.appendChild(loadingElement);

  if (state.currentBookId) {
    fetchSpecificBook(state.currentBookId).then((book) => {
      state.currentBook = book;
      section.removeChild(loadingElement);

      // render card with details about the book
      const element = bookDetail(
        book.id,
        book.title,
        book.description,
        book.isbn_10,
        book.isbn_13,
        book.authors
      );

      section.appendChild(element);

      // get data about all offers for this book
      if (!state.isSignedIn) {
        const listDiv = document.getElementById('listDiv');
        const alert = errorAlert('Please log in to see offers');
        listDiv.appendChild(alert);
      } else {
        findBookOwners(book.isbn_13);
      }
    });

    // state.currentBookId = '';
    return container;
  }

  if (
    state.searchFilter !== undefined &&
    state.searchFilter !== '' &&
    Object.keys(state.searchFilter).length !== 0
  ) {
    const filter = state.searchFilter;

    performBookSearchPost(state.searchFilter).then((books) => {
      section.removeChild(loadingElement);

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
            (id) => {
              setBook(id);
              reloadPage(searchList);
            }
          );
        });

        previews.forEach((element) => {
          section.appendChild(element);
        });

        // check for need to googleBooksAPI
        if (filteredArr.length < 30) {
          const numberOfGoogleBooksNeeded = 30 - filteredArr.length;

          // convert filter to googleBooksAPI format
          const searchQuery = googleSearchQuery(filter);

          // fetch googleBooksAPI

          googleManager.searchBooksFromGoogle(searchQuery).then((books) => {
            // TODO delete this
            console.log('books from google API', books);
            // render previews

            // TODO mention filter in Presentation
            const googlePreviews = books
              .filter(
                (book) =>
                  book.volumeInfo.industryIdentifiers &&
                  book.volumeInfo.industryIdentifiers[0] &&
                  book.volumeInfo.industryIdentifiers[1] &&
                  book.volumeInfo.description &&
                  book.volumeInfo.maturityRating === 'NOT_MATURE'
              )
              .map((book) => {
                return bookPreviewFromGoogle(book.volumeInfo);
              });

            console.log('googlePreviews', googlePreviews);

            const numberOfBooksToAdd = Math.min(
              googlePreviews.length,
              numberOfGoogleBooksNeeded
            );

            for (let index = 0; index < numberOfBooksToAdd; index++) {
              section.appendChild(googlePreviews[index]);
            }
          });
        }
      } else {
        const warning = document.createElement('div');
        warning.className = 'p-3 my-5 bg-danger text-white fs-3';
        warning.innerText = `It looks like there aren't many great matches for your search.`;
        section.appendChild(warning);
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
    section.removeChild(loadingElement);

    const previews = filteredArr.map((book) => {
      return bookPreview(
        book.id,
        book.title,
        book.description,
        book.isbn_10,
        book.isbn_13,
        (id) => {
          setBook(id);
          reloadPage(searchList);
        }
      );
    });

    previews.forEach((element) => {
      section.appendChild(element);
    });
  });

  return container;
};
