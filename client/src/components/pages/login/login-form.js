import { logIn } from "../../../handlers/login.js";
import animalReadingReading from "../../../../public/icons/elephant_reading.png";

/**
 * This component creates a login form inside a div.
 *
 * @returns {object} - A div element.
 */

export const loginForm = () => {
  // header
  const divContainer = document.createElement("div");
  divContainer.classList = "container py-5 w-75";
  divContainer.id = "divContainer";

  const introDiv = document.createElement("div");
  introDiv.className = "row p-3 rounded";
  introDiv.style.backgroundColor = "#DEF3FF";

  const pictureDiv = document.createElement("div");
  pictureDiv.className = "col-md-4";

  const headerDiv = document.createElement("div");
  headerDiv.className = "col-md-8";

  const animalReading = document.createElement("img");
  animalReading.src = animalReadingReading;
  animalReading.className = "d-block";
  animalReading.style.width = "100%";
  pictureDiv.appendChild(animalReading);

  const header = document.createElement("p");
  header.textContent = "Search for books available in your neighbourhood!";
  header.className = "h1 banner-text";
  header.style.color = "#474747";
  headerDiv.appendChild(header);
  introDiv.appendChild(headerDiv);
  introDiv.appendChild(pictureDiv);
  divContainer.appendChild(introDiv);

  // cardbody for the form
  const cardBody = document.createElement("div");
  cardBody.className =
    "card-body align-items-center d-flex justify-content-center";

  const form = document.createElement("form");
  form.action = "/api/login";
  form.method = "POST";
  form.addEventListener("submit", logIn);

  const fieldsContainer = document.createElement("div");

  // email
  const emailField = document.createElement("div");
  emailField.classList = "form-group";

  const emailLabel = document.createElement("label");
  emailLabel.htmlFor = "email";
  emailLabel.innerHTML = "E-mail";
  emailLabel.classList = "col-form-label";

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.className = "form-control";
  emailInput.name = "email";
  emailInput.id = "email";
  emailInput.placeholder = "E-mail";
  emailInput.required = true;

  emailField.appendChild(emailLabel);
  emailField.appendChild(emailInput);

  // Password
  const passwordField = document.createElement("div");
  passwordField.classList = "form-group";
  passwordField.id = "passwordField";

  const passwordLabel = document.createElement("label");
  passwordLabel.htmlFor = "password";
  passwordLabel.innerHTML = "Password";
  passwordLabel.classList = "col-form-label";

  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.className = "form-control";
  passwordInput.name = "password";
  passwordInput.id = "password";
  passwordInput.placeholder = "Password";
  passwordInput.required = true;

  passwordField.appendChild(passwordLabel);
  passwordField.appendChild(passwordInput);

  // alert div
  const statusMessageDiv = document.createElement("DIV");
  statusMessageDiv.id = "statusMessageDiv";
  statusMessageDiv.className = "p-3";

  // submit button div
  const submitDiv = document.createElement("DIV");
  submitDiv.classList = "text-center m-3";

  // submit button
  const submitBtn = document.createElement("BUTTON");
  submitBtn.classList = "btn btn-blue";
  submitBtn.type = "submit";
  submitBtn.value = "submit";
  submitBtn.innerHTML = "Login";
  submitBtn.id = "loginSubmitButton";

  submitDiv.appendChild(submitBtn);

  // if you don't have an account - register
  const registerDiv = document.createElement("div");
  registerDiv.classList = "m-3";

  const logInP = document.createElement("p");

  const registerLink = document.createElement("a");
  registerLink.href = "/register";
  registerLink.setAttribute("data-navigo", true);
  registerLink.textContent = "Don't have an account yet? Register";

  logInP.appendChild(registerLink);
  registerDiv.appendChild(registerLink);

  fieldsContainer.appendChild(emailField);
  fieldsContainer.appendChild(passwordField);
  fieldsContainer.appendChild(submitDiv);
  fieldsContainer.appendChild(registerDiv);
  form.appendChild(fieldsContainer);
  cardBody.appendChild(form);
  divContainer.appendChild(cardBody);
  divContainer.appendChild(statusMessageDiv);
  return divContainer;
};
