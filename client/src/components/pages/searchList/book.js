/* eslint-disable folders/match-regex */
/*
import { doc } from "prettier";
import {
  fetchBooks,
  fetchSpecificBook,
} from "../../../data-access/api-calls/calls.js";
import { back } from "../../../handlers/unset-book.js";
*/
import classes from "./book.module.css";
import { bookownersList } from "./bookowners-list.js";

/**
 * The book card.
 *
 * @returns {HTMLDivElement} A rendered book page.
 */

export const bookDetail = (
  id,
  title = "Unknown",
  description = "",
  isbn_10 = "",
  isbn_13 = "",
  authors = ["James Dean"],
  thumbnail = "https://via.placeholder.com/200x200"
) => {
  const bookInfoContainer = document.createElement("div");

  const bookCard = document.createElement("section");
  bookCard.classList.add(classes.book);

  const image = document.createElement("img");
  image.alt = "book cover";
  image.src = thumbnail;

  const details = document.createElement("section");
  details.classList.add(classes.details);

  const header = document.createElement("h2");
  header.innerText = title;

  const writerElement = document.createElement("p");
  writerElement.innerText = authors.join(", ");

  const isbn = document.createElement("p");
  isbn.innerText = `ISBN: ${isbn_10} - ${isbn_13}`;

  const descriptor = document.createElement("p");
  descriptor.innerText = description;
  descriptor.classList.add(classes.descriptor);

  const listDiv = document.createElement("div");
  const ownersList = bookownersList();
  listDiv.appendChild(ownersList);

  details.appendChild(header);
  details.appendChild(writerElement);
  details.appendChild(isbn);
  details.appendChild(descriptor);

  bookCard.appendChild(image);
  bookCard.appendChild(details);

  bookInfoContainer.appendChild(bookCard);
  bookInfoContainer.appendChild(listDiv);

  return bookInfoContainer;
};
