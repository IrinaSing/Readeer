import { navigateToLoginPage } from ".navigate-to-login.js";
import { state } from "../../../init/state.js";

export const offerBook = async (event) => {
  event.stopPropagation();
  event.preventDefault();

  const button = event.target;

  console.log(event, "clicked");
  if (!state.isSignedIn) {
    navigateToLoginPage(event);
    console.log(state.isSignedIn);
  } else {
    // deactivite offer button
    button.disabled = true;

    // TODO fetch backend
    const response = await postBookOffer();
    if (response.message === "Book added") {
      document.removeChild(button);
      // TODO offered button without any handlers

      // TODO beautify alert
      alert("The book is offered");
    } else {
      button.disabled = false;
    }
  }
};
