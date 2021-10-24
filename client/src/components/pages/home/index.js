import { search } from "./searchbar";
import { showcase } from "./showCase.js";
import { usefulContent } from "./useful.js";


/**
 * The home page.
 *
 * @returns {HTMLDivElement} A rendered home page.
 */
export const home = () => {
  const container = document.createElement("div");
  container.className = "body";
  container.appendChild(search());
  container.appendChild(document.createElement("br"));
  // container.appendChild(document.createTextNode('Welcome to HomePage!'));
  const title = "What is Readeer?";
  const imgURL =
    "https://image.freepik.com/free-photo/little-girl-reading-book-with-teddy-bear-floor-concept-relaxation-friendship_169016-1293.jpg";
  const content =
    "Readeer is a platform for exchange of children's books in your neighbourhood. Currently available only in Belgium.";
  const contentUseful = `Yes if
  You are a parent who wants to give away books when children outgrow them.
  You are a parent who lives abroad and experiences difficulty finding books for family reading in your mother tongue.
  You want to involve your children in sharing activities, to socialize them.
  You want to connect with some other family and find friends for your child to speak their mother language with.
  You are a child who likes to read and finds it fun to exchange books with peers.`;
  container.appendChild(showcase(title, imgURL, content));
  container.appendChild(usefulContent("Will it be useful for me?", contentUseful));


  return container;
};
