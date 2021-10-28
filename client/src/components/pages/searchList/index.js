import { fetchBooks, fetchSpecificBook } from "../../../data-access/api-calls/calls";
import { setBook } from "../../../handlers/set-book";
import { state } from "../../../init/state";
import { reloadPage } from "../../layout/page";
import { bookPreview } from "../../shared/bookPreview";
import { bookDetail } from "./book";

import classes from './index.module.css';

/**
 * The login page.
 *
 * @returns {HTMLDivElement} A rendered login page.
 */
export const searchList = () => {
  const container = document.createElement('section');
  container.classList.add(classes.list);

  if (state.currentBookId) {
    fetchSpecificBook(state.currentBookId)
      .then((book) => {
        const element = bookDetail(
          book.id,
          book.title,
          book.description,
          book.isbn_10,
          book.isbn_13
        );

        container.appendChild(element);
      })
    return container;
  }

  fetchBooks()
    .then((books) => {
        const previews = books.map((book) => {
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
          container.appendChild(element);
        });
    });

  return container;
};
