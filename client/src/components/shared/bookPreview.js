/* eslint-disable filenames/match-regex */
import { googleManager } from "../../business-logic/googleBooksAPI.js";
import classes from "./bookPreview.module.css";

export const bookPreview = (
  id,
  title = "Unknown",
  description = "",
  isbn_10 = "",
  isbn_13 = "",

  onClick = (id) => {}
) => {
  const container = document.createElement("article");
  container.id = id;
  container.classList.add(classes.preview);

  const image = document.createElement("img");
  image.alt = "book cover";
  image.style.visibility = "hidden";

  // fetch the image from the google books api
  googleManager.getPictureURL(isbn_10).then((url) => {
    image.src = url;
    image.style.visibility = "visible";
  });

  const header = document.createElement("h1");
  header.innerText = title;

  const isbn = document.createElement("p");
  isbn.innerText = `${isbn_10} - ${isbn_13}`;

  const descriptor = document.createElement("p");
  descriptor.innerText = description;
  descriptor.classList.add(classes.descriptor);

  const viewListings = document.createElement("a");
  viewListings.innerText = "View";
  viewListings.href = "#";
  viewListings.addEventListener("click", (event) => {
    event.preventDefault();
    onClick(id);
  });

  container.appendChild(image);
  container.appendChild(header);
  //container.appendChild(isbn);
  container.appendChild(descriptor);
  container.appendChild(viewListings);

  return container;
};
