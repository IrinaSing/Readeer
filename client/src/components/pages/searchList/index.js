import { fetchBooks } from "../../../data-access/api-calls/calls";
import { bookPreview } from "../../shared/bookPreview";

import classes from './index.module.css';

/**
 * The login page.
 *
 * @returns {HTMLDivElement} A rendered login page.
 */
export const searchList = () => {
  const container = document.createElement('section');
  container.classList.add(classes.list);

  fetchBooks()
    .then((books) => {
        const previews = books.map((book) => {
            return bookPreview(
              book.id,
              book.title,
              book.description,
              book.isbn_10,
              book.isbn_13
            );
        });

        previews.forEach((element) => {
          container.appendChild(element);
        });
    });

  return container;
};
