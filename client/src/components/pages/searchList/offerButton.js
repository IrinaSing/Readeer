import { navigateToLoginPage } from "../../../handlers/navigate-to-login.js";
import { state } from "../../../init/state.js";

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

  offerButton.addEventListener("click", (event) => {
    console.log(event, "clicked");

    if (!state.isSignedIn) {
      navigateToLoginPage(event);
      console.log(state.isSignedIn);
    } else {
      alert("The book is offered");
      // navigateToMyBooksPage(event);
      offerButton.innerText = "Offered";
    }
  });

  // container.appendChild(offerButton); // adds the offer button under the book card

  return offerButton;
};
