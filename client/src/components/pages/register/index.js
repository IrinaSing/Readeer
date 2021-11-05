import { registerForm } from "./register-form.js";
/**
 * The register page. Loads when the register page is requested.
 *
 * @returns {HTMLDivElement} A rendered register page.
 */
export const register = () => {
  const container = document.createElement("div");
  container.className = "body";

  container.appendChild(registerForm());
  return container;
};
