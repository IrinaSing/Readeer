import { navigateToLoginPage } from './navigate-to-login.js';
import { state } from '../init/state.js';
import { postBookOffer } from '../data-access/api-calls/calls.js';
import { offerButtonComponent } from '../components/pages/searchList/offerButton.js';

export const offerBook = async (event) => {
  event.stopPropagation();
  event.preventDefault();
  console.log(state);

  const button = event.target;

  console.log(event, 'clicked');
  if (!state.isSignedIn) {
    navigateToLoginPage(event);
    console.log(state.isSignedIn);
  } else {
    // deactivite offer button
    button.disabled = true;
    // button.innerText = "Offered";

    // fetch backend
    const response = await postBookOffer();
    if (response.message === 'Book added') {
      // TODO offered button without any handlers
      button.parentElement.appendChild(offerButtonComponent('Offered'));

      document.getElementById('Offer').remove(button);

      // TODO beautify alert
      alert('The book is offered');
    } else {
      button.disabled = false;
    }
  }
};
