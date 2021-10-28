import { displayBooks } from "./displaybooks.js";
import { mySearch } from "./loadbooks.js";

// adding event listener on search button
const buttonElement = document.createElement("button");
buttonElement.addEventListener("click", () => {
  // getting the value in the search box
  const inputValue = document.getElementById("search").value.toLowerCase();
  console.log(inputValue);
  // filtering books according to the search(input value)
  const filteredBooks = mySearch.filter((book) => {
    return book.title.toLowerCase().includes(inputValue);
  });
  displayBooks(filteredBooks);
  console.log("hello");

  // Clears the search box after clicking search button
  const input = document.getElementById("search");
  input.value = "";
});
