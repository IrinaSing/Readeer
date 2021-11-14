import { navigateToBooksPageWithFilter } from "./navigateToBooksPage.js";
import { deleteBookOffer } from "../data-access/api-calls/calls.js";
import { offerButtonComponent } from "../components/pages/searchList/offerButton.js";
import { state } from "../../src/init/state";

export const unOfferBook = async (event) => {
  event.stopPropagation();
  event.preventDefault();

  const button = event.target;

  // deactivate the button
  button.disabled = true;

  // get the book id
  const bookId = state.currentBookOwnerIds[state.userId].bookId;

  // fetch backend
  const response = await deleteBookOffer(bookId);

  if (response.message === "Book is deleted") {
    // offered button without any handlers
    button.parentElement.appendChild(offerButtonComponent());

    document.getElementById("Unoffer").remove(button);

    // navigate to books specific page
    navigateToBooksPageWithFilter();
  } else {
    button.disabled = false;
  }
};
