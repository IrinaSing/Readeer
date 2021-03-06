import { navigateToBooksPageWithFilter } from './navigateToBooksPage.js';
import { state } from '../init/state.js';
import { postBookOffer } from '../data-access/api-calls/calls.js';
import { offerButtonComponent } from '../components/pages/searchList/offerButton.js';

export const offerBook = async (event) => {
  event.stopPropagation();
  event.preventDefault();

  const button = event.target;

  // deactivate offer button
  button.disabled = true;

  // fetch backend
  const response = await postBookOffer();

  if (response.message === 'Book added') {
    // offered button without any handlers
    button.parentElement.appendChild(offerButtonComponent('Offered'));

    document.getElementById('Offer').remove(button);

    // navigate to books specific page
    navigateToBooksPageWithFilter();
  } else {
    button.disabled = false;
  }
};
