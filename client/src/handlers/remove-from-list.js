import { navigateToMyOffers } from "./navigateToOffersPage.js";
import { deleteBookOffer } from "../data-access/api-calls/calls.js";

export const removeFromList = async (idBook) => {
  // get the book id
  const bookId = idBook;

  // fetch backend
  const response = await deleteBookOffer(bookId);

  if (response.message === "Book is deleted") {
    navigateToMyOffers();
  }
};
