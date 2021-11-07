import { offerBook } from "../../../handlers/offerButtonHandler.js";

// create a button component for offer
export const offerButtonComponent = () => {
  // const container = document.createElement("div");

  const offerButton = document.createElement("button");
  offerButton.id = "offer";
  offerButton.className = "offer-btn";
  offerButton.innerText = "Offer";
  offerButton.style.backgroundColor = "#F9D63E";
  offerButton.style.borderRadius = "20px";
  offerButton.style.height = "37px";
  offerButton.style.width = "164px";
  offerButton.style.border = "none";

  offerButton.addEventListener("click", offerBook);

  // container.appendChild(offerButton); // adds the offer button under the book card

  return offerButton;
};
