/* eslint-disable folders/match-regex */
/*
import { doc } from "prettier";
import {
  fetchBooks,
  fetchSpecificBook,
} from "../../../data-access/api-calls/calls.js";
import { back } from "../../../handlers/unset-book.js";
*/
import { googleManager } from '../../../business-logic/googleBooksAPI';
import { fetchBooks } from '../../../data-access/api-calls/calls';
import classes from './book.module.css';
import { offerButtonComponentWithHandler } from './offerButton.js';

/**
 * The book card.
 *
 * @returns {HTMLDivElement} A rendered book page.
 */

export const bookDetail = (
  id,
  title = 'Unknown',
  description = '',
  isbn_10 = '',
  isbn_13 = '',
  authors = ['James Dean'],
  thumbnail = null
) => {
  const bookInfoContainer = document.createElement('div');
  bookInfoContainer.id = 'bookInfoContainer';

  const bookCard = document.createElement('section');
  bookCard.classList.add(classes.book);

  const infoContainer = document.createElement('div');
  infoContainer.className = 'row m-3';

  const imgHolder = document.createElement('div');
  imgHolder.className = 'col-md-2';

  const textHolder = document.createElement('div');
  textHolder.className = 'col-md-10';

  const image = document.createElement('img');
  image.alt = 'book cover';
  image.style.visibility = 'hidden';

  // fetch the image from the google books api
  if (!thumbnail) {
    googleManager.getPictureURL(isbn_10).then((url) => {
      image.src = url;
      image.style.visibility = 'visible';
    });
  } else {
    image.src = thumbnail;
    image.style.visibility = 'visible';
  }

  image.className = 'img-fluid rounded-start d-block  mx-auto';
  imgHolder.appendChild(image);

  const details = document.createElement('section');
  details.classList.add(classes.details);

  const header = document.createElement('h2');
  header.innerText = title;

  const writerElement = document.createElement('p');
  writerElement.innerText = authors.join(', ');
  writerElement.style.fontWeight = 'bold';

  const isbn = document.createElement('p');
  isbn.innerText = `ISBN: ${isbn_10} - ${isbn_13}`;
  isbn.style.fontSize = '14px';

  const descriptor = document.createElement('p');
  descriptor.innerText = description;
  descriptor.classList.add(classes.descriptor);

  const listDiv = document.createElement('div');
  listDiv.id = 'listDiv';
  listDiv.className = 'p-3';

  const offerButton = offerButtonComponentWithHandler();

  details.appendChild(header);
  details.appendChild(writerElement);
  details.appendChild(isbn);
  details.appendChild(descriptor);

  textHolder.appendChild(details);
  details.appendChild(offerButton);

  infoContainer.appendChild(imgHolder);
  infoContainer.appendChild(textHolder);
  bookCard.appendChild(infoContainer);

  bookInfoContainer.appendChild(bookCard);
  bookInfoContainer.appendChild(listDiv);

  return bookInfoContainer;
};
