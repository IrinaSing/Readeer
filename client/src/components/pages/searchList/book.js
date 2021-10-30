import {
  fetchBooks,
  fetchSpecificBook,
} from '../../../data-access/api-calls/calls';
import { back } from '../../../handlers/unset-book.js';

import classes from './book.module.css';

/**
 * The login page.
 *
 * @returns {HTMLDivElement} A rendered login page.
 */
export const bookDetail = (
  id,
  title = 'Unknown',
  description = '',
  isbn_10 = '',
  isbn_13 = '',
  writer = 'James Dean',
  thumbnail = 'https://via.placeholder.com/200x200'
) => {
  const container = document.createElement('section');
  container.classList.add(classes.book);

  const image = document.createElement('img');
  image.alt = 'book cover';
  image.src = thumbnail;

  const details = document.createElement('section');
  details.classList.add(classes.details);

  const header = document.createElement('h2');
  header.innerText = title;

  const writerElement = document.createElement('p');
  writerElement.innerText = writer;

  const isbn = document.createElement('p');
  isbn.innerText = `ISBN: ${isbn_10} - ${isbn_13}`;

  const descriptor = document.createElement('p');
  descriptor.innerText = description;
  descriptor.classList.add(classes.descriptor);

  details.appendChild(header);
  details.appendChild(writerElement);
  details.appendChild(isbn);
  details.appendChild(descriptor);

  container.appendChild(image);
  container.appendChild(details);

  return container;
};
