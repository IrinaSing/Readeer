import { loginForm } from "./login-form.js";
/**
 * The login page.
 *
 * @returns {HTMLDivElement} A rendered login page.
 */
export const login = () => {
  const container = document.createElement("div");
  container.className = "body";

  container.appendChild(loginForm());
  return container;
};
