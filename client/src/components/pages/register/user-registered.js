import { navigateToLoginPage } from "../../../handlers/navigateToLogin.js";
import partyIcon from "../../../../public/icons/party.png";

export const userRegistered = (username) => {
  const successCard = document.createElement("div");
  successCard.classList = "card card-primary text-center w-50";

  const cardHeader = document.createElement("div");
  cardHeader.className = "card-header bg-success";

  const logoSuccess = document.createElement("img");
  logoSuccess.src = partyIcon;
  logoSuccess.className = "rounded";
  logoSuccess.style.maxWidth = "20%";
  cardHeader.appendChild(logoSuccess);

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

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
  title.appendChild(p);
  cardBody.appendChild(button);
  successCard.appendChild(cardHeader);
  successCard.appendChild(cardBody);

  return successCard;
};
