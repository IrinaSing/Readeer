// import { displayBooks } from "../components/pages/home/search/displaybooks.js";
// import { mySearch } from "../components/pages/home/search/loadbooks.js";
import { }
// adding event listener on search button
export const searchButtonHandler = (event) => {
  event.preventDefault();
  event.stopPropagation();
  // console.log("search clicked");
  // console.log(event);
  // console.log(event.target[0]);
  const userInput = event.target[0];
  // TODO add filter options for author, ISBN, city, title etc
  // redirect to Books-Page



  // document.createElement("button");
  // buttonElement.addEventListener("click", () => {
  //   // getting the value in the search box
    // const inputValue = document.getElementById("search").value.toLowerCase();
    // console.log(inputValue);
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
};
