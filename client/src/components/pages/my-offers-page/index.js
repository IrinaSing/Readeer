import classes from "../searchList/index.module.css";

import {
  fetchSpecificBook,
  performBookSearchPost,
  // deleteBookOffer,
} from "../../../data-access/api-calls/calls.js";
import { setBook } from "../../../handlers/set-book.js";
import { state } from "../../../init/state.js";
import { reloadPage } from "../../layout/page.js";
import { bookPreview } from "../../shared/bookPreview.js";
import { bookDetail } from "../searchList/book.js";
import { searchBarComponent } from "../../shared/searchbar.js";
import { loadingComponent } from "../../shared/loading.js";
import { findBookOwners } from "../../../handlers/find-bookowners.js";
import { errorAlert } from "../../shared/error-alert.js";
import { createFilter } from "../../../logic/createFilter.js";
import { button } from "../../shared/button.js";
import { removeFromList } from "../../../handlers/remove-from-list.js";

/**
 * The Books search result page.
 *
 * @returns {HTMLDivElement} A rendered search result page.
 */

export const myOffers = () => {
  const container = document.createElement("div");
  container.className = "body";

  const searchBar = searchBarComponent();
  container.appendChild(searchBar);

  const section = document.createElement("section");
  section.classList.add("container");
  section.classList.add(classes.list);
  container.appendChild(section);

  const loadingElement = loadingComponent();
  section.appendChild(loadingElement);

  if (state.currentBookId) {
    fetchSpecificBook(state.currentBookId).then((book) => {
      state.currentBookId = book;
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

      // get data about all offers

      if (!state.isSignedIn) {
        const listDiv = document.getElementById("listDiv");
        const alert = errorAlert("Please log in to see offers");
        listDiv.appendChild(alert);
      } else {
        findBookOwners(book.isbn_13);
      }
    });

    state.currentBookId = "";
    return container;
  }

  // create filter by id
  const query = "userId:";
  const filterInput = query + state.userId;
  const filter = createFilter(filterInput);
  state.searchFilter = filter;

  // apply filter to return user's books

  if (state.isSignedIn) {
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
              reloadPage(myOffers);
            },
            (id) => {
              removeFromList(id);
            }
          );
        });

        previews.forEach((element) => {
          section.appendChild(element);
        });
      } else {
        const warning = document.createElement("div");
        warning.className = "p-3 my-5 bg-danger text-white fs-3";
        warning.innerText = `It looks like you don't have any offers yet.`;
        section.appendChild(warning);
      }
    });
  }
  state.searchFilter = "";
  return container;
};
