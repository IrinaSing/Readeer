import { registerForm } from './components/register-form.js';
/**
 * The register page. Loads when the register page is requested.
 *
 * @returns {HTMLDivElement} A rendered register page.
 */
export const register = () => {
  const container = document.createElement('div');
  container.className = 'body';
  // container.innerHTML = `Welcome to the Registration page.`;

  // container.appendChild(document.createElement("br"));
  container.appendChild(registerForm());
  return container;
};
