import { displayBooks } from "./displaybooks.js";

export let mySearch = [];

export const loadBooks = async () => {
  try {
    // getting data from api
    const res = await fetch("https://readeer-app.herokuapp.com/api/books");
    mySearch = await res.json();
    displayBooks(mySearch);
  } catch (err) {
    console.error(err);
  }
};

loadBooks();
