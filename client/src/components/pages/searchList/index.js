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
import { bookDetail } from './book';
import { searchBarComponent } from '../../shared/searchbar';

/**
 * The Books search result page.
 *
 * @returns {HTMLDivElement} A rendered search result page.
 */
export const searchList = () => {
  const container = document.createElement('section');
  container.classList.add(classes.list);

  const searchBar = searchBarComponent();
  container.appendChild(searchBar);

  if (state.currentBookId) {
    fetchSpecificBook(state.currentBookId).then((book) => {
      const element = bookDetail(
        book.id,
        book.title,
        book.description,
        book.isbn_10,
        book.isbn_13,
        book.authors,
        book.thumbnail
      );

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
      if (books.length > 0) {
        const previews = books.map((book) => {
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
    const previews = books.map((book) => {
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
