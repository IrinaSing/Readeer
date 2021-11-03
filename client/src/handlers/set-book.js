import { state } from '../init/state.js';

export const setBook = (bookIdentifier) => {
    state.currentBookId = bookIdentifier;
};
