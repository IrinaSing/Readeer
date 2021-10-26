import { logIn } from "../../../handlers/login.js";
import animalReadingReading from "../../../../public/icons/lion_reading.png";

/**
 * This component creates a registration form inside a div.
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
  introDiv.style.backgroundColor = "#9ed7f0";

  const pictureDiv = document.createElement("div");
  pictureDiv.className = "col-3";

  const headerDiv = document.createElement("div");
  headerDiv.className = "col-9";

  const animalReading = document.createElement("img");
  animalReading.src = animalReadingReading;
  animalReading.className = "rounded";
  animalReading.style.maxWidth = "70%";
  pictureDiv.appendChild(animalReading);

  const header = document.createElement("h1");
  header.textContent = "Join Readeer to find a book for your child!";
  header.className = "h1";
  header.style.color = "white";
  headerDiv.appendChild(header);
  introDiv.appendChild(pictureDiv);
  introDiv.appendChild(headerDiv);
  divContainer.appendChild(introDiv);

  // body of the form
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const form = document.createElement("form");
  form.action = "/api/register";
  form.method = "POST";
  form.addEventListener("submit", logIn);

  // email
  const emailField = document.createElement("div");
  emailField.classList = "form-group col-md-6";

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
  passwordField.classList = "form-group col-md-6";
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

  // button register in div
  const formRow5 = document.createElement("div");
  formRow5.className = "form-row";

  // submit button
  const submitBtn = document.createElement("BUTTON");
  submitBtn.classList = "btn btn-primary";
  submitBtn.type = "submit";
  submitBtn.value = "submit";
  submitBtn.innerHTML = "Login";
  submitBtn.id = "loginSubmitButton";

  // if you don't have an account - register
  const registerDiv = document.createElement("div");
  registerDiv.classList = "m-3";

  const singInP = document.createElement("p");

  const registerLink = document.createElement("a");
  registerLink.href = "/register";
  registerLink.setAttribute("data-navigo", true);
  registerLink.textContent = "Don't have an account yet? Register";

  singInP.appendChild(registerLink);
  registerDiv.appendChild(registerLink);

  formRow5.appendChild(submitBtn);
  formRow5.appendChild(registerDiv);

  form.appendChild(formRow5);
  form.appendChild(statusMessageDiv);
  divContainer.appendChild(form);
  return divContainer;
};
