//https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes+isbn:0547539630+intitle:for&maxResults=30&printType=books

import { state } from '../init/state.js';

export const googleSearchQuery = () => {
  const filter = state.searchFilter;
};
