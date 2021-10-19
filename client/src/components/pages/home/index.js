/**
 * The home page.
 *
 * @returns {HTMLDivElement} A rendered home page.
 */
export const home = () => {
  const container = document.createElement('div');
  container.className = 'body';

  container.innerHTML = `welcome to the home page`;

  return container;
};
