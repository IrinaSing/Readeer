import { registerUser } from "../../../handlers/register-user.js";

/**
 * This component creates a registration form inside a div.
 *
 * @returns {object} - A div element.
 */

export const registerForm = () => {
  const divContainer = document.createElement("div");
  divContainer.classList = "container py-5 h-100";
  divContainer.id = "divContainer";

  const form = document.createElement("form");
  form.action = "/api/register";
  form.method = "POST";
  form.addEventListener("submit", registerUser);

  // first row
  const formRow1 = document.createElement("div");
  formRow1.className = "form-row";

  // name input
  const nameField = document.createElement("div");
  nameField.classList = "form-group col-md-6";

  const nameLabel = document.createElement("label");
  nameLabel.htmlFor = "firstName";
  nameLabel.innerHTML = "First name";
  nameLabel.classList = "col-form-label";

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.className = "form-control";
  nameInput.name = "firstName";
  nameInput.id = "firstName";
  nameInput.placeholder = "First name";
  nameInput.required = true;

  nameField.appendChild(nameLabel);
  nameField.appendChild(nameInput);

  // surname input
  const surnameField = document.createElement("div");
  surnameField.classList = "form-group col-md-6";

  const surnameLabel = document.createElement("label");
  surnameLabel.htmlFor = "lastName";
  surnameLabel.innerHTML = "Last name";
  surnameLabel.classList = "col-form-label";

  const surnameInput = document.createElement("input");
  surnameInput.type = "text";
  surnameInput.className = "form-control";
  surnameInput.name = "lastName";
  surnameInput.id = "lastName";
  surnameInput.placeholder = "Last name";
  surnameInput.required = true;

  surnameField.appendChild(surnameLabel);
  surnameField.appendChild(surnameInput);

  // finish 1 row
  formRow1.appendChild(nameField);
  formRow1.appendChild(surnameField);

  // second row
  const formRow2 = document.createElement("div");
  formRow2.className = "form-row";

  // username
  const userNameField = document.createElement("div");
  userNameField.classList = "form-group col-md-6";

  const usernameLabel = document.createElement("label");
  usernameLabel.htmlFor = "username";
  usernameLabel.innerHTML = "Username";
  usernameLabel.classList = "col-form-label";

  const usernameInput = document.createElement("input");
  usernameInput.type = "text";
  usernameInput.className = "form-control";
  usernameInput.name = "username";
  usernameInput.id = "username";
  usernameInput.placeholder = "Username";
  usernameInput.autocomplete = "nope";
  usernameInput.required = true;

  userNameField.appendChild(usernameLabel);
  userNameField.appendChild(usernameInput);

  // city

  const cityField = document.createElement("div");
  cityField.classList = "form-group col-md-6";

  const cityLabel = document.createElement("label");
  cityLabel.htmlFor = "city";
  cityLabel.innerHTML = "City";
  cityLabel.classList = "col-form-label";

  const cityInput = document.createElement("input");
  cityInput.type = "text";
  cityInput.className = "form-control";
  cityInput.name = "city";
  cityInput.id = "city";
  cityInput.placeholder = "City";
  cityInput.required = true;

  cityField.appendChild(cityLabel);
  cityField.appendChild(cityInput);

  // finish 2 row

  formRow2.appendChild(userNameField);
  formRow2.appendChild(cityField);

  // start 3 row
  const formRow3 = document.createElement("div");
  formRow3.className = "form-row";

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

  // birthday
  const bdayDiv = document.createElement("div");
  bdayDiv.classList = "form-group col-md-6";

  const bdayLabel = document.createElement("label");
  bdayLabel.htmlFor = "birthday";
  bdayLabel.className = "form-label";
  bdayLabel.innerHTML = "Date of birth";
  bdayLabel.classList = "col-form-label";

  const inputContainer = document.createElement("div");

  const inputGroup = document.createElement("div");
  inputGroup.id = "datepicker";

  const bdayInput = document.createElement("input");
  bdayInput.type = "date";
  bdayInput.min = "1920-01-01";
  bdayInput.max = "2021-10-20";
  bdayInput.className = "form-control";
  bdayInput.name = "birthday";
  bdayInput.id = "birthday";
  bdayInput.placeholder = "Choose the date of birth";
  bdayInput.required = true;

  inputGroup.appendChild(bdayInput);
  inputContainer.appendChild(inputGroup);

  bdayDiv.appendChild(bdayLabel);
  bdayDiv.appendChild(inputContainer);

  formRow3.appendChild(emailField);
  formRow3.appendChild(bdayDiv);

  // start 4 row
  const formRow4 = document.createElement("div");
  formRow4.className = "form-row";

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

  formRow4.appendChild(passwordField);
  // Password confirmation
  const pswConfField = document.createElement("div");
  pswConfField.classList = "form-group col-md-6";

  const pswConfLabel = document.createElement("label");
  pswConfLabel.htmlFor = "inputPswConf";
  pswConfLabel.innerHTML = "Confirm password";
  pswConfLabel.classList = "col-form-label";

  const pswConfInput = document.createElement("input");
  pswConfInput.type = "password";
  pswConfInput.className = "form-control";
  pswConfInput.name = "inputPswConf";
  pswConfInput.id = "inputPswConf";
  pswConfInput.placeholder = "Confirm password";
  pswConfInput.required = true;

  pswConfField.appendChild(pswConfLabel);
  pswConfField.appendChild(pswConfInput);

  formRow4.appendChild(pswConfField);

  // agreement
  const agreementDiv = document.createElement("div");
  agreementDiv.className = "form-check";

  const agreementLabel = document.createElement("label");
  agreementLabel.className = "form-check-label";
  agreementLabel.for = "validcheck";
  agreementLabel.innerHTML = "Agree to terms and conditions";

  const agreementInput = document.createElement("input");
  agreementInput.className = "form-check-input";
  agreementInput.type = "checkbox";
  agreementInput.value = "";
  agreementInput.id = "validcheck";
  agreementInput.required = true;

  agreementDiv.appendChild(agreementInput);
  agreementDiv.appendChild(agreementLabel);

  const agreementDivContainer = document.createElement("div");
  agreementDivContainer.classList = "form-group col-md-6";
  agreementDivContainer.appendChild(agreementDiv);

  // alert div
  const statusMessageDiv = document.createElement("DIV");
  statusMessageDiv.id = "statusMessageDiv";
  statusMessageDiv.className = "p-3";

  // button sign in div
  const formRow5 = document.createElement("div");
  formRow5.className = "form-row";

  // submit button
  const submitBtn = document.createElement("BUTTON");
  submitBtn.classList = "btn btn-primary";
  submitBtn.type = "submit";
  submitBtn.value = "submit";
  submitBtn.innerHTML = "Register";
  submitBtn.id = "registerSubmitButton";

  // if you have an account - sign in
  const signInDiv = document.createElement("div");
  signInDiv.classList = "m-3";

  const singInP = document.createElement("p");

  const singInLink = document.createElement("a");
  singInLink.href = "/login";
  singInLink.setAttribute("data-navigo", true);
  singInLink.textContent = "Do you have an account? Sign in";

  singInP.appendChild(singInLink);
  signInDiv.appendChild(singInLink);

  formRow5.appendChild(submitBtn);
  formRow5.appendChild(signInDiv);

  form.appendChild(formRow1);
  form.appendChild(formRow2);
  form.appendChild(formRow3);
  form.appendChild(formRow4);
  form.appendChild(agreementDivContainer);
  form.appendChild(formRow5);
  form.appendChild(statusMessageDiv);
  divContainer.appendChild(form);
  return divContainer;
};
