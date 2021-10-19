/**
 * The register page. Loads when the register page is requested.
 *
 * @returns {HTMLDivElement} A rendered register page.
 */
export const about = () => {
  const container = document.createElement('div');
  container.className = 'body';

  container.innerHTML = `Welcome to the about us page.`;
  return container;
};
