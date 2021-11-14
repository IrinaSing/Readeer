import { state } from '../init/state.js';

export const setBook = (bookIdentifier) => {
  state.currentBookId = bookIdentifier;
  state.isCurrentBookFromGoogle = false;
};

export const setBookFromGoogle = (bookIdentifier) => {
  state.currentBookId = bookIdentifier;
  state.isCurrentBookFromGoogle = true;
};
