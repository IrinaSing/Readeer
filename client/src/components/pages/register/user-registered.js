import { navigateToLoginPage } from "../../../handlers/navigateToLogin.js";

export const userRegistered = (username) => {
  const successCard = document.createElement("div");
  successCard.classList = "card card-primary text-center w-50";

  const cardHeader = document.createElement("div");
  cardHeader.className = "card-header bg-success";

  const logoSuccess = document.createElement("i");
  logoSuccess.classList = "fas fa-check-square";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  cardBody.appendChild(logoSuccess);

  const title = document.createElement("h3");
  title.className = "card-title";
  title.textContent = `Thank you for joining us, ${username}!`;

  const p = document.createElement("p");
  p.className = "card-text";
  p.textContent = `Welcome to Readeer!`;

  const button = document.createElement("button");
  button.className = "btn btn-success";
  button.textContent = "Log in";

  button.addEventListener("click", navigateToLoginPage);

  cardBody.appendChild(title);
  // cardBody.appendChild(p);
  cardBody.appendChild(button);
  successCard.appendChild(cardHeader);
  successCard.appendChild(cardBody);

  return successCard;
};
