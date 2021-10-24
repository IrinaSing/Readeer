import { router } from "../../../../init/router.js";

export const userRegistered = (username) => {
  const successCard = document.createElement("div");
  successCard.classList = "card w-50";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const title = document.createElement("h5");
  title.className = "card-title";
  title.textContent = "Thank you for joining us";

  const p = document.createElement("p");
  p.className = "card-text";
  p.textContent = `Welcome to Readeer, ${username}! You are successfully registered!`;

  const button = document.createElement("a");
  button.href = "/login";
  button.setAttribute("data-navigo", true);
  button.textContent = "Log in";
  button.classList = "btn btn-primary";
  /*
  const button = document.createElement("a");
  button.href = router.navigate("/login");
  button.setAttribute("data-navigo", true);
  button.textContent = "Log in";
  button.classList = "btn btn-primary";
*/
  cardBody.appendChild(title);
  cardBody.appendChild(p);
  cardBody.appendChild(button);
  successCard.appendChild(cardBody);

  return successCard;
};
