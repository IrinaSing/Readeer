import { postRegister } from '../data-access/api-calls/calls.js';
import { errorAlert } from '../components/pages/register/components/error-alert.js';
import { userRegistered } from '../components/pages/register/components/user-registered.js';

/**
 * This function validated user input and submits the data to the database.
 *
 * @param {event} event - Click on the button "register".
 * @listens event
 */

export const registerUser = async (event) => {
  event.preventDefault();
  event.stopPropagation();

  const firstName = event.target[0];
  const lastName = event.target[1];
  const username = event.target[2];
  const city = event.target[3];
  const email = event.target[4];
  const birthday = event.target[5];
  const password = event.target[6];
  const pswConfInput = event.target[7];

  const btn = document.getElementById('registerSubmitButton');
  btn.disabled = true;

  setTimeout(() => {
    btn.disabled = false;
  }, 2000);

  // validation
  const regName = /\b([A-zÀ-ÿ][-,A-z. ']+[ ]*)+/;
  // const regName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
  if (!regName.test(firstName.value)) {
    const statusMessageDiv = document.getElementById('statusMessageDiv');
    statusMessageDiv.appendChild(
      errorAlert('First name should not contain numbers.')
    );
    setTimeout(() => {
      statusMessageDiv.innerHTML = '';
    }, 3000);
    return;
  }

  if (!regName.test(lastName.value)) {
    const statusMessageDiv = document.getElementById('statusMessageDiv');
    statusMessageDiv.appendChild(
      errorAlert('Last name should not contain numbers.')
    );
    setTimeout(() => {
      statusMessageDiv.innerHTML = '';
    }, 3000);
    return;
  }

  if (!regName.test(city.value)) {
    const statusMessageDiv = document.getElementById('statusMessageDiv');
    statusMessageDiv.appendChild(
      errorAlert('City name should not contain numbers.')
    );
    setTimeout(() => {
      statusMessageDiv.innerHTML = '';
    }, 3000);
    return;
  }

  if (password.value.length <= 5) {
    const statusMessageDiv = document.getElementById('statusMessageDiv');
    statusMessageDiv.appendChild(
      errorAlert('Password should at least 6 characters long.')
    );
    setTimeout(() => {
      statusMessageDiv.innerHTML = '';
    }, 3000);
    return;
  }

  if (password.value.length >= 15) {
    const statusMessageDiv = document.getElementById('statusMessageDiv');
    statusMessageDiv.appendChild(
      errorAlert('Password should not be longer than 15 characters.')
    );
    setTimeout(() => {
      statusMessageDiv.innerHTML = '';
    }, 3000);
    return;
  }

  if (password.value !== pswConfInput.value) {
    const statusMessageDiv = document.getElementById('statusMessageDiv');
    statusMessageDiv.appendChild(errorAlert('Passwords do not match!'));
    setTimeout(() => {
      statusMessageDiv.innerHTML = '';
    }, 3000);
    return;
  }

  // sending data to db
  const response = await postRegister(
    email.value,
    username.value,
    password.value,
    firstName.value,
    lastName.value,
    birthday.value,
    city.value
  );

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
    const divContainer = document.getElementById('divContainer');
    divContainer.innerHTML = '';
    divContainer.appendChild(userRegistered(response.username));
  }
};
