/**
 * The register page. Loads when the register page is requested.
 *
 * @returns {HTMLDivElement} A rendered register page.
 */
export const register = () => {
  const container = document.createElement('div');
  container.className = 'body';

  container.innerHTML = `Welcome to the Registration page.`;
  return container;
};
