import { displayBooks } from "../components/pages/home/search/displaybooks.js";
import { mySearch } from "../components/pages/home/search/loadbooks.js";

// adding event listener on search button
export const searchButtonHandler = (event) => {
  event.preventDefault();
  event.stopPropagation();

  // document.createElement("button");
  // buttonElement.addEventListener("click", () => {
  //   // getting the value in the search box
  //   const inputValue = document.getElementById("search").value.toLowerCase();
  //   console.log(inputValue);
  //   // filtering books according to the search(input value)
  //   const filteredBooks = mySearch.filter((book) => {
  //     return book.title.toLowerCase().includes(inputValue);
  //   });
  //   displayBooks(filteredBooks);
  //   console.log("hello");
  
  //   // Clears the search box after clicking search button
  //   const input = document.getElementById("search");
  //   input.value = "";
  // });
}




