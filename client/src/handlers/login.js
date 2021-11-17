import { postLogin } from '../data-access/api-calls/calls.js';
import { errorAlert } from '../components/shared/error-alert.js';
import { navigateToHomepage } from './navigate-to-homepage.js';
import { state } from '../../src/init/state.js';

/**
 * This function validated user input and submits the data to the database.
 *
 * @param {event} event - Click on the button "register".
 * @listens event
 */

export const logIn = async (event) => {
  event.preventDefault();
  event.stopPropagation();

  const email = event.target[0];
  const password = event.target[1];
  const btn = document.getElementById('loginSubmitButton');
  btn.disabled = true;

  setTimeout(() => {
    btn.disabled = false;
  }, 2000);

  // sending data to db
  const response = await postLogin(email.value, password.value);

  if (response.error) {
    const statusMessageDiv = document.getElementById('statusMessageDiv');
    statusMessageDiv.appendChild(
      errorAlert(`<i class="fa fa-times-circle"></i> ${response.error}`)
    );
    setTimeout(() => {
      statusMessageDiv.innerHTML = '';
    }, 3000);
    return;
  }

  if (response.username) {
    // push data into state
    state.token = response.token;
    state.email = response.email;
    state.isSignedIn = true;
    state.userId = response.userId;
    state.username = response.username;

    if (state.isSignedIn) {
      navigateToHomepage(event);
    }
  }
};
